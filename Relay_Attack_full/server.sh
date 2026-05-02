#!/usr/bin/bash

ADB=$(which adb)

check_environment_is_set () {
  if [ -z "$ADB" ]
  then
    echo -e "Please fill in the ADB variable the path to ADB"
    exit 0
  fi

  if [ "$#" -lt 1 ]
  then 
    echo -e "Please precise the server phone\n"
    $ADB devices
    exit 0
  fi
}

get_vending_apk () {
  if [ ! -d apks ]
  then
    mkdir apks
  fi

  "$ADB" -s "$1" pull $("$ADB" -s "$1" shell pm path com.android.vending| head -n 1 | cut -d ":" -f2) apks/server.apk
}

update_frida_scripts() {
  APKTOOL=./tools/apktool
  "$APKTOOL" d -f -r -q -o apks/server apks/server.apk
  
  echo "Updating frida scripts" 
  
  SERVER_INTEGRITY_RECEIVER_CLASS=$(grep -nl "com.google.android.play.core.integrity.protocol.IRequestDialogCallback" $(grep -nrl "com.google.android.play.core.integrity.protocol.IIntegrityService" apks/server/ | grep -ie "smali_classes./...*\.smali")| cut -d "/" -f4 | cut -d "." -f1)
  
  SERVER_PACKAGE_NAME_VERIFIER_CLASS=$(grep -nrl "No package names exist for the calling uid" apks/server)
  SERVER_PACKAGE_NAME_VERIFIER=$(echo "$SERVER_PACKAGE_NAME_VERIFIER_CLASS" | cut -d "/" -f4 | cut -d "." -f1)
  SERVER_PACKAGE_NAME_VERIFIER_METHOD=$(grep "method public final" "$SERVER_PACKAGE_NAME_VERIFIER_CLASS" | grep -E ";I)Z" | cut -d " " -f4 | cut -d "(" -f1)

  SERVER_CALLBACK_CLASS=$(grep -nl "transactOneway" $(grep -nrl "com.google.android.play.core.integrity.protocol.IIntegrityServiceCallback" apks/server/)| cut -d "/" -f4 | cut -d "." -f1)

  sed -i -e "s/integrityRequestReceiver_string=\"....\"/integrityRequestReceiver_string=\"$SERVER_INTEGRITY_RECEIVER_CLASS\"/g" server.ts
  sed -i -e "s/integrityResponse_string=\"....\"/integrityResponse_string=\"$SERVER_CALLBACK_CLASS\"/g" server.ts

  sed -i -e "s/packageNameVerifier_string=\"....\"/packageNameVerifier_string=\"$SERVER_PACKAGE_NAME_VERIFIER\"/g" server.ts
  sed -i -e "s/packageNameMethod_string=\".\"/packageNameMethod_string=\"$SERVER_PACKAGE_NAME_VERIFIER_METHOD\"/g" server.ts
}

compile_with_retry() {
  local input="$1"
  local output="$2"
  local attempts=0
  local max_attempts=5

  echo "Compiling "$output""
  while [ $attempts -lt $max_attempts ]; do
    frida-compile "$input" -o "$output" -S -c 2>/dev/null && return 0
    attempts=$((attempts + 1))
    echo "Compilation failed (attempt $attempts/$max_attempts), retrying..."
    sleep 1
  done

  echo "ERROR: Compilation failed after $max_attempts attempts"
  return 1
}

check_environment_is_set "$@"
get_vending_apk "$@"
update_frida_scripts


compile_with_retry server.ts server.js
compile_with_retry request.ts request.js

echo -e "Server's scripts compiled"

python3 server.py "$1"