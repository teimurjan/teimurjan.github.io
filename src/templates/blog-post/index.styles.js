import styled from '@emotion/styled'
import { mediaSizeLessThan, sizes } from '../../media'

export const BlogPost = styled.div`
  padding: 0.5rem 20%;

  ${mediaSizeLessThan(sizes.md)} {
    padding: 0.5rem 1rem;
  }
`
export const BlogPostContent = styled.div`
  font-size: 0.9rem;
  h2 {
    &:before {
      color: ${props => props.theme.primaryColor};
    }
  }

  p,
  h2 {
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.primaryColor};
  }
`

export const BlogPostTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  margin: 0.5rem 0;
`
