const { useGatsbyNode } = require('gatsby-plugin-ts-config')

module.exports = useGatsbyNode(() => require('./config/node'), {
  transpilerOptions: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  },
})
