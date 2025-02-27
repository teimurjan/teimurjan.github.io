import { HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

const titleStyles = cva('m-0 font-bold', {
  variants: {
    variant: {
      h1: 'text-6xl',
      h2: 'text-5xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'text-lg',
    },
    color: {
      dark: 'text-dark',
      light: 'text-light',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
    },
  },
  defaultVariants: {
    variant: 'h1',
    color: 'dark',
  },
})

export interface Props
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof titleStyles> {}

const Title = ({
  color,
  variant,
  transform,
  children,
  className,
  ...rest
}: Props) => {
  const Component = variant ?? 'h1'

  return (
    <Component
      className={classNames(
        titleStyles({ variant, color, transform }),
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Title
