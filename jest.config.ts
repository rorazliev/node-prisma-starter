import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  bail: false,
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.ts$',
  verbose: true,
};

export default config;
