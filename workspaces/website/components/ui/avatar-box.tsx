import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const SIZE_CLASSES: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-7 h-7',
  md: 'w-12 h-12 max-tablet:w-11 max-tablet:h-11',
  lg: 'w-14 h-14 max-tablet:w-11 max-tablet:h-11',
  xl: 'w-[140px] h-[140px] max-tablet:w-[120px] max-tablet:h-[120px] max-mobile:w-24 max-mobile:h-24',
}

interface AvatarBoxProps extends ComponentPropsWithoutRef<'div'> {
  size?: AvatarSize
  shadow?: boolean
  bg?: 'paper-2' | 'paper-3'
}

export function AvatarBox({
  size = 'md',
  shadow = true,
  bg = 'paper-3',
  className,
  ...rest
}: AvatarBoxProps) {
  return (
    <div
      className={cn(
        'border-[1.5px] border-ink grid place-items-center overflow-hidden shrink-0',
        SIZE_CLASSES[size],
        bg === 'paper-2' ? 'bg-paper-2' : 'bg-paper-3',
        shadow && 'shadow-stamp',
        className
      )}
      {...rest}
    />
  )
}
