require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  ignore: [
    function () {
      // Imports from monorepos (ex. @teimurjan/utils) should be processed as well
      return false
    },
  ],
  extensions: ['.ts', '.tsx'],
})

module.exports = require('./config/gatsby-node')
