#!/usr/bin/env bash

#
# Produces a Mockoon config/env with the necessary CORS headers so that the integration tests will function properly.
#
# The script expects to execute from the packages/rbac/tests/integration folder.
#
# The process looks like this:
#   1. produce a mockoon config from the OpenAPI spec.
#   2. adds the CORS headers to the Mockoon config, taken from cors_headers.json
#
# The final, updated Mockoon config is kept in /tmp/workspaces_updated.json
#

# Clean up temp files
rm -f /tmp/workspaces.json
rm -f /tmp/workspaces_updated.json

echo "Updating the Mockoon config from the latest spec"
npx mockoon-cli import -i https://raw.githubusercontent.com/RedHatInsights/insights-rbac/refs/heads/master/docs/source/specs/v2/openapi.v2.yaml -o /tmp/workspaces.json -p

echo "Adding CORS headers to the Mockoon config"
jq -n 'input | .headers += [inputs.newHeaders][]' /tmp/workspaces.json cors_headers.json > /tmp/workspaces_updated.json


