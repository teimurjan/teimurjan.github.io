import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'
import { EmotionProps } from '../../../utils'

export interface Props extends EmotionProps {
  size: string
  color: keyof typeof theme.colors.geometry
}

const Square = ({ className, size, color }: Props) => (
  <div
    css={css`
      width: ${size};

      background: ${theme.colors.geometry[color]};
      border-radius: ${theme.border.radius.small};

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
