const nx = require('@nx/eslint-plugin');

// Uses Nx's flat-config presets directly instead of bridging root's legacy
// .eslintrc.json through FlatCompat: that config's `ignorePatterns: ["**/*"]`
// relies on each legacy package re-opting-in via `"!**/*"`, which flat config
// has no equivalent for, and its `extends: ["plugin:@nx/typescript"]` chain
// doesn't register plugins the way flat config expects. flat/base + flat/typescript
// are Nx's own flat-compatible equivalents of those same legacy presets.
module.exports = [
  {
    // Nx's flat/react bundles a temporary shim (react-tmp.js) that applies
    // @typescript-eslint rules to plain .js/.cjs files too, but only registers
    // the plugin for .ts/.tsx — so these build-tooling files would otherwise crash.
    ignores: ['webpack.config.js', 'eslint.config.cjs'],
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/react'],
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
