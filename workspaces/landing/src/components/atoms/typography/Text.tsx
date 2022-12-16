import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  variant?: keyof typeof theme.typography.text
  color?: 'blue' | 'beige'
  container?: boolean
}

const Text = ({
  color = 'blue',
  variant = 'p',
  container,
  children,
  className,
}: Props) => {
  const Component = container ? 'div' : variant

  return (
    <Component
      css={css`
        font-size: ${theme.typography.text[variant].fontSize};
        line-height: ${theme.typography.text[variant].lineHeight};
        color: ${theme.colors.typography[color]};
        margin: 0;
      `}
      className={className}
    >
      {children}
    </Component>
  )
}

export default Text
