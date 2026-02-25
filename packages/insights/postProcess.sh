#!/bin/bash

sed -i.bak 's/AnyType/any/g' src/api.ts
rm src/api.ts.bak
