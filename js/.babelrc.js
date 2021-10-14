module.exports = {
   plugins: [
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      '@babel/plugin-proposal-class-properties',
    ],


  sourceMaps: 'inline',
  presets: [
    [
      '@babel/preset-env',
    ],
  ]
};
