import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/container/index.styles'
import {
  TagsTitle,
  TagButton,
  TagButtonsWrapper,
} from '../pages-styles/tags.styles'
import { Input } from '../components/input/index.styles'

class TagsPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        group: PropTypes.arrayOf(
          PropTypes.shape({
            fieldValue: PropTypes.string.isRequired,
            totalCount: PropTypes.number.isRequired,
          }).isRequired
        ),
      }),
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      }),
    }),
  }

  state = {
    filterText: '',
  }

  onFilterTextChange = e => this.setState({ filterText: e.currentTarget.value })

  render() {
    const {
      data: {
        allMarkdownRemark: { group },
      },
    } = this.props
    return (
      <Layout>
        <Container>
          <TagsTitle>Find by tag:</TagsTitle>
          <Input
            value={this.state.filterText}
            onChange={this.onFilterTextChange}
          />
          <TagButtonsWrapper>
            {group
              .filter(tag => tag.fieldValue.includes(this.state.filterText))
              .map(tag => (
                <TagButton
                  key={tag.fieldValue}
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue}
                </TagButton>
              ))}
          </TagButtonsWrapper>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
