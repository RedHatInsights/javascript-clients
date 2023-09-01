#!/bin/bash

sed -i.bak 's/AnyType/any/g' api.ts
rm api.ts.bak
