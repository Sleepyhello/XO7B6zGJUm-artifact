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
    echo -e "Please precise the device serial number"
    exit 0
  fi

  "$ADB" -s "$1" forward tcp:12345 tcp:12345
}

get_gms_apks () {
  if [ ! -d apks ]
  then
    mkdir apks
  fi

  "$ADB" -s "$1" pull $("$ADB" -s "$1" shell pm path com.android.vending | head -n 1 | cut -d ":" -f2) apks/client.apk
}

update_frida_scripts() {
  APKTOOL=./tools/apktool
  "$APKTOOL" d -f -q -r -o apks/client apks/client.apk

  CLIENT_INTEGRITY_RECEIVER_CLASS=$(grep -nl "com.google.android.play.core.integrity.protocol.IRequestDialogCallback" $(grep -nrl "com.google.android.play.core.integrity.protocol.IIntegrityService" apks/client/ | grep -ie "smali_classes./....\.smali")| cut -d "/" -f4 | cut -d "." -f1)
  CLIENT_CALLBACK_CLASS=$(grep -nl "transactOneway" $(grep -nrl "com.google.android.play.core.integrity.protocol.IIntegrityServiceCallback" apks/client/)| cut -d "/" -f4 | cut -d "." -f1)

  sed -i -e "s/integrityRequestReceiver_string=\"....\"/integrityRequestReceiver_string=\"$CLIENT_INTEGRITY_RECEIVER_CLASS\"/g" client.ts
  sed -i -e "s/integrityResponse_string=\"....\"/integrityResponse_string=\"$CLIENT_CALLBACK_CLASS\"/g" client.ts
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
get_gms_apks "$@"
update_frida_scripts

compile_with_retry client.ts client.js

echo -e "Client's script compiled"
python3 client.py "$1" 12345