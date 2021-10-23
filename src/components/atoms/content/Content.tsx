import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
}

const Content = ({ children, className }: Props) => (
  <div
    css={css`
      margin-top: ${theme.layout.contentTop.large};

      @media ${theme.screens.small.mediaUpTo} {
        margin-top: ${theme.layout.contentTop.small};
      }
    `}
    className={className}
  >
    {children}
  </div>
)

export default Content
