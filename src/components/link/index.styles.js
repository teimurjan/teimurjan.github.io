import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const PrimaryLink = styled(Link)`
  color: var(--primaryColor);
`

export const PrimaryALink = PrimaryLink.withComponent('a')
