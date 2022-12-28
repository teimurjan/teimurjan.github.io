import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  color: keyof typeof theme.colors.background
}

const Tag = ({ className, children, color }: Props) => {
  const textColor = color === 'light' ? 'dark' : 'light'

  return (
    <span
      css={css`
        background: ${theme.colors.background[color]};
        text-transform: uppercase;
        font-weight: bold;
        font-size: ${theme.typography.text.small.fontSize};
        line-height: ${theme.typography.text.small.lineHeight};
        padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
        color: ${theme.colors.typography[textColor]};
      `}
      className={className}
    >
      {children}
    </span>
  )
}

export default Tag
