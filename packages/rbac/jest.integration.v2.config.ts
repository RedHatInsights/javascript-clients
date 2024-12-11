/* eslint-disable */
export default {
  displayName: 'rbac-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v2.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/rbac',
  testEnvironmentOptions: {
    testEnvironment: 'node',
    url: "http://localhost:3002",
  },
  testMatch: ['**/workspaces.integration.test.ts']
};
