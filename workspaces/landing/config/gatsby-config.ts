import path from 'path'

const ASSETS_PATH = path.resolve('./src/assets/')
const GRAPH_CMS_URL =
  'https://api-eu-central-1.hygraph.com/v2/ckuqwop6l1gvq01xqb8y0dsj3/master'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://teimurjan.dev',
    image: '/seo.png',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'f312ce9d-5eb0-4a08-8331-320723dfdaed',
        srcUrl: 'https://cloud.umami.is/script.js',
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
        dataLoaderOptions: {
          batch: false,
        },
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
