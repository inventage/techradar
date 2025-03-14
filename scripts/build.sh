#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

set -a
. ${SCRIPT_DIR}/.env
env | grep 'REACT\|PUBLIC' && npx aoe_technology_radar-buildRadar && npx aoe_technology_radar-generateJson && npx aoe_technology_radar-createStaticFiles
set +a
