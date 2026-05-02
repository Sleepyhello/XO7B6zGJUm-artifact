+----------------------+
   Partial Relay Attack
+----------------------+

* Overview
-----------

This project demonstrates a Partial Relay Attack targeting an attestation workflow between a client device and an attestation server.

The attack scenario follows a structured sequence:

1. Challenge Submission  
   The client initiates the process by generating and sending an attestation challenge to the attestation server.

2. Attestation Chain Generation  
   Upon receiving the challenge, the attestation server generates a Keystore attestation certificate chain based on the provided challenge. The chain is crafted to appear valid.

3. Certificate Relay  
   The attestation server returns the generated certificate chain to the client.

4. Client Integration  
   The client integrates the received certificate chain into its local environment, presenting it as a legitimate attestation result.

5. Integrity Verdict Bypass  
   By leveraging the relayed certificate chain, the client is able to obtain a valid device integrity verdict.

* Project Architecture
----------------------

The project is organized into multiple components that coordinate to perform the described workflows:

-  Frida Scripts  
   The Frida instrumentation logic is implemented in `client.ts` and `attestation.ts`. These scripts are responsible for hooking into the relevant processes and extracting or injecting attestation-related data at runtime.  
   The project uses `frida-server` version 17.9.3 to enable dynamic instrumentation on the devices.

-  Python Components 
   The `client.py` and `server.py` scripts handle automation of the Frida interactions and manage communication between the client and server components over a network connection.

-  Shell Scripts  
   The `client.sh` and `server.sh` scripts serve as entry points for execution. They are responsible for compiling the Frida scripts and invoking the corresponding Python scripts with the appropriate parameters.

* Requirements
--------------

1. Environment Setup  
   - A bootloader-rooted device for the client  
   - A CVE-rooted device for the attestation server  

2. Required Packages  
   - Install Python dependencies:  
     `pip install -r requirements.txt`  

   - Install Node.js dependencies:  
     `npm install`  

* Attack Description
--------------------

1. Client Prerequisite  
   - Push the `frida-server` binary onto the client device  
   - Run with root privileges:  
     `./frida-server -l 0.0.0.0:12345`  

2. Server Prerequisite  
   - Push the `frida-server` binary onto the server device  
   - Run with root privileges:  
     `./frida-server -l 0.0.0.0:12344`  

3. Server Launch  
   - Open the Google Play Store application on the server device
   - Start the server:  
     `./server.sh [server_device_id]`    

4. Client Attestation  
   - Launch the client script:  
     `./client.sh [client_device_id]`  
   - Start the target application that requires integrity attestation  

* Debugging
-----------

1. Play Store Not Spawning  
   If the following error occurs on the client side:  
   "[!] client.py: Fail unexpectedly timed out while waiting for stop from process with PID"  

   Ensure that the Google Play Store application is running, then retry the attestation request.

2. No Attestation Challenge Detected  
   If no attestation challenge is intercepted:  
   - Clear the target application's cache and storage  
   - Retry the attestation process  

* Disclaimer
------------

This project is intended strictly for educational and research purposes.  
Unauthorized use of these techniques against systems without explicit permission may violate applicable laws and regulations.