#!/usr/bin/env bash

THIS_SCRIPT_NAME=$(basename "$0")
echo "### Begin ${THIS_SCRIPT_NAME}"

# Fail if anything in here fails
set -e
# Run from the repo root
pushd "$(dirname -- "${BASH_SOURCE[0]:-$0}")"

source ./scripts/helpers/helpers.sh

###################################################################################################

source ./scripts/setup-local-environment.sh
./scripts/build-everything.sh

rm -rf deploy
cp -R ./host-app/dist/ ./deploy

for PROJECT in 'microfrontend-one' 'microfrontend-two' ; do
  cp -R ./$PROJECT/dist/ ./deploy/$PROJECT
done

ls -al deploy/ deploy/*

###################################################################################################

popd
echo "### End ${THIS_SCRIPT_NAME}"
