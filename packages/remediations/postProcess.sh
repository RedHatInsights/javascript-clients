#!/bin/bash

sed -i.bak 's/UNKNOWN_BASE_TYPE/any/g' api.ts
sed -i.bak 's/uNKNOWNBASETYPE/data/g' api.ts
rm api.ts.bak
