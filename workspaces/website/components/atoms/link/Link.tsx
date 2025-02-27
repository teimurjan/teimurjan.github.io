import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

const linkStyles = cva(
  "no-underline relative cursor-pointer pointer-events-auto transition-all duration-300 ease-in-out after:content-[''] after:block after:w-full after:h-px after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:origin-left after:absolute after:-bottom-1 after:left-0",
  {
    variants: {
      color: {
        dark: 'text-dark',
        light: 'text-light',
      },
      underline: {
        none: 'after:hidden',
        hover: 'after:scale-x-0 group-hover:after:scale-x-100',
        always: 'after:scale-x-100',
      },
    },
    defaultVariants: {
      color: 'dark',
      underline: 'hover',
    },
  },
)

export interface Props
  extends Omit<ComponentProps<typeof NextLink>, 'color'>,
    VariantProps<typeof linkStyles> {}

const Link = ({ children, className, color, underline, ...rest }: Props) => {
  return (
    <div className={classNames('group inline-block cursor-pointer', className)}>
      <NextLink className={linkStyles({ color, underline })} {...rest}>
        {children}
      </NextLink>
    </div>
  )
}

export default Link
