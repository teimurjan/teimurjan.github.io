import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function FadeIn({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-fade-in', className)} {...rest} />
}
