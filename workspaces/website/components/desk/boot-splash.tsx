import { AvatarBox } from '@/components/ui/avatar-box'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface BootSplashProps {
  siteName: string
  isVisible: boolean
}

export function BootSplash({ siteName, isVisible }: BootSplashProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'boot-splash absolute inset-0 z-[60] grid place-content-center justify-items-center gap-7 bg-paper transition-opacity duration-500',
        !isVisible && 'opacity-0 pointer-events-none'
      )}
    >
      <AvatarBox size="xl" shadow={false} className="shadow-hard">
        <Image
          src="/logo.png"
          alt=""
          width={140}
          height={140}
          priority
          className="w-full h-full object-contain"
        />
      </AvatarBox>
      <div className="doc-title-underline relative text-[26px] font-bold tracking-[-0.01em]">
        {siteName}
      </div>
      <div className="mt-2 h-3 w-56 border-[1.5px] border-ink p-[2px]">
        <div className="boot-meter h-full origin-left scale-x-0 bg-ink" />
      </div>
    </div>
  )
}
