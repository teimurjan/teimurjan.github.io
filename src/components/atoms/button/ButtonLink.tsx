import { forwardRef } from 'react'
import Link, { Props as LinkProps } from '../link'
import { buttonCss } from './styles'

export interface Props extends LinkProps {
  inverted?: boolean
  to: LinkProps['to']
}

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, inverted = false, ...rest }, ref) => (
    <Link
      ref={ref}
      css={buttonCss({ inverted })}
      {...rest}
      color={inverted ? 'blue' : 'beige'}
      inheritFontSize
      underline="none"
    >
      {children}
    </Link>
  )
)

export default ButtonLink
