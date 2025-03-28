import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import Link, { Props as LinkProps } from '../link'

const buttonStyles = cva(
  'uppercase border-none text-center cursor-pointer !transition-[background-position] duration-300 ease-in-out bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0]',
  {
    variants: {
      color: {
        light:
          'bg-[image:var(--color-light-button)] text-dark-foreground',
        dark: 'bg-[image:var(--color-dark-button)] text-light-foreground',
      },
      disabled: {
        true: 'pointer-events-none opacity-50',
        false: 'pointer-events-auto',
      },
      size: {
        sm: 'text-sm leading-tight py-1 px-2',
        md: 'text-base leading-normal py-2 px-4',
        lg: 'text-lg leading-relaxed py-3 px-6',
      },
    },
    defaultVariants: {
      color: 'dark',
      disabled: false,
      size: 'md',
    },
  },
)

export interface Props
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, color, disabled, size, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          buttonStyles({ color, disabled, size }),
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

export interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonStyles> {
  children?: ReactNode
}

const ButtonLink = ({
  children,
  color,
  disabled,
  size,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link
      className={classNames(buttonStyles({ color, disabled, size }))}
      color={color === 'light' ? 'dark' : 'light'}
      underline="none"
      {...rest}
    >
      {children}
    </Link>
  )
}

export default Object.assign(Button, { Link: ButtonLink })
