#!/usr/bin/env bash

THIS_SCRIPT_NAME=$(basename "$0")
echo "### Begin ${THIS_SCRIPT_NAME}"

# Fail if anything in here fails
set -e
# Run from the repo root
pushd "$(dirname -- "${BASH_SOURCE[0]:-$0}")"

source ./scripts/helpers/helpers.sh

###################################################################################################

./scripts/build-everything.sh

rm -rf deploy
mkdir deploy

cp -R ./host-app/dist/ ./deploy/host-app
cp -R ./header-project/header-mfe/dist/ ./deploy/header-mfe
#cp -R ./table-project/table-mfe/dist/ ./deploy/table-mfe

ls -al deploy/ deploy/*

pnpm run demo:analyze --html deploy-analysis.html

###################################################################################################

popd
echo "### End ${THIS_SCRIPT_NAME}"
