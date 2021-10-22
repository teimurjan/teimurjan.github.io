import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  color: keyof typeof theme.colors.background
}

const Background = ({ className, children, color }: Props) => (
  <div
    css={css`
      background: ${theme.colors.background[color]};
    `}
    className={className}
  >
    {children}
  </div>
)

export default Background
