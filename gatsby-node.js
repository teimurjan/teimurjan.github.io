/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require('lodash')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blog-post/index.js')
  const tagTemplate = path.resolve('src/templates/tag-results/index.js')
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges.filter(edge =>
    edge.node.fileAbsolutePath.includes('/src/posts')
  )

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  const tags = _.uniq(
    posts.reduce((allTags, edge) => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        return [...allTags, ...edge.node.frontmatter.tags]
      }
      return allTags
    }, [])
  )

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
