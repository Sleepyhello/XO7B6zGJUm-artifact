import Java from 'frida-java-bridge'

let attestation_challenge = Java.array('byte', [52,78,7,115,65,18,119,-1,75,9,-29,-38,-40,-106,-58,94,88,53,-14,54,73,-4,-93,99,121,-32,53,-7,70,88,-42,-123])

if (Java.available) {
    Java.perform(() => {

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
        for (let cert of certs) {
            send({type: 'certificate', data: `${count++}: ${cert.getEncoded()}`})
        }
    })
} else {
    console.log(`[+] attestation.ts: Java not available`)
}
