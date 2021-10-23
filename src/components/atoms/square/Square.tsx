import { css } from '@emotion/react'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  sizes: [string, string]
  color: keyof typeof theme.colors.geometry
}

const Square = ({ className, sizes, color }: Props) => (
  <div
    css={css`
      width: ${sizes[0]};

      background: ${theme.colors.geometry[color]};
      border-radius: ${theme.border.radius.small};

      @media ${theme.screens.small.mediaUpTo} {
        width: ${sizes[1]};
      }

      &:before {
        content: '';
        display: block;
        padding-top: 100%;
      }
    `}
    className={className}
  />
)

export default Square
