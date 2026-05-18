import type { ReactNode } from 'react'

interface SectionHeadProps {
  label: ReactNode
  count?: ReactNode
}

export function SectionHead({ label, count }: SectionHeadProps) {
  return (
    <div className="flex items-baseline gap-2 mt-[22px] mb-3 first:mt-0 text-[11px] uppercase tracking-[0.18em] text-ink-faint">
      <span>{label}</span>
      <span className="flex-1 h-px bg-rule" />
      {count !== undefined && <span>{count}</span>}
    </div>
  )
}
