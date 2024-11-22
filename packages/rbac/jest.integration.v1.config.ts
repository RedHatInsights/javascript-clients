/* eslint-disable */
export default {
  displayName: 'rbac-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v1.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/rbac',
  testEnvironmentOptions: {
    testEnvironment: 'node',
    url: "http://localhost:3001",
  },
  testMatch: ['**/rbac.v1.integration.test.ts']
};
