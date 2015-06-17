#!/bin/bash

set -e

# Add node_modules binaries to the path
export PATH=$PATH:$PWD/node_modules/.bin

# Audit project dependencies
npm shrinkwrap && ./tasks/audit.sh

