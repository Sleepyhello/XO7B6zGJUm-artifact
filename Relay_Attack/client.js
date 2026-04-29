import fs from 'fs'

Java.perform(() => {
    const Builder = Java.use("android.security.keystore.KeyGenParameterSpec$Builder")

    Builder["setAttestationChallenge"].implementation = function(barr) {
        fs.writeFile("attest_challenge", barr)

        console.log(`setAttestationChallenge: ${barr}`)
        return this["setAttestationChallenge"](barr)
    }
})