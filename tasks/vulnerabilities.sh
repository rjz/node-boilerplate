#!/bin/sh

# Check for vulnerabilities in package dependencies

# http://blog.nodesecurity.io/2014/02/01/new-feature-validate-modules-with-npm-shrinkwrap

if [ ! -f 'npm-shrinkwrap.json' ]; then

  echo 'Audit [FAIL]: Create npm-shrinkwrap.json by running:

    $ npm shrinkwrap
  '
  exit 1;
fi

VULNERABILITIES=$(curl -s -XPOST \
  -d@npm-shrinkwrap.json \
  -HContent-type:application/json \
  https://nodesecurity.io/validate/shrinkwrap)

size=${#VULNERABILITIES}

if [ "$size" -eq "2" ]; then
  echo 'Audit [PASS]: no vulnerabilities found in listed dependencies!'
  exit 0;
else
  echo 'Audit [FAIL]: vulnerabilities discovered in shrinkwrapped dependencies!'
  echo "$VULNERABILITIES"
  exit 1;
fi

