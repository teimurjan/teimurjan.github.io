import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Container } from '../../components/container/index.styles'
import { TagResultsTitle, ResultsList } from './index.styles'
import { PrimaryButtonLink } from '../../components/button-link/index.styles'

const TagResultsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark || {
    edges: [],
    totalCount: 0,
  }
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <Container>
        <TagResultsTitle>{tagHeader}</TagResultsTitle>
        <ResultsList>
          {edges.map(({ node }) => {
            const { id, slug, title } = node.frontmatter
            return (
              <li key={id}>
                <Link to={`/blog/${slug}`}>{title}</Link>
              </li>
            )
          })}
        </ResultsList>
        <PrimaryButtonLink to="/tags">All tags</PrimaryButtonLink>
      </Container>
    </Layout>
  )
}

TagResultsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagResultsTemplate

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, hidden: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            hidden
          }
        }
      }
    }
  }
`
