import { forwardRef } from 'react'
import Link, { Props as LinkProps } from '../link'
import { buttonCss } from './styles'

export interface Props extends LinkProps {
  inverted?: boolean
  disabled?: boolean
  to: LinkProps['to']
}

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, inverted = false, disabled = false, ...rest }, ref) => (
    <Link
      ref={ref}
      css={buttonCss({ inverted, disabled })}
      {...rest}
      color={inverted ? 'dark' : 'light'}
      inheritFontSize
      underline="none"
    >
      {children}
    </Link>
  )
)

export default ButtonLink
