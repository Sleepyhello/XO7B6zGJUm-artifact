import frida

import sys
import threading

stop_event = threading.Event()

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
        
    print("Could not find device's serial\n" \
    "Check if it is the correct one with adb devices command")
    sys.exit(0)

def find_pid(device, package_name):
    for a in device.enumerate_applications():
        if a.identifier == package_name:
            return a.pid
    
    print(f"[-] client.py: PID for {package_name} not found")
    return -1


def client_message(message, data, script):
    if message["type"] == "send":
        payload = message["payload"]
        if payload.get("type") == "nonce":
            nonce = payload.get('data')
            print(f"[+] Received nonce: {nonce}")
            
            # Handle input in a separate thread so Frida's message loop isn't blocked
            def get_input():
                res = input("Copy paste the encrypted verdict and press enter: ")
                print("Encrypted verdict is: " + res)
                # Send the response back to the JS script
                script.post({"type": "verdict", "data": res})
            
            threading.Thread(target=get_input).start()

    if message["type"] == "error":
        print(f"[!] JS error: {message['description']}")
        print(f"[!] Stack: {message.get('stack', 'no stack')}")
        return

        

def client_script(device):
    pid = find_pid(device, "com.android.vending")
    if (pid == -1):
        print(f"[!] client.py: Please relaunch PlayStore")
        input("Press Enter after relaunching the app")
        client_script(device)

    try:
        session = device.attach(pid)
        print(f"[+] client.py: Attached to com.android.vending {pid}")

        js = open("client.js").read()
        script = session.create_script(js)

        script.on('message', lambda msg, data: client_message(msg, data, script))

        script.load()

        print("[+] Loaded client.js script")
        print("[+] Listening...")
        stop_event.wait()
        session.detach()
        print("[+] Detached")

    except Exception as e:
        print(f"[!] client.py: Fail {e}")
        sys.exit(0)

    


if __name__ == '__main__':
    port = int(sys.argv[2])

    client_device = find_device(sys.argv[1], port)
    client_script(client_device)