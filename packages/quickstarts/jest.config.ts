/* eslint-disable */
export default {
  displayName: 'quickstarts-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/quickstarts',
  testPathIgnorePatterns: ['/node_modules/','/tests/integration/'],
};
