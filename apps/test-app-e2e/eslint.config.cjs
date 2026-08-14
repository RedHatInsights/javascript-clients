const cypress = require('eslint-plugin-cypress/flat');
const nx = require('@nx/eslint-plugin');

// Uses Nx's flat-config presets directly instead of bridging root's legacy
// .eslintrc.json through FlatCompat: that config's `ignorePatterns: ["**/*"]`
// relies on each legacy package re-opting-in via `"!**/*"`, which flat config
// has no equivalent for. flat/base + flat/typescript are Nx's own
// flat-compatible equivalents of the same legacy presets.
module.exports = [
  cypress.configs['recommended'],
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Same module-boundary policy as root .eslintrc.json's override for this rule.
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
];
