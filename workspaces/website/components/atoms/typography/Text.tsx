import { HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

const textStyles = cva('m-0', {
  variants: {
    variant: {
      p: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    color: {
      dark: 'text-dark-foreground',
      light: 'text-light-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'dark',
  },
})

export interface Props
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textStyles> {
  container?: boolean
}

const Text = ({ color, variant, container, children, className }: Props) => {
  const Component = container ? 'div' : 'p'

  return (
    <Component
      className={classNames(textStyles({ variant, color }), className)}
    >
      {children}
    </Component>
  )
}

export default Text
