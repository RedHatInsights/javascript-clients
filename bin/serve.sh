#!/usr/bin/env bash

#
# Starts a Prism mock server from an OpenAPI specification with CORS headers enabled.
# Prism generates responses from OpenAPI schemas, solving issues with incomplete examples.
#
# The script expects to execute from the repo root folder.
#
# Usage: serve.sh <openapi-spec-url> [port]
#   - openapi-spec-url: URL to the OpenAPI JSON specification
#   - port: Optional port number (defaults to 3000)
#
# Prism features used:
#   --dynamic: Generate responses from schemas instead of static examples
#   --ignoreExamples: Ignore incomplete examples in favor of schema-generated data
#   --cors: Enable CORS headers automatically
#   --errors=false: Don't return errors for minor spec violations
#

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <openapi-spec-url> [port]"
  echo "Example: $0 https://example.com/api/openapi.json 3001"
  exit 1
fi

SPEC_URL="$1"
PORT="${2:-3000}"

echo "Starting Prism mock server for spec: $SPEC_URL"
echo "Server will run on port: $PORT"

# Start Prism with schema-based generation and CORS support
npx @stoplight/prism-cli mock \
  --dynamic \
  --ignoreExamples \
  --host 0.0.0.0 \
  --port "$PORT" \
  --cors \
  --errors=false \
  --verboseLevel=error \
  "$SPEC_URL"
