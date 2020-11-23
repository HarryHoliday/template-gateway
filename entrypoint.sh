#!/bin/sh
set -e
APP_PATH=/usr/src/app
cd $APP_PATH
ls -al $APP_PATH
#
npm ci --only=production
#
exec node server.js
