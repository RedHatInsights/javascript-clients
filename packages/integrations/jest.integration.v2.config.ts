/* eslint-disable */
export default {
  displayName: 'integrations-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v2.spec.json' }],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/integrations',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    url: "http://localhost:3001",
  },
  testMatch: ['**/integrations.v2.integration.test.ts']
};
