import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tilt?: 'l' | 'r'
}

export function Card({ tilt = 'l', className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'relative border-[1.5px] border-ink bg-paper-2 p-[18px] mb-[18px] shadow-tight transition-[transform,box-shadow] duration-[180ms]',
        'hover:shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px]',
        tilt === 'r' ? 'hover:rotate-[0.2deg]' : 'hover:rotate-[-0.15deg]',
        'max-tablet:p-[14px]',
        className
      )}
      {...rest}
    />
  )
}
