const config = require('../../../jest/config');

module.exports = Object.assign({}, config, {
  testEnvironment: 'jest-environment-jsdom-global',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testEnvironmentOptions: {
    url: 'http://localhost:9000/',
  },
  rootDir: '..',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest/setup-env.ts'],
  setupFiles: ['<rootDir>/jest/setup.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-syntax-highlighter)'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  moduleNameMapper: {
    '\\.(s?css)$': '<rootDir>/jest/identity.js',
    '\\.(png)$': '<rootDir>/jest/identity.js',
    '\\.(svg)$': '<rootDir>/jest/unit/empty.ts',
    '\\.(jpg)$': '<rootDir>/jest/unit/empty.ts',
    '\\.(md)$': '<rootDir>/jest/unit/empty-string.ts',
    'github-markdown-css': '<rootDir>/jest/identity.js',
    'react-markdown': '<rootDir>/src/__mocks__/react-markdown.tsx',
    'remark-*': '<rootDir>/src/__mocks__/remark-plugin.ts',
  },
  coverageReporters: [['text', { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 68,
      functions: 65,
      lines: 73,
      statements: 73,
    },
  },
});