import { forwardRef, HTMLAttributes } from 'react'
import { EmotionProps } from '../../../utils'
import ButtonLink from './ButtonLink'
import { buttonCss } from './styles'

export interface Props extends EmotionProps, HTMLAttributes<HTMLButtonElement> {
  inverted?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, inverted = false, ...rest }, ref) => (
    <button ref={ref} css={buttonCss(inverted)} {...rest}>
      {children}
    </button>
  )
)

export default Object.assign(Button, { Link: ButtonLink })
