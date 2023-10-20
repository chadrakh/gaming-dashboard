import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config : Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
      '^.+\\.(t|j)sx?$': 'ts-jest',
    },
  };
  
export default config;