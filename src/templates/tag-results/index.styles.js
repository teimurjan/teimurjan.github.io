import styled from '@emotion/styled'

export const TagResultsTitle = styled.h2`
  color: ${props => props.theme.fontOnBackgroundColor};
`

export const ResultsList = styled.ul`
  list-style-type: none;
  margin-left: 0;

  a {
    color: ${props => props.theme.fontOnBackgroundColor};
    &::before {
      content: '➤';
      display: inline-block;
      text-decoration: none;
      color: ${props => props.theme.primaryColor};
      margin-right: 0.5rem;
    }
  }
`
