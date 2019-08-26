import styled from '@emotion/styled'

export const TagResultsTitle = styled.h2`
  color: var(--fontOnBackgroundColor);
`

export const ResultsList = styled.ul`
  list-style-type: none;
  margin-left: 0;

  a {
    color: var(--fontOnBackgroundColor);
    &::before {
      content: '➤';
      display: inline-block;
      text-decoration: none;
      color: var(--primaryColor);
      margin-right: 0.5rem;
    }
  }
`
