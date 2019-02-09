import styled from '@emotion/styled'

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid ${props => props.theme.primaryDarkColor};
  width: 100%;

  &:focus {
    border: 2px solid ${props => props.theme.primaryColor};
    outline: none;
  }
`
