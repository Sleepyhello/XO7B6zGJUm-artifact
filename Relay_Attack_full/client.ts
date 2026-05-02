import Java from 'frida-java-bridge'

let integrityRequestReceiver_string="bgyb"
let integrityResponse_string="bgyd"

let receivedData: any = null;
let requestInProgress = false;
let dataPosted = false;

Java.perform(function () {
  const integrityRequestReceiverClass = Java.use(integrityRequestReceiver_string)
  integrityRequestReceiverClass["dispatchTransaction"].implementation = function (i: number, parcel: any, parcel2: any, i2: number) {
    console.log("[+] client.ts: dispatchTransaction called")
    
    parcel = Java.cast(parcel, Java.use("android.os.Parcel"))    
    const startPos = parcel.dataPosition()
    parcel.readInt()

    const BundleClass = Java.use("android.os.Bundle")
    let bundle = Java.cast(BundleClass.CREATOR.value.createFromParcel(parcel), BundleClass)
    parcel.setDataPosition(startPos)

    const nonce = bundle.getByteArray("nonce")
    const packageName = bundle.getString("package.name")

    console.log("[+] Sending nonce, cloud_project_number and package_name to Python")
    
    send({
      type: "nonce",
      data: nonce
    })

    if (bundle.containsKey("cloud.prj")) {
      const cloudProjectNumber = bundle.getLong("cloud.prj")
      send({
        type: "cloud_project_number",
        data: cloudProjectNumber
      })
    } else {
      send({
        type: "cloud_project_number",
        data: 0
      })
    }

    send({
      type: "package_name",
      data: packageName
    })

    requestInProgress = true
    dataPosted = false

    let result = this["dispatchTransaction"](i, parcel, parcel2, i2);
    return result;
  };


  const integrityResponseClass = Java.use(integrityResponse_string)
  integrityResponseClass["a"].implementation = function (bundle: any) {
    console.log("[+] client.ts: integrityResponseClass.a called - this is where we inject data!")
    
    if (!requestInProgress) {
      console.log("[+] client.ts: No request in progress, calling original method")
      return this["a"](bundle);
    }

    const BundleClass = Java.use("android.os.Bundle")
    bundle = Java.cast(bundle, BundleClass)

    let originalSid = bundle.getLong("request.token.sid")
    let originalToken = bundle.getString("token")
    console.log("[+] client.ts: original sid: " + originalSid)
    console.log("[+] clients.ts: original token: " + (originalToken ? originalToken.substring(0, 50) + "..." : "null"))

    if (!dataPosted) {
      console.log("[+] client.ts: waiting for server_data from Python...")
      
      const message = recv('server_data', function(value: any) {
        receivedData = value;
        console.log("[+] client.ts: received server_data from Python")
      });
      
      message.wait();        
      dataPosted = true;
    }

    if (receivedData) {
      console.log("[+] client.ts: Replacing bundle data with server response")
      console.log(`    New sessionId: ${receivedData.sessionId}`)
      console.log(`    New Token: ${receivedData.token.substring(0, 50)}...`)

      bundle.clear()
      bundle.putLong("request.token.sid", receivedData.sessionId)
      bundle.putString("token", receivedData.token)
      
      requestInProgress = false
      receivedData = null
      
      console.log("[+] client.ts calling original method with replaced data")
    } else {
      console.log("[-] clients.ts no data received, using original data")
    }
    
    return this["a"](bundle)
  };

  console.log("[+] client.ts: all client hooks installed successfully")
})