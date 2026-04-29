import fs from 'fs'

Java.perform(() => {
    let read = fs.readFile("attest_challenge")

    let attestation_challenge = Java.array("byte", [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20])
    

    console.log(read)


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
    
    const certs = ks.getCertificateChain("integrity.api.key.alias")
    for (let cert of certs) {
        console.log(cert.getEncoded())
    }
})