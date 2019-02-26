import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { Container } from '../components/container/index.styles'
import { MdPageTitle, MdPageContent } from '../pages-styles/index.styles'

const IndexPage = ({ data }) => {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
  const {
    siteMetadata: { title: siteTitle },
  } = site
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const query = graphql`
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
