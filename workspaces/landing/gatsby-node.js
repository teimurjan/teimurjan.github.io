// eslint-disable-next-line @typescript-eslint/no-var-requires
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

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = require('./config/gatsby-node')
