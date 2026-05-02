+----------------------+
   Full Relay Attack
+----------------------+

* Overview
-----------

This project demonstrates a Full Relay Attack targeting an attestation workflow between a client device and an attestation server.

The attack scenario follows a structured sequence:

1. Client Integrity Request Parameters  
   The client initiates an integrity request and sends its nonce along with the target application ID (appID) to the attestation server.

2. Server Integrity Request  
   pon receiving the nonce and appID, the attestation server generates a corresponding attestation request using the Play Integrity API Checker application. During this process, the server modifies request parameters to align with those received from the client and bypasses validation checks that ensure the calling application matches the target appID.

3. Verdict Relay  
   After receiving the integrity verdict, the attestation server forwards the encrypted verdict back to the client.

4. Integrity Verdict Relay
   The client integrates the received verdict and relays it to the target application. The target application decrypts the verdict and accepts it as valid, including checks for application integrity, device integrity, and licensing.

Note:
    In this attack scenario, the attestation server must have the target application installed. This requirement can potentially be bypassed by providing the application metadata and a valid client authentication token from the client device.

* Project Architecture
----------------------

The project is organized into multiple components that coordinate to perform the described workflows:

-  Tools Directory  
   This directory includes auxiliary tools required by the project, notably `apktool`, which is used for APK decompilation and analysis.

-  Frida Scripts
   The Frida instrumentation logic is implemented in client.ts, `request.ts`, and `server.ts`. These scripts hook into relevant processes to extract and inject attestation-related data at runtime.
    The project uses `frida-server` version 17.9.3 for dynamic instrumentation.

-  Python Components 
   The `client.py` and `server.py` scripts automate interactions with Frida and manage communication between the client and server over a network.

-  Shell Scripts  
   The `client.sh` and `server.sh` scripts act as execution entry points. They handle APK decompilation to identify target classes, compile the Frida scripts, and invoke the Python scripts with appropriate parameters.

* Requirements
--------------

1. Environment Setup  
   - A bootloader-rooted device for the client  
   - A CVE-rooted device for the attestation server  
   - The target application installed on the attestation server
   - Play Integrity API Checker installed on the attestation server

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
     `./frida-server`  

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

* Disclaimer
------------

This project is intended strictly for educational and research purposes.  
Unauthorized use of these techniques against systems without explicit permission may violate applicable laws and regulations.