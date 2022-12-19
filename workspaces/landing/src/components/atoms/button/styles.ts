import { css } from '@emotion/react'
import { theme } from '@teimurjan/utils'

interface Args {
  inverted?: boolean
  disabled?: boolean
}

export const buttonCss = ({ inverted, disabled }: Args) => css`
  pointer-events: ${disabled ? 'none' : 'auto'};
  border: none;
  background: ${inverted
    ? `linear-gradient(to right, ${theme.colors.button.light2} 50%, ${theme.colors.button.light} 50%)`
    : `linear-gradient(to right, ${theme.colors.button.dark2} 50%, ${theme.colors.button.dark} 50%)`};
  background-size: 200% 100%;
  background-position: 100% bottom;
  text-transform: uppercase;
  font-weight: bold;
  color: ${inverted
    ? theme.colors.typography.dark
    : theme.colors.typography.light};
  border: 2px solid
    ${inverted ? theme.colors.typography.light : theme.colors.typography.dark};
  font-size: ${theme.typography.text.small.fontSize};
  line-height: ${theme.typography.text.small.lineHeight};
  padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  cursor: pointer;
  transition: all 300ms ${theme.transition.timingFunction.easeInOutCubic};
  text-align: center;

  &:hover {
    background-position: left bottom;
    border-color: ${inverted
      ? theme.colors.button.light2
      : theme.colors.button.dark2};
  }
`
