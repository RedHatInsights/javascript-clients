const baseConfig = require("../../eslint.config.js");
const jsoncParser = require("jsonc-eslint-parser");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      // tslib is required by the compiled dist output (tsconfig importHelpers emits require("tslib")),
      // but this rule only sees source-level imports, so it always flags tslib as unused. Ignore it.
      "@nx/dependency-checks": ["error", { ignoredDependencies: ["tslib"] }],
    },
  },
];

