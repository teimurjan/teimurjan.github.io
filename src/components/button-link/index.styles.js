import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const PrimaryButtonLink = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.fontOnPrimaryColor};
  background: ${props => props.theme.primaryColor};
  text-decoration: none;
  padding: 0.5rem;
`
