import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import { cva, VariantProps } from 'class-variance-authority'

const backgroundStyles = cva('', {
  variants: {
    color: {
      dark: 'bg-dark',
      dark2: 'bg-dark2',
      light: 'bg-light',
      outline: 'bg-outline',
      'geometry-dark': 'bg-geometry-dark',
      'geometry-light': 'bg-geometry-light',
    },
  },
  defaultVariants: {
    color: 'dark',
  },
})

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof backgroundStyles> {}

const Background = ({ className, children, color, ...rest }: Props) => (
  <div className={classNames(className, backgroundStyles({ color }))} {...rest}>
    {children}
  </div>
)

export default Background
