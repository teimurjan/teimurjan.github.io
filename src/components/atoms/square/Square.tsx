import { css } from '@emotion/react'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  sizes: { [K in keyof typeof theme.screens]: string }
  color: keyof typeof theme.colors.geometry
}

const getWidthCss = (sizes: Props['sizes']) =>
  Object.entries(sizes)
    .reverse()
    .reduce(
      (acc, [screenSize, width]) =>
        acc +
        `
            @media ${
              theme.screens[screenSize as keyof typeof theme.screens].mediaUpTo
            } {
              width: ${width};
            }
          `,
      `width: ${sizes.xlarge};`
    )

const Square = ({ className, sizes, color }: Props) => (
  <div
    css={css`
      ${getWidthCss(sizes)}

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
