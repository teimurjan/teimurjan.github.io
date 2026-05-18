import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const ROW_CLS =
  'grid grid-cols-[140px_1fr] gap-[18px] py-4 border-b border-dashed border-rule no-underline text-inherit w-full text-left bg-transparent font-inherit transition-transform duration-150 last:border-b-0 max-tablet:grid-cols-1 max-tablet:gap-3'

const THUMB_CLS =
  'aspect-video border-[1.5px] border-ink bg-paper-3 overflow-hidden relative shadow-stamp grid place-items-center text-ink-dim text-[10px] uppercase tracking-[0.1em] max-tablet:max-w-full'

interface MediaRowProps {
  thumb: ReactNode
  title: ReactNode
  meta: ReactNode
  href?: string
}

export function MediaRow({ thumb, title, meta, href }: MediaRowProps) {
  const body = (
    <>
      <div className={THUMB_CLS}>{thumb}</div>
      <div>
        <h3 className="text-[15px] font-semibold leading-[1.4] m-0 mb-1.5">{title}</h3>
        <div className="text-[11px] text-ink-faint uppercase tracking-[0.1em]">{meta}</div>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(ROW_CLS, 'cursor-pointer hover:translate-x-1')}
      >
        {body}
      </a>
    )
  }

  return <div className={cn(ROW_CLS, 'cursor-default')}>{body}</div>
}

export { THUMB_CLS as mediaThumbClasses }
