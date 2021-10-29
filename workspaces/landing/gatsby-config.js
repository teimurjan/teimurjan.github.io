// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  extensions: ['.ts', '.tsx'],
})

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = require('./config/gatsby-config')
