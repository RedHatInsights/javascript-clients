/* eslint-disable */
export default {
  displayName: 'rbac-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.integration.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/packages/rbac',
  testEnvironmentOptions: {
    testEnvironment: 'node',
    url: "http://localhost:3000",
    userAgent: 'Chell',
  },
};
