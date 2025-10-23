#!/bin/bash

# Creates .openapi-generator/FILES for the vulnerabilities package
#
# This script is needed because the vulnerabilities package uses legacyGenerator: true,
# which uses OpenAPI Generator v4.3.1 that does not automatically create the FILES file.
#
# The FILES file tracks all generated files and is required by our build-utils cleanup script
# to remove old files before regenerating new ones. Without this file, cleanup is silently
# skipped and stale files accumulate over time.
#
# Usage: Run this script after generating the vulnerabilities client
# Takes an aggressive approach - includes all files except those that should be preserved

echo "Creating FILES for vulnerabilities package..."

# Create root directory FILES - include all files except preserved ones
find . -maxdepth 1 -type f \
  ! -name "package.json" \
  ! -name "README.md" \
  ! -name "CHANGELOG.md" \
  ! -name "tsconfig*.json" \
  ! -name "jest.config.ts" \
  ! -name ".eslintrc.json" \
  ! -name "project.json" \
  ! -name "openapitools.json" \
  ! -name "preProcess.js" \
  ! -name "postProcess.sh" \
  ! -name "createOpenAPIGeneratorFiles.sh" \
  ! -name "custom.d.ts" \
  ! -name "apiSpec.json" \
  -printf "%f\n" | sort > .openapi-generator/FILES

# Add directories that should be cleaned (excluding doc/ since typedoc handles it, and dist/ since it's built)
find . -maxdepth 1 -type d \
  ! -name "." \
  ! -name ".openapi-generator" \
  ! -name "doc" \
  ! -name "dist" \
  ! -name "node_modules" \
  ! -name ".git" \
  -printf "%f/\n" | sort >> .openapi-generator/FILES

echo "" >> .openapi-generator/FILES

# Create git-api directory FILES
find git-api -maxdepth 1 -type f \
  ! -name "custom.d.ts" \
  -printf "%f\n" | sort > git-api/.openapi-generator/FILES

# Add git-api subdirectories (excluding doc/ since typedoc handles it)
find git-api -maxdepth 1 -type d \
  ! -name "git-api" \
  ! -name ".openapi-generator" \
  ! -name "doc" \
  -printf "%f/\n" | sort >> git-api/.openapi-generator/FILES

echo "" >> git-api/.openapi-generator/FILES

echo "Done! FILES created for both root and git-api directories with aggressive cleanup approach."