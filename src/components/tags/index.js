import React from 'react'
import { PrimaryLink } from '../link/index.styles'

const Tags = ({ tags }) => (
  <div>
    Tags:{' '}
    {tags.map((tag, i) => (
      <React.Fragment key={tag}>
        <PrimaryLink to={`/tags/${tag}`}>#{tag}</PrimaryLink>
        {i < tags.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
  </div>
)

export default Tags
