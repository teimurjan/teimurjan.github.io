import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  variant: keyof typeof theme.typography.title
  color?: 'blue' | 'beige'
  transform?: 'uppercase' | 'lowercase'
}

const Title = ({
  color = 'blue',
  variant,
  children,
  transform,
  className
}: Props) => {
  const Component = variant as keyof JSX.IntrinsicElements

  return (
    <Component
      css={css`
        font-size: ${theme.typography.title[variant].fontSize};
        line-height: ${theme.typography.title[variant].lineHeight};
        font-weight: bold;
        color: ${theme.colors.typography[color]};
        text-transform: ${transform};
        margin: 0;

        @media ${theme.screens.medium.mediaUpTo} {
          font-size: ${theme.typography.titleResponsive[variant].fontSize};
          line-height: ${theme.typography.titleResponsive[variant].lineHeight};
        }
      `}
      className={className}
    >
      {children}
    </Component>
  )
}

export default Title
