import { forwardRef, HTMLAttributes } from 'react'
import { EmotionProps } from '../../../utils'
import ButtonLink from './ButtonLink'
import { buttonCss } from './styles'

export interface Props extends EmotionProps, HTMLAttributes<HTMLButtonElement> {
  inverted?: boolean
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, inverted = false, disabled = false, ...rest }, ref) => (
    <button ref={ref} css={buttonCss({ inverted, disabled })} {...rest}>
      {children}
    </button>
  )
)

export default Object.assign(Button, { Link: ButtonLink })
