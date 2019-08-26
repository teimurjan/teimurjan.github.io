import styled from '@emotion/styled'

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid var(--primaryDarkColor);
  width: 100%;

  &:focus {
    border: 2px solid var(--primaryColor);
    outline: none;
  }
`
