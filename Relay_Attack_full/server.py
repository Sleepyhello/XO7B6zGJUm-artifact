import frida
import socket
import subprocess
import sys
import threading
import time

def bytes_to_list(bytes):
  return [b for b in bytes]

server_data = {
  "sid": None,
  "token": "",
  "script": None,
  "session": None,
  "device": None,
  "request_script": None,
  "message": b"",
  "response_ready": threading.Event(),
  "hook_ready": threading.Event(),
  "processing": False,
}

def server_listening():
  UDP_IP = "127.0.0.1"
  UDP_PORT = 5362

  sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  sock.bind((UDP_IP, UDP_PORT))

  while True:
    data, addr = sock.recvfrom(1024)

    if (server_data["processing"]):
      sock.sendto(b"ERROR\nAlready processing a request\n\n", addr)
      
    else:    
      print("[+] Received request from (" + str(addr[0]) + ", " + str(addr[1]) + ")")
      server_data["response_ready"].clear()
      server_data["hook_ready"].clear()
      server_data["message"] = b""
      server_data["processing"] = True
      
      launch_frida_scripts(data)
      
      # Wait for server.ts to send both sid and token
      timeout = 20
      if server_data["response_ready"].wait(timeout):
        message = server_data["message"]
        print(f"[+] Sending response to {addr}")
        sock.sendto(message, addr)
      else:
        print("[-] Timeout waiting for response from hooks")
        sock.sendto(b"ERROR\nTimeout\n\n", addr)
      
      server_data["processing"] = False

'''
Find device using device_name
'''
def find_device(device_name):
  devices = frida.enumerate_devices()

  for device in devices:
    if device.id == device_name:
      return device      
  
  print("Could not find device's serial\n" \
  "Check if it is the correct one with adb devices command")
  sys.exit(0)

'''
Return the pid of an application from a specific using package_name
'''
def find_pid(device, package_name):
  try:
    for a in device.enumerate_applications():
      if a.identifier == package_name:
        return a.pid
      
    return None
  
  except:
    adb_pid = find_pid_adb(device)
    return adb_pid

def find_pid_adb(device):
  try:
    cmd = f"adb -s {device.id} shell pgrep android.vending"
    result = subprocess.run(
        cmd,
        shell=True,
        capture_output=True,
        text=True,
        check=True
    )
    
    output = result.stdout.strip()
    return output
  
  except Exception as e:
    print(f"[!] {e}")
    sys.exit(0)

    
def server_message(message, data):
  if message["type"] == "send":
    payload = message["payload"]

    if isinstance(payload, dict):
      if payload.get("type") == "timestamp":
        server_data["sid"] = payload.get("data")
        print("[+] Received timestamp: " + payload.get('data'))
      
      elif payload.get("type") == "token":
        server_data["token"] = payload.get("data")
        print("[+] Received token: " + payload.get('data')[0:50] + "...")
      
      elif payload.get("type") == "hook_executed":
        print("[+] Hook was executed, data was injected")
        server_data["hook_ready"].set()

      elif payload.get("type") == "error_code":
        print("[+] Error sent by the server" + str(payload.get('data')))
        server_data["message"] = b'ERROR\n' + int(payload.get('data')).to_bytes(2, "big", signed=True) + b'\n\n'
        server_data["response_ready"].set()

      if server_data["sid"] != None and server_data["token"] != "":
        print("[+] Both sid and token received, preparing response")
        server_data["message"] = b'SUCCESS\n' + int(server_data["sid"]).to_bytes(8, "big", signed=True) + b"\n" + server_data["token"].encode("UTF-8") + b"\n\n"
        server_data["sid"] = None
        server_data["token"] = ""
        
        server_data["response_ready"].set()

'''
Find the PlayStore process PID
Attach Frida to PlayStore
Load server.ts script
'''
def vending_script(device):
  pid = find_pid(device, "com.android.vending")

  # Every 2 seconds check if PlayStore is running
  if pid is None:
    print("[-] com.android.vending is not running!")
    print("[+] Waiting for com.android.vending to start...")
    while pid is None:
      time.sleep(2)
      pid = find_pid(device, "com.android.vending")
  
  print("[+] Found com.android.vending with PID: " + str(pid))

  session = device.attach(pid)
  print("[+] Attached to com.android.vending")

  js = open("server.js").read()
  script = session.create_script(js)

  script.on('message', server_message)
  script.on('destroyed', lambda: print("[!] Script destroyed"))
  script.load()

  server_data["script"] = script
  server_data["session"] = session
  print("[+] Loaded server.js script")
  return session

def request_script(device):
  print("[+] Spawning gr.nikolasspyr.integritycheck")
  
  try:
    pid = device.spawn("gr.nikolasspyr.integritycheck")
    session = device.attach(pid)
    print("[+] Attached to gr.nikolasspyr.integritycheck")
  
  except Exception as e:
    print(f"[-] Failed to spawn/attach: {e}")
    pid = device.spawn("gr.nikolasspyr.integritycheck")
    session = device.attach(pid)

  js = open("request.js").read()
  script = session.create_script(js)

  
  script.on('message', lambda: print("[+] request.ts"))
  script.load()
  print("[+] Loaded request.js script")
  
  device.resume(pid)
  print("[+] Resumed process, waiting for app to initialize...")
  
  return session, pid

def launch_frida_scripts(data):  
  print("[+] Posting client data to server.ts")
  print("[+] Client nonce: " + str(bytes_to_list(data.split(b'\n')[0])) + ", cloud project number: " + str(int.from_bytes(data.split(b'\n')[1], "big", signed=True)) + " and package_name: " + (data.split(b'\n')[2]).decode('UTF-8'))
  try:
    server_data["script"].post({
      "type": "client_data",
      "nonce": bytes_to_list(data.split(b'\n')[0]),
      "cloud_project_number" : int.from_bytes(data.split(b'\n')[1], "big", signed=True),
      "package_name": (data.split(b'\n')[2]).decode('UTF-8')
    })
  except Exception as e:
    print(f"[-] Failed to post data: {e}")

  time.sleep(0.3)
  
  print("[+] Call request script to create IPC request")
  try:
    session_request, request_pid = request_script(server_data["device"])
  except Exception as e:
    print(f"[-] Failed to start request script: {e}")
    return
  
  print("[+] Waiting for IPC call to happen...")
  time.sleep(2)
  
  # Check if the modified request is sent
  if not server_data["hook_ready"].wait(15):
    print("[-] Warning: Hook might not have executed")
  else:
    print("[+] Hook executed successfully!")
  

  time.sleep(0.5)
  try:
    server_data["device"].kill(request_pid)
    session_request.detach()
  except Exception as e:
    print(f"[-] Cleanup error (non-fatal): {e}")
  
  print("[+] Killed gr.nikolasspyr.integritycheck")

if __name__ == '__main__':
  if (len(sys.argv) < 2):
    sys.exit(1)

  server_device = find_device(sys.argv[1])
  server_data["device"] = server_device
  session_vending = vending_script(server_device)

  print("[+] Server ready and listening...")
  print("[+] Monitoring com.android.vending for crashes/restarts...")
  
  try:
    server_listening()

  except KeyboardInterrupt:
    print("\n[+] Shutting down...")

  finally:
    if server_data["session"]:
      try:
        server_data["session"].detach()
        
      except:
        pass
    print("[+] Detached!")
