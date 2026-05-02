import frida
import sys
import socket
import threading

SERVER_HOST = '127.0.0.1'
SERVER_PORT = 55000       # client.py -> server.py  (challenge)
CERT_HOST   = '127.0.0.1'
CERT_PORT   = 55001       # server.py -> client.py  (certificates)

# Queue shared between the cert listener thread and the Frida message handler
# Each entry is one raw certificate string sent by server.py
import queue
cert_queue = queue.Queue()

# Find the device with frida API
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
            print(f"[!] client.py: Make sure frida-server is running with: adb shell '/data/local/tmp/frida-server -l 0.0.0.0:{custom_port}'")
            sys.exit(1)

    devices = frida.enumerate_devices()
    for device in devices:
        if device.id == device_name:
            return device

    print("Could not find device's serial\nCheck if it is the correct one with adb devices command")
    sys.exit(0)

# Find the PID for a specific app
def find_pid(device, package_name):
    for a in device.enumerate_applications():
        if a.identifier == package_name:
            return a.pid
    print(f"[-] client.py: PID for {package_name} not found")
    return -1

# Sends the attestation challenge received through client.ts
def send_challenge_to_server(challenge: str):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.connect((SERVER_HOST, SERVER_PORT))
            s.sendall(challenge.encode())
        print(f"[+] client.py: Challenge sent to server.py")
    except ConnectionRefusedError:
        print(f"[!] client.py: Could not connect to server.py on {SERVER_HOST}:{SERVER_PORT} — is it running?")
    except Exception as e:
        print(f"[!] client.py: Failed to send challenge: {e}")

# Listens for certificates sent back by server.py
# Each line is one certificate; enqueues them and posts to the Frida script
def cert_listener(script):
    srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    srv.bind((CERT_HOST, CERT_PORT))
    srv.listen(1)
    print(f"[+] client.py: Listening for certificates on {CERT_HOST}:{CERT_PORT}")

    while True:
        conn, addr = srv.accept()
        with conn:
            buf = ''
            while chunk := conn.recv(4096).decode():
                buf += chunk
        certs = [line for line in buf.splitlines() if line.strip()]
        print(f"[+] client.py: Received {len(certs)} certificate(s) from server.py")
        for i, cert in enumerate(certs):
            cert_queue.put(cert)
        # Notify the Frida script that certs are ready
        script.post({"type": "certs_ready", "count": len(certs)})

# Message received and sent to frida script
def client_message(message, data, script, listener_started):
    if message["type"] == "send":
        payload = message["payload"]

        if payload.get("type") == "challenge":
            challenge = payload.get('data')
            print(f"[+] client.py: Intercepted challenge: '{challenge}'")

            # Start the cert listener before sending the challenge so we don't miss the response
            if not listener_started[0]:
                listener_started[0] = True
                t = threading.Thread(target=cert_listener, args=(script,), daemon=True)
                t.start()

            send_challenge_to_server(','.join(map(str, challenge)))

        elif payload.get("type") == "get_cert":
            # Frida script is blocked in getEncoded() and wants the next cert
            index = payload.get("index")
            try:
                cert = cert_queue.get(timeout=15)
                print(f"[+] client.py: Delivering cert {index} to Frida script")
                script.post({"type": "cert_data", "index": index, "data": cert})
            except queue.Empty:
                print(f"[!] client.py: Timeout waiting for cert {index}")
                script.post({"type": "cert_data", "index": index, "data": ""})

    if message["type"] == "error":
        print(f"[!] JS error: {message['description']}")
        print(f"[!] Stack: {message.get('stack', 'no stack')}")

# Frida script init
def client_script(device):
    pid = find_pid(device, "com.android.vending")
    if pid == -1:
        print(f"[!] client.py: Please relaunch PlayStore")
        input("Press Enter after relaunching the app")
        client_script(device)
        return

    try:
        session = device.attach(pid)
        print(f"[+] client.py: Attached to com.android.vending ({pid})")

        script = session.create_script(open("client.js").read())
        listener_started = [False]
        script.on('message', lambda msg, data: client_message(msg, data, script, listener_started))
        script.load()

        print("[+] client.py: Loaded client.js, listening...")
        sys.stdin.read()
        session.detach()
        print("[+] client.py: Detached")

    except Exception as e:
        print(f"[!] client.py: Fail {e}")
        sys.exit(0)


if __name__ == '__main__':
    port = int(sys.argv[2])
    client_device = find_device(sys.argv[1], port)
    client_script(client_device)