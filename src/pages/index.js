import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Container } from '../components/container/index.styles'
import { MdPageTitle, MdPageContent } from '../pages-styles/index.styles'

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = data
  return (
    <Layout>
      {frontmatter.title && (
        <Helmet title={`${siteTitle} - ${frontmatter.title}`} />
      )}
      <Container>
        {frontmatter.title && <MdPageTitle>{frontmatter.title}</MdPageTitle>}
        <MdPageContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
