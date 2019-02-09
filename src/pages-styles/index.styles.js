import styled from '@emotion/styled'

export const MdPageContent = styled.div`
  h2 {
    color: ${props => props.theme.primaryColor};
  }

  p,
  h2 {
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.primaryColor};
  }
`

export const MdPageTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  margin: 0.5rem 0;
`
