/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // Use ts-jest preset of TS through ts-jest and .js nothing
  preset: 'ts-jest',

  // Q: Why doesn't this change how JS gets processed
  //preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
};