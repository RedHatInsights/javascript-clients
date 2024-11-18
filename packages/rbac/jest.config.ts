/* eslint-disable */
export default {
  displayName: 'rbac-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/rbac',
  modulePathIgnorePatterns: ['/node_modules/', '/integration/'],
};
