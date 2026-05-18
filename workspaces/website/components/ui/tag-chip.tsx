import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

interface TagChipProps extends ComponentPropsWithoutRef<'span'> {
  pulse?: boolean
}

export function TagChip({ className, pulse, children, ...rest }: TagChipProps) {
  if (pulse) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 border border-rule px-2 py-[3px] text-[10px] text-ink-dim uppercase tracking-[0.08em] w-fit',
          className
        )}
        {...rest}
      >
        <span className="w-1.5 h-1.5 bg-ink rounded-full shadow-[0_0_8px_var(--ink)] animate-pulse-dot" />
        {children}
      </span>
    )
  }
  return (
    <span
      className={cn(
        'inline-flex items-center border border-rule px-2 py-[2px] text-[11px] uppercase tracking-[0.06em]',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
