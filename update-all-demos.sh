#!/usr/bin/env bash

THIS_SCRIPT_NAME=$(basename "$0")
echo "### Begin ${THIS_SCRIPT_NAME}"

# Fail if anything in here fails
set -e
# Run from the repo root
pushd "$(dirname -- "${BASH_SOURCE[0]:-$0}")"

###################################################################################################

pnpm install --frozen-lockfile --prefer-offline
pnpm run format

for DEMO_DIR in $(ls | grep "^[0-9]\+-") ; do
  echo "Updating $DEMO_DIR :"
  pushd $DEMO_DIR

  pnpm install --frozen-lockfile --prefer-offline
  ./update-deploy.sh

  popd
done

git status

###################################################################################################

popd
echo "### End ${THIS_SCRIPT_NAME}"
