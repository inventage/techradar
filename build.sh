#!/bin/bash

set -a
. .env
env | grep 'REACT\|PUBLIC' && npx aoe_technology_radar-buildRadar && npx aoe_technology_radar-generateJson && npx aoe_technology_radar-createStaticFiles
set +a

node patch-styles.js
node patch-translate.js
