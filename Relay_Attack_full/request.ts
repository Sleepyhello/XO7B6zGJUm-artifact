import Java from 'frida-java-bridge'

Java.perform(() => {
  var foundInstance = false
  const Handler = Java.use("android.os.Handler")
  const Looper = Java.use("android.os.Looper")

  setTimeout(() => {
    Java.choose("gr.nikolasspyr.integritycheck.MainActivity", {
      onMatch: function(instance) {
        console.log("[+] request.ts: Found MainActivity")
        foundInstance = true
        try {
          //Get main thread looper
          const mainLooper = Looper.getMainLooper()

          //Init the handler to send runnables to main thread
          const handler = Handler.$new(mainLooper)

          //Create our custom runnable to click the button in the main thread
          const AnonymousRunnable = Java.registerClass({
            name: "com.frida.CustomRunnable",
            implements: [Java.use("java.lang.Runnable")],
            methods: {
              run: function() {
                try {
                  instance.C.value.performClick()
                  console.log("[+] request.ts: performClick() success")
                } catch(e) {
                  console.log("[-] request.ts: Click error: " + e)
                }
              }
            }
          })

          //Send the runnable to the main thread
          handler.post(AnonymousRunnable.$new())

          } catch(e) {
                console.log("[-] request.ts: Error: " + e)
          }
      },
      onComplete() {
        if (foundInstance) {
          console.log("[+] request.ts: Java.choose completed, targetFunction was called")
        } else {
          console.log("[-] request.ts: Java.choose completed but NO MainActivity instance found!")
          console.log("[-] request.ts: The app might not have initialized yet, or MainActivity is not created")
        }
      }
    })
  }, 500)
})