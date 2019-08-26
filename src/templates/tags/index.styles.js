import styled from '@emotion/styled'
import { PrimaryButtonLink } from '../../components/button-link/index.styles'

export const TagsTitle = styled.h2`
  color: var(--fontOnBackgroundColor);
`

export const TagButton = styled(PrimaryButtonLink)`
  ::before {
    content: '#';
  }
`

export const TagButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${TagButton} {
    margin: 0.5rem 0.5rem 0 0;
  }
`
