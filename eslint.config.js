const nx = require('@nx/eslint-plugin');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const jsoncParser = require('jsonc-eslint-parser');
const jsoncPlugin = require('eslint-plugin-jsonc');
const globals = require('globals');

module.exports = [
  // Global ignores — replaces .eslintignore (generated code excluded from linting).
  // JS files ignored because all packages are TypeScript-only; JS files in
  // packages are build scripts (preProcess.js, jest.config.js, etc.) that were
  // never linted under the legacy config's lintFilePatterns either.
  // dist ignored because the inferred lint target always runs `eslint .`
  // (whole project dir), unlike the old lintFilePatterns-scoped executor —
  // without this, a locally built dist/package.json trips @nx/dependency-checks.
  {
    ignores: [
      '**/dist/**',
      '**/*.js',
      '**/*.jsx',
      '**/base.ts',
      '**/api.ts',
      '**/configuration.ts',
      '**/index.ts',
      '**/*.d.ts',
    ],
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  // Prettier: disables conflicting rules + enables prettier/prettier
  eslintPluginPrettierRecommended,
  // Custom prettier options (endOfLine: auto)
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  // Module boundary enforcement for TS/JS files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
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
  // Jest globals for spec files
  {
    files: [
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
    ],
    languageOptions: {
      globals: globals.jest,
    },
  },
  // JSON files: jsonc parser + formatting rules, prettier off
  // (must come after generic prettier/prettier to override it for JSON)
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      'jsonc/comma-dangle': ['error', 'never'],
      'prettier/prettier': 'off',
    },
  },
  // Default dependency-checks off — packages override per-file in their own config
  {
    rules: {
      '@nx/dependency-checks': 'off',
    },
  },
];
