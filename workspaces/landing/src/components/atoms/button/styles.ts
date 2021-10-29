import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'

interface Args {
  inverted?: boolean
}

export const buttonCss = ({ inverted }: Args) => css`
  border: none;
  background: ${inverted
    ? `linear-gradient(to right, ${theme.colors.button.beigeDarken} 50%, ${theme.colors.button.beige} 50%)`
    : `linear-gradient(to right, ${theme.colors.button.blueDarken} 50%, ${theme.colors.button.blue} 50%)`};
  background-size: 200% 100%;
  background-position: 100% bottom;
  text-transform: uppercase;
  font-weight: bold;
  color: ${inverted
    ? theme.colors.typography.blue
    : theme.colors.typography.beige};
  border: 2px solid
    ${inverted ? theme.colors.typography.beige : theme.colors.typography.blue};
  font-size: ${theme.typography.text.small.fontSize};
  line-height: ${theme.typography.text.small.lineHeight};
  padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  cursor: pointer;
  transition: all 300ms ${theme.transition.timingFunction.easeInOutCubic};
  text-align: center;

  &:hover {
    background-position: left bottom;
    border-color: ${inverted
      ? theme.colors.button.beigeDarken
      : theme.colors.button.blueDarken};
  }
`
