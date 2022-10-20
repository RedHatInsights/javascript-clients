#!/bin/bash

sed -i.bak 's/Null/null/g' api.ts
rm api.ts.bak
