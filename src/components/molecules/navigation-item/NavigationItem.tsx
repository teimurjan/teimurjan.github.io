import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Link } from '../../atoms'
import { EmotionProps, theme } from '../../../utils'

export interface Props extends EmotionProps {
  to: string
  children: ReactNode
  active?: boolean
}

const NavigationItem = ({ to, children, className }: Props) => (
  <Link
    css={css`
      padding: ${theme.spacing.small} ${theme.spacing.medium};
      text-transform: uppercase;

      @media ${theme.screens.small.mediaUpTo} {
        padding: ${theme.spacing.xsmall} ${theme.spacing.small};
      }
    `}
    to={to}
    className={className}
  >
    {children}
  </Link>
)

export default NavigationItem