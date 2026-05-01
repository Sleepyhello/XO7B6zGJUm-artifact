import Java from 'frida-java-bridge'

let integrityRequestReceiver_string="bjlv"
let integrityResponse_string="bjlx"

if (Java.available) {
    Java.performNow(() => {
        
        const integrityRequestReceiverClass = Java.use(integrityRequestReceiver_string)
        const originalDispatch = integrityRequestReceiverClass["dispatchTransaction"]
        integrityRequestReceiverClass["dispatchTransaction"].implementation = function (i: number, parcel: any, parcel2: any, i2: number) {
            console.log("[+] client.ts: dispatchTransaction called")
            
            parcel = Java.cast(parcel, Java.use("android.os.Parcel"))
            const startPos = parcel.dataPosition()
            parcel.readInt()

            const BundleClass = Java.use("android.os.Bundle")
            let bundle = Java.cast(BundleClass.CREATOR.value.createFromParcel(parcel), BundleClass)
            const nonce = bundle.getByteArray("nonce")

            send({ type: "nonce", data: nonce })

            parcel.setDataPosition(startPos)
            return originalDispatch.call(this, i, parcel, parcel2, i2)
        }

        const integrityResponseClass = Java.use(integrityResponse_string)
        const originalA = integrityResponseClass["a"]
        integrityResponseClass["a"].implementation = function (bundle: any) {
            let verdictValue: string = ""
            const response = recv("verdict", (value: any) => {
                console.log("[+] Received verdict:", value.data)
                verdictValue = value.data
            })
            response.wait()

            const BundleClass = Java.use("android.os.Bundle")
            bundle = Java.cast(bundle, BundleClass)
            bundle.clear()
            bundle.putLong("request.token.sid", 4610528735137851)
            bundle.putString("token", verdictValue)



            originalA.call(this, bundle)
        }
    })
} else {
    console.log("Java not available")
}