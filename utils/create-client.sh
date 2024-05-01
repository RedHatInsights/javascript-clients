#!/bin/bash

echo "Enter the name for the new client"
read client

mkdir packages/$client
rsync -am utils/nx-base/ packages/$client

# https://unix.stackexchange.com/questions/13711/differences-between-sed-on-mac-osx-and-other-standard-sed
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s/CLIENTNAME/$client/g" packages/$client/package.json
  sed -i '' "s/CLIENTNAME/$client/g" packages/$client/project.json
  sed -i '' "s/CLIENTNAME/$client/g" packages/$client/jest.config.ts

else
  sed "s/CLIENTNAME/$client/g" packages/$client/package.json -i
  sed "s/CLIENTNAME/$client/g" packages/$client/project.json -i
  sed "s/CLIENTNAME/$client/g" packages/$client/jest.config.ts -i

fi
