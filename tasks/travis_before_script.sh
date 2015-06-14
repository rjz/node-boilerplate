
#!/bin/bash

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

export PATH=$PATH:$PWD/node_modules/.bin

npm shrinkwrap && ./tasks/audit.sh

