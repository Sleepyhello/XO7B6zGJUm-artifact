import Java from 'frida-java-bridge'

if (Java.available) {
    var count_cert = 0

    const cert_store: { [key: number]: any } = {}

    // Called by client.py once all certs are ready (after server.py responds)
    recv('certs_ready', (msg: any) => {
        console.log(`[+] client.ts: ${msg.count} cert(s) queued by client.py`)
    })

    function get_cert(index: number): any {
        // If already delivered, return immediately
        if (cert_store[index] !== undefined)
            return cert_store[index]

        // Ask client.py for this cert and block until it arrives
        let received = false
        recv('cert_data', (msg: any) => {
            cert_store[msg.index] = msg.data
            received = true
        })
        send({ type: 'get_cert', index: index })

        // Spin-wait — Frida's recv() is synchronous within Java.perform
        while (!received) { }

        return cert_store[index]
    }

    Java.perform(() => {
        const Builder = Java.use("android.security.keystore.KeyGenParameterSpec$Builder")
        Builder["setAttestationChallenge"].implementation = function(barr: any) {
            send({ type: "challenge", data: barr })
            return this["setAttestationChallenge"](barr)
        }

        let Certificate = Java.use("com.android.org.conscrypt.OpenSSLX509Certificate")
        Certificate["getEncoded"].implementation = function() {
            count_cert++
            console.log(`[+] client.ts: getEncoded() called for cert #${count_cert}`)
            return get_cert(count_cert)
        }
    })
} else {
    console.log(`[+] client.ts: Java not available`)
}