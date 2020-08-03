#!/bin/bash

echo "Check if database and node is installed.."

mongod_status=$(ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' ')

if [[ "${mongod_status}" == 0 ]]; then
    echo "MongoDB is not running plase install or start Mongo."
fi

if ! which node >/dev/null; then
    echo "node is installed, skipping..."
fi

echo "That's all right.."