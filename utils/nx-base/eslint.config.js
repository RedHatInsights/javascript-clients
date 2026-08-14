const baseConfig = require("../../eslint.config.js");

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
    rules: {
      "@nx/dependency-checks": "off",
    },
  },
];
