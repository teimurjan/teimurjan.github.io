import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

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
