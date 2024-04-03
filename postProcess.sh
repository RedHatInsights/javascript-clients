#!/bin/sh

# https://unix.stackexchange.com/questions/13711/differences-between-sed-on-mac-osx-and-other-standard-sed
if [[ "$OSTYPE" == "darwin"* ]]; then
  # remove trailing whitespace
  sed -i '' 's/\s*$//' $1

  # https://github.com/OpenAPITools/openapi-generator/issues/2154
  sed -i '' 's/OneOfResolutionsboolean/Resolutions \| boolean/' $1
  sed -i '' 's/OneOf[a-zA-Z]*/Object/' $1
  sed -i '' 's/Null/null/' $1

else
  # remove trailing whitespace
  sed 's/\s*$//' -i $1
  
  # https://github.com/OpenAPITools/openapi-generator/issues/2154
  sed 's/OneOfResolutionsboolean/Resolutions \| boolean/' -i $1
  sed 's/OneOf[a-zA-Z]*/Object/' -i $1
  sed 's/Null/null/' -i $1
fi

# generator warnings https://github.com/OpenAPITools/openapi-generator/issues/1714
