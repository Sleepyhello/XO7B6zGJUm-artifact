import frida
import sys
import socket
import subprocess
import time

SOCKET_HOST = '127.0.0.1'
SOCKET_PORT = 55000       # client.py -> server.py  (challenge)
CLIENT_HOST = '127.0.0.1'
CLIENT_PORT = 55001       # server.py -> client.py  (certificates)

ATTESTATION_TS = "attestation.ts"
ATTESTATION_JS = "attestation.js"

ATTESTATION_TEMPLATE = """\
import Java from 'frida-java-bridge'

let attestation_challenge = Java.array('byte', [{challenge}])

if (Java.available) {{
    Java.perform(() => {{

        const Builder = Java.use("android.security.keystore.KeyGenParameterSpec$Builder")
        const ECGenParameterSpec = Java.use("java.security.spec.ECGenParameterSpec")
        const KeyPairGenerator = Java.use("java.security.KeyPairGenerator")
        const KeyStore = Java.use("java.security.KeyStore")

        let ks = KeyStore.getInstance("AndroidKeyStore")
        ks.load(null)

        let kpg = KeyPairGenerator.getInstance("EC", "AndroidKeyStore")
        kpg.initialize(Builder.$new("integrity.api.key.alias", 0x4)
                        .setAlgorithmParameterSpec(ECGenParameterSpec.$new("secp256r1"))
                        .setDigests(["SHA-512"])
                        .setAttestationChallenge(attestation_challenge)
                        .setDevicePropertiesAttestationIncluded(true)
                        .build()
                    )

        kpg.generateKeyPair()

        let count = 0
        const certs = ks.getCertificateChain("integrity.api.key.alias")
        for (let cert of certs) {{
            send({{type: 'certificate', data: `${{count++}}: ${{cert.getEncoded()}}`}})
        }}
    }})
}} else {{
    console.log(`[+] attestation.ts: Java not available`)
}}
"""

# Find the device with frida API
def find_device(device_name, custom_port=None):
    if custom_port:
        print(f"[+] server.py: Adding remote device on port {custom_port}...")
        device_manager = frida.get_device_manager()
        try:
            device = device_manager.add_remote_device(f'127.0.0.1:{custom_port}')
            print(f"[+] server.py: Connected to remote device on port {custom_port}")
            return device
        except Exception as e:
            print(f"[!] server.py: Failed to connect to custom port {custom_port}: {e}")
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
    print(f"[-] server.py: PID for {package_name} not found")
    return -1

# Send all collected certificates to client.py, one per line, then close
def send_certs_to_client(certs: list):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.connect((CLIENT_HOST, CLIENT_PORT))
            for cert in certs:
                s.sendall((cert + '\n').encode())
        print(f"[+] server.py: Sent {len(certs)} certificate(s) to client.py")
    except ConnectionRefusedError:
        print(f"[!] server.py: client.py not listening on {CLIENT_HOST}:{CLIENT_PORT}")
    except Exception as e:
        print(f"[!] server.py: Failed to send certs: {e}")

# Returns a message handler that appends certs into cert_store
def make_frida_handler(cert_store: list):
    def frida_message(message, data):
        if message["type"] == "send":
            payload = message["payload"]
            if payload.get("type") == "certificate":
                raw = payload.get('data')
                print(f"[+] server.py: Certificate received: {raw}")
                cert_store.append(raw)
        if message["type"] == "error":
            print(f"[!] JS error: {message['description']}")
            print(f"[!] Stack: {message.get('stack', 'no stack')}")
    return frida_message

# Compile the attestation script
def compile_attestation():
    for attempt in range(1, 6):
        result = subprocess.run(
            ["frida-compile", ATTESTATION_TS, "-o", ATTESTATION_JS, "-S", "-c"],
            capture_output=True
        )
        if result.returncode == 0:
            print(f"[+] server.py: Compiled {ATTESTATION_TS}")
            return True
        print(f"[!] server.py: Compilation failed (attempt {attempt}/5), retrying...")
        time.sleep(1)
    print(f"[!] server.py: Could not compile {ATTESTATION_TS} after 5 attempts")
    return False

# Frida init
# After receiving the challenge from the client we generate a Keystore certchain for the client with the corresponding challenge
def run_attestation(device, challenge):
    with open(ATTESTATION_TS, "w") as f:
        f.write(ATTESTATION_TEMPLATE.format(challenge=challenge))
    print(f"[+] server.py: Written {ATTESTATION_TS} with challenge '{challenge}'")

    if not compile_attestation():
        return

    pid = find_pid(device, "com.android.vending")
    if pid == -1:
        print(f"[!] server.py: PlayStore not running, skipping attestation")
        return

    try:
        session = device.attach(pid)
        print(f"[+] server.py: Attached to com.android.vending ({pid})")

        cert_store = []
        script = session.create_script(open(ATTESTATION_JS).read())
        script.on('message', make_frida_handler(cert_store))
        script.load()

        # Wait for all 5 certs to arrive (or timeout after 10s)
        deadline = time.time() + 10
        while len(cert_store) < 5 and time.time() < deadline:
            time.sleep(0.1)

        session.detach()
        print(f"[+] server.py: Detached — got {len(cert_store)} certificate(s)")

        if cert_store:
            send_certs_to_client(cert_store)
        else:
            print(f"[!] server.py: No certificates received, nothing to send")

    except Exception as e:
        print(f"[!] server.py: Frida error: {e}")

# Main loop: wait for challenges, run attestation, send certs back
def socket_loop(device):
    srv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    srv.bind((SOCKET_HOST, SOCKET_PORT))
    srv.listen(1)
    print(f"[+] server.py: Listening for challenges on {SOCKET_HOST}:{SOCKET_PORT}")

    while True:
        conn, addr = srv.accept()
        with conn:
            data = b''
            while chunk := conn.recv(1024):
                data += chunk
        challenge = data.decode().strip()
        if challenge:
            print(f"[+] server.py: Received challenge '{challenge}'")
            run_attestation(device, challenge)


if __name__ == '__main__':
    port = int(sys.argv[2])
    device = find_device(sys.argv[1], port)
    socket_loop(device)