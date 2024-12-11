/* eslint-disable */
export default {
  displayName: 'integrations-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v2.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/integrations',
  testEnvironmentOptions: {
    testEnvironment: 'node',
    url: "http://localhost:3001",
  },
  testMatch: ['**/integrations.v2.integration.test.ts']
};
