import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import { PrimaryLink } from '../link/index.styles'

const Tags = ({ tags }) => (
  <div>
    Tags:{' '}
    {tags.map((tag, i) => (
      <React.Fragment key={tag}>
        <PrimaryLink to={`/blog/tags/${kebabCase(tag)}`}>#{tag}</PrimaryLink>
        {i < tags.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
  </div>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
