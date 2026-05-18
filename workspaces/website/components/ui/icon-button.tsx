import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export function IconButton({ className, ...rest }: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type="button"
      className={cn(
        'w-[18px] h-[18px] grid place-items-center text-ink-faint cursor-pointer bg-transparent border-0 p-0 transition-[color,transform] duration-150',
        'hover:text-ink hover:scale-[1.15] hover:rotate-[-4deg]',
        className
      )}
      {...rest}
    />
  )
}
