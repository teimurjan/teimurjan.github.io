import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PostPreview from '../components/post-preview'
import Layout from '../components/layout'
import { Container } from '../components/container/index.styles'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Container>
        {posts.map(({ node: post }) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Container>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            field: PropTypes.shape({
              readingTime: PropTypes.shape({
                minutes: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
              }),
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string).isRequired,
              slug: PropTypes.string.isRequired,
              excerpt: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//src/posts/.*.md$/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            tags
            excerpt
          }
          fields {
            readingTime {
              minutes
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
