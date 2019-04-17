
#!/bin/sh

# remove trailing whitespace
sed 's/\s*$//' -i $1

# https://github.com/OpenAPITools/openapi-generator/issues/2154
sed 's/OneOfResolutionsboolean/Resolutions \| boolean/' -i $1

# generator warnings https://github.com/OpenAPITools/openapi-generator/issues/1714
