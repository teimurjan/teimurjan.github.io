'use client'

import { IconFile, IconSearch } from '@/components/ui/sketch-icons'
import { TagChip } from '@/components/ui/tag-chip'
import { cn } from '@/lib/utils'
import { useEffect, useMemo, useRef, useState } from 'react'

export interface PaletteItem {
  id: string
  label: string
  path: string
}

interface PaletteProps {
  open: boolean
  onClose: () => void
  items: PaletteItem[]
  onPick: (id: string) => void
}

export function Palette({ open, onClose, items, onPick }: PaletteProps) {
  const [query, setQuery] = useState('')
  const [highlight, setHighlight] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    if (!query) return items
    const q = query.toLowerCase()
    return items.filter((i) => (i.label + i.path).toLowerCase().includes(q))
  }, [query, items])

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 30)
    setQuery('')
    setHighlight(0)
    return () => clearTimeout(t)
  }, [open])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      role="presentation"
      className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-50 grid place-items-start justify-items-center pt-[15vh] max-tablet:pt-[8vh]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Jump to file"
        className="bg-paper-2 border-[1.5px] border-ink shadow-[8px_8px_0_var(--ink)] w-[min(520px,92vw)]"
      >
        <div className="flex items-center gap-2 px-3.5 py-3 border-b-[1.5px] border-ink">
          <IconSearch size={14} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setHighlight(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose()
              else if (e.key === 'ArrowDown') {
                e.preventDefault()
                setHighlight((h) => Math.min(h + 1, filtered.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setHighlight((h) => Math.max(h - 1, 0))
              } else if (e.key === 'Enter' && filtered[highlight]) {
                onPick(filtered[highlight].id)
                onClose()
              }
            }}
            placeholder="Jump to file…"
            className="flex-1 bg-transparent border-0 outline-none text-ink font-mono text-sm"
          />
          <TagChip className="text-[10px]">ESC</TagChip>
        </div>
        <div className="max-h-[320px] overflow-y-auto">
          {filtered.map((f, i) => {
            const active = i === highlight
            return (
              <button
                key={f.id}
                type="button"
                onMouseEnter={() => setHighlight(i)}
                onClick={() => {
                  onPick(f.id)
                  onClose()
                }}
                className={cn(
                  'flex items-center gap-2.5 px-3.5 py-2.5 cursor-pointer border-l-2 bg-transparent w-full text-left text-inherit font-inherit',
                  active ? 'bg-highlight border-l-ink' : 'border-l-transparent'
                )}
              >
                <IconFile size={13} />
                <span className="flex-1 text-[13px]">{f.label}</span>
                <span className="text-ink-faint text-[11px]">{f.path}</span>
              </button>
            )
          })}
          {filtered.length === 0 && (
            <div className="p-5 text-center text-ink-faint text-[12px]">
              <span className="font-hand text-[18px] text-ink-dim rotate-[-2deg] inline-block">
                nothing here…
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
