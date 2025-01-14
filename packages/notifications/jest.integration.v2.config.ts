/* eslint-disable */
export default {
  displayName: 'notifications-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[t]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.v2.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/notifications',
  testEnvironmentOptions: {
    testEnvironment: 'node',
    url: "http://localhost:3002",
  },
  testMatch: ['**/notifications.v2.integration.test.ts']
};
