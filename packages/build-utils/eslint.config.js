const baseConfig = require("../../eslint.config.js");
const jsoncParser = require("jsonc-eslint-parser");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "@nx/dependency-checks": "error",
    },
  },
  {
    files: ["./package.json", "./executors.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "@nx/nx-plugin-checks": "error",
      "@nx/dependency-checks": [
        "error",
        {
          buildTargets: ["build"],
          checkMissingDependencies: true,
          checkObsoleteDependencies: true,
          checkVersionMismatches: true,
          ignoredDependencies: ["semver", "zod"],
        },
      ],
    },
  },
];
