import path from 'path'

const ASSETS_PATH = path.resolve('./src/assets/')
const GRAPH_CMS_URL =
  'https://api-eu-central-1.graphcms.com/v2/ckuqwop6l1gvq01xqb8y0dsj3/master'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://teimurjan.github.io',
    title: 'Teimur Gasanov',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145378647-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.join(ASSETS_PATH, 'images', 'logo.png'),
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: ASSETS_PATH,
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url: GRAPH_CMS_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono', 'Roboto'],
        display: 'swap',
      },
    },
    'gatsby-plugin-smoothscroll',
  ],
}
