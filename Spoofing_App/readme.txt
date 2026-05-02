+--------------------+
    Spoofing Attack
+--------------------+

* Overview
-----------

This project demonstrates a spoofing attack targeting an integrity attestation workflow across two devices.

The attack scenario follows a structured sequence:

1. Application Preparation  
   On a non-rooted device, an application is created with the same application ID (appID) as the target application installed on the rooted device.

2. Nonce Extraction  
   On the rooted device, the nonce generated and sent by the target application is intercepted.

3. Nonce Relay  
   The extracted nonce is transferred to the spoofing application, which uses it to generate a valid integrity attestation.

4. Integrity Verdict Relay  
   The encrypted integrity verdict produced on the non-rooted device is extracted and relayed back to the rooted device.

5. Integrity Verdict Bypass  
   The rooted device forwards the encrypted verdict to the target application, which successfully decrypts it and accepts it as a valid integrity verification result. The device integrity verdict will thus be valid.

* Project Architecture
----------------------

The project is organized into multiple components that coordinate to perform the described workflows:

-  SPIC Directory  
   The `SPIC` directory contains the spoofing application. In its current state, it impersonates the Simple Play Integrity Checker application. Since the decryption key used by this application is publicly available, the project also includes an implementation of the decryption process specifically for this target application.

-  Tools Directory  
   This directory includes auxiliary tools required by the project, notably `apktool`, which is used for APK decompilation and analysis.

-  Frida Script 
   The Frida instrumentation logic is implemented in `client.ts`. This script is responsible for hooking into target processes and extracting or injecting attestation-related data at runtime.  
   The project relies on `frida-server` version 17.9.3 to enable dynamic instrumentation on the device.

-  Python Component
   The `client.py` script automates interactions with the Frida environment and manages communication between user inputs and the instrumentation layer.

-  Shell Script  
   The `client.sh` script serves as the main entry point for execution. It performs several tasks, including:  
   - Decompiling the Google Play Store application to retrieve the target classes  
   - Compiling the Frida script with the appropriate class references  
   - Executing the Python script with the correct parameters  
* Requirements
--------------

1. Environment Setup  
   - A rooted device acting as the client  
   - A non-rooted device used for attestation generation  

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
   - Open the `SPIC` application in Android Studio  
   - Modify the application ID to match the target application  

3. Client Attestation  
   - Launch the client script:  
     `./client.sh [client_device_id]`  

4. Verdict Generation  
   - Copy the nonce from the client output  
   - Paste it into the nonce field within the spoofing application  
   - Deploy the application to the non-rooted device  
   - Generate the encrypted verdict by clicking on the bottom right button  

5. Verdict Relay  
   - Retrieve the encrypted verdict from the server logs (via Logcat in Android Studio)  
   - Copy and paste the encrypted verdict into the client console  

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