/* eslint-disable */
export default {
  displayName: 'notifications-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v1.spec.json' }],
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/notifications',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    url: "http://localhost:3001",
  },
  testMatch: ['**/notifications.v1.integration.test.ts']
};
