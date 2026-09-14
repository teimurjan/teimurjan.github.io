import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative border-[1.5px] border-ink bg-paper-2 p-[18px] mb-[18px] shadow-tight',
        'max-tablet:p-[14px]',
        className
      )}
      {...rest}
    />
  )
}
