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

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "//src/posts/.*.md$/" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            html
            id
            frontmatter {
              excerpt
              date(formatString: "MMM DD, YYYY")
              slug
              title
              tags
            }
          }
        }
      }
    }
  `)

  const blogPostTemplate = path.resolve('src/templates/blog-post/index.js')
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        post: node,
      },
    })
  })

  const tagTemplate = path.resolve('src/templates/tag-results/index.js')
  const tags = getTagsFromPosts(posts)
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}

const getTagsFromPosts = posts =>
  _.uniq(
    posts.reduce((allTags, { node }) => {
      if (node.frontmatter.tags) {
        return [...allTags, ...node.frontmatter.tags]
      }
      return allTags
    }, [])
  )
