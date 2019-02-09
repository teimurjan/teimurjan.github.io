import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Tags from '../../components/tags'
import { BlogPostContent, BlogPostTitle } from './index.styles'
import { Container } from '../../components/container/index.styles'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet title={frontmatter.title} />
      <Container>
        <small>Posted on {frontmatter.date}.</small>
        <br />
        <Tags tags={frontmatter.tags} />
        <BlogPostTitle>{frontmatter.title}</BlogPostTitle>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        tags
      }
    }
  }
`
