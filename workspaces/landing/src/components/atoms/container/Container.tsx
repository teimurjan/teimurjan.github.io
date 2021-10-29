import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { EmotionProps } from '../../../utils'
import { theme } from '@teimurjan/utils'

export interface Props extends EmotionProps {
  id?: string
  children: ReactNode
}

const Container = ({ children, className, id }: Props) => (
  <div
    id={id}
    css={css`
      margin: 0 auto;
      padding: 0 1rem;

      @media ${theme.screens.small.mediaUpTo} {
        width: 100%;
      }

      @media ${theme.screens.medium.mediaFrom} {
        width: ${theme.screens.medium.containerWidth}px;
      }

      @media ${theme.screens.large.mediaFrom} {
        width: ${theme.screens.large.containerWidth}px;
      }

      @media ${theme.screens.xlarge.mediaFrom} {
        width: ${theme.screens.xlarge.containerWidth}px;
      }
    `}
    className={className}
  >
    {children}
  </div>
)

export default Container
