import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

const buttonVariants = cva(
  'font-mono text-xs inline-flex items-center gap-2 cursor-pointer no-underline relative transition-[transform,box-shadow,background,color] duration-[120ms] max-tablet:text-[11px]',
  {
    variants: {
      variant: {
        solid:
          'text-ink bg-paper-3 border-[1.5px] border-ink px-3.5 py-2 shadow-tight max-tablet:px-3 max-tablet:py-[7px] hover:bg-paper hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--ink)]',
        ghost:
          'text-ink bg-transparent border-[1.5px] border-rule px-3.5 py-2 max-tablet:px-3 max-tablet:py-[7px] hover:border-ink hover:shadow-stamp',
        naked: 'text-ink-faint bg-transparent border-0 p-1 gap-1 hover:text-ink',
      },
    },
    defaultVariants: { variant: 'solid' },
  }
)

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  className?: string
  children?: ReactNode
}

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
} & ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | 'as'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant,
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType
  const tagProps: Record<string, unknown> =
    Tag === 'button' && !(rest as { type?: string }).type ? { type: 'button' } : {}
  return (
    <Tag className={cn(buttonVariants({ variant }), className)} {...tagProps} {...rest}>
      {children}
    </Tag>
  )
}
