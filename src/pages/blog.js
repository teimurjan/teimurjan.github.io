import React from 'react'
import { graphql } from 'gatsby'
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
            path
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
