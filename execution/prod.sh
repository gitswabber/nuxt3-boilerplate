#!/bin/sh

# set environment variables
export ENV=PROD
export API=https://prod.com
export TOKEN=PROD-TOKEN

# build
nuxi build

# run on node
node .output/server/index.mjs
