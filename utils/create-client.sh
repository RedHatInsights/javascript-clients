#!/bin/bash

echo "Enter the name for the new client"
read client

mkdir packages/$client
cp utils/nx-base/.* utils/nx-base/* packages/$client

sed -i '' "s/CLIENTNAME/$client/g" packages/$client/package.json
sed -i '' "s/CLIENTNAME/$client/g" packages/$client/project.json
sed -i '' "s/CLIENTNAME/$client/g" packages/$client/jest.config.ts
