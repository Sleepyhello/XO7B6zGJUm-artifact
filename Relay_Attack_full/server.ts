import Java from 'frida-java-bridge'

let integrityRequestReceiver_string="bgyb"
let integrityResponse_string="bgyd"

let packageNameVerifier_string="byyr"
let packageNameMethod_string="r"

let receivedData: any = null


Java.perform(function () {
    
  const integrityRequestReceiverClass = Java.use(integrityRequestReceiver_string)
  const originalDispatchTransaction = integrityRequestReceiverClass["dispatchTransaction"].overload('int', 'android.os.Parcel', 'android.os.Parcel', 'int')
  integrityRequestReceiverClass["dispatchTransaction"].implementation = function (i: number, parcel: any, parcel2: any, i2: number) {
    console.log("[+] server.ts: dispatchTransaction called!")
    
    parcel = Java.cast(parcel, Java.use("android.os.Parcel"))
    
    let val1 = parcel.readInt()

    const BundleClass = Java.use("android.os.Bundle")
    let bundle = Java.cast(BundleClass.CREATOR.value.createFromParcel(parcel), BundleClass)
    
    console.log("[+] server.ts: original nonce: " + bundle.getByteArray("nonce"))
    console.log("[+] server.ts: original package.name: " + bundle.getString("package.name"))    
    bundle.clear()    
    console.log("[+] server.ts: waiting for client_data from Python...")

    const message = recv('client_data', function(value: any) {
      receivedData = value;
      console.log("[+] server.ts: received client_data")
    });
    message.wait();

    if (receivedData) {
      console.log("[+] server.ts: injecting new nonce, cloud number, and package.name")
      console.log(`[+] server.ts: ${receivedData.nonce}, ${receivedData.cloud_project_number}, ${receivedData.package_name}`)
      bundle.putByteArray("nonce", Java.array("byte", receivedData.nonce))
      bundle.putString("package.name", receivedData.package_name)

      if (receivedData.cloud_project_number != 0)
        bundle.putLong("cloud.prj", receivedData.cloud_project_number)
      
      send({
        type: "hook_executed",
        data: true
      })
    } else {
      console.log("[-] server.ts: No receivedData!")
    }

    let val3 = parcel.readStrongBinder()

    const ParcelClass = Java.use("android.os.Parcel")
    let newParcel = ParcelClass.obtain()
    
    newParcel.writeInt(val1)
    newParcel.writeBundle(bundle)
    newParcel.writeStrongBinder(val3)
    
    newParcel.setDataPosition(0)
    console.log("[+] server.ts: calling original dispatchTransaction with modified data")
    
    try {
      let result = originalDispatchTransaction.call(this, i, newParcel, parcel2, i2)
      newParcel.recycle()
      return result
    } catch (e: any) {
      console.log("[-] ERROR calling dispatchTransaction:")
      console.log("[-] " + e)
      console.log("[-] Stack: " + e.stack)
      newParcel.recycle()
      throw e
    }
  }

  const packageNameVerifierClass = Java.use(packageNameVerifier_string)
  packageNameVerifierClass[packageNameMethod_string].implementation = function (str: any, i: any) {
    console.log("[+] server.ts: package name verifier bypassed")
    return true;
  };


  const integrityResponseClass = Java.use(integrityResponse_string)
  const originalResponseA = integrityResponseClass["a"].overload('android.os.Bundle')    
  integrityResponseClass["a"].implementation = function (bundle: any) {
    console.log("[+] server.ts: integrityResponse.a called")
    
    const BundleClass = Java.use("android.os.Bundle")
    bundle = Java.cast(bundle, BundleClass)

    if (bundle.getInt("error") != 0) {
      console.log(`[+] server.ts: error from server: ${bundle.getInt("error")}`)
      send({
        type: "error_code",
        data: bundle.getInt("error")
      })

    } else {
      let sid = bundle.getLong("request.token.sid")
        console.log("[+] server.ts: extracted sid: " + sid)
        send({
          type: "timestamp",
          data: sid
        })

        let token = bundle.getString("token")
        console.log("[+] server.ts: extracted token: " + token.substring(0, 50) + "...")
      
        send({
          type: "token",
          data: token
        })
    }
    
    originalResponseA.call(this, bundle);
  };

  console.log("[+] All hooks installed successfully")

})