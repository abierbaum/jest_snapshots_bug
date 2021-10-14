module.exports = {
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transform: {
    '\\.[tj]s$': ['babel-jest', {configFile: require.resolve('./.babelrc')}],
  },
};
