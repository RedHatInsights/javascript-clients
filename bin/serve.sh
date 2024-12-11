#!/usr/bin/env bash

#
# Produces a Mockoon config/env with the necessary CORS headers so that the integration tests will function properly.
# Then runs the Mockoon server with the updated config.
#
# The script expects to execute from the repo root folder.
#
# The process looks like this:
#   1. produce a Mockoon config from the OpenAPI spec.
#   2. add the CORS headers to the Mockoon config, taken from cors_headers.json
#   3. Run the server with the updated Mockoon config
#
# The final, updated Mockoon config is kept in /tmp/workspaces_updated.json
# The server runs on localhost port 3000 by default. Can be overridden using arg 2.
#

# Clean up temp files
rm -f /tmp/workspaces.json
rm -f /tmp/workspaces_updated.json
rm -f /tmp/cors_headers.json

if [ ! -n "$2" ]; then
  echo "Mockoon will use the default port, 3000"
  MOCKOON_PORT=3000
else
  echo "Mockoon will run on port $2"
  MOCKOON_PORT="$2"
fi

# Put CORS headers in /tmp
cat << END > /tmp/cors_headers.json
{
  "newHeaders": [
    {
      "key": "Access-Control-Allow-Origin",
      "value": "*"
    },
    {
      "key": "Access-Control-Allow-Methods",
      "value": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS"
    },
    {
      "key": "Access-Control-Allow-Headers",
      "value": "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With"
    }

  ]
}
END

echo "Updating the Mockoon config from the latest spec ($1)"
npx mockoon-cli import -i "$1" -o /tmp/workspaces.json -p

echo "Adding CORS headers to the Mockoon config"
jq -n 'input | .headers += [inputs.newHeaders][]' /tmp/workspaces.json /tmp/cors_headers.json > /tmp/workspaces_updated.json

echo "Running API using the updated spec"
npx mockoon-cli start --data /tmp/workspaces_updated.json --port "$MOCKOON_PORT"
