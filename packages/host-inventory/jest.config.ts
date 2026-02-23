/* eslint-disable */
export default {
  displayName: 'host-inventory-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/host-inventory',
  testPathIgnorePatterns: ['/node_modules/','/tests/'],
};
