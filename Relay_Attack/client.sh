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
compile_with_retry client.ts client.js

echo -e "Client's script compiled"
python3 client.py "$1" 12345