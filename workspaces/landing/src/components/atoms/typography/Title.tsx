import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  children: ReactNode
  variant: keyof typeof theme.typography.title.xlarge
  color?: 'blue' | 'beige'
  transform?: 'uppercase' | 'lowercase'
}

const Title = ({
  color = 'blue',
  variant,
  children,
  transform,
  className,
}: Props) => {
  const Component = variant as keyof JSX.IntrinsicElements

  return (
    <Component
      css={css`
        font-size: ${theme.typography.title.xlarge[variant].fontSize};
        line-height: ${theme.typography.title.xlarge[variant].lineHeight};
        font-weight: bold;
        color: ${theme.colors.typography[color]};
        text-transform: ${transform};
        margin: 0;

        @media ${theme.screens.small.mediaUpTo} {
          font-size: ${theme.typography.title.large[variant].fontSize};
          line-height: ${theme.typography.title.large[variant].lineHeight};
        }

        @media ${theme.screens.large.mediaUpTo} {
          font-size: ${theme.typography.title.large[variant].fontSize};
          line-height: ${theme.typography.title.large[variant].lineHeight};
        }
      `}
      className={className}
    >
      {children}
    </Component>
  )
}

export default Title
