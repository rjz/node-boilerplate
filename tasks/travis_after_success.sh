#!/bin/bash

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

[ "$GIT_BRANCH" == 'master' ] || exit 0;

npm run pages
cat "$DIR/../coverage/lcov.info" | "$DIR/../node_modules/.bin/coveralls"

