'use client'

import { SectionRenderer } from '@/components/sections'
import { CopyButton } from '@/components/ui/copy-button'
import { IconClose, IconFile } from '@/components/ui/sketch-icons'
import type { Section } from '@/lib/sections'
import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

interface EditorProps {
  tabs: Section[]
  activeSection: Section
  pathFor: (id: string) => string
  onActivate: (id: string) => void
  onClose: (id: string) => void
}

export function Editor({ tabs, activeSection, pathFor, onActivate, onClose }: EditorProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [])

  return (
    <main className="flex flex-col overflow-hidden bg-paper">
      <div
        className="flex border-b-[1.5px] border-ink bg-paper-2 min-h-9 items-stretch overflow-x-auto no-scrollbar [scrollbar-width:none] max-tablet:hidden"
        role="tablist"
      >
        {tabs.map((s) => {
          const path = pathFor(s.id)
          const filename = path.split('/').pop()
          const isActive = s.id === activeSection.id
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onActivate(s.id)}
              className={cn(
                'group flex items-center gap-2 px-3.5 text-[12px] border-r border-rule cursor-pointer relative transition-[color,background] duration-150 whitespace-nowrap bg-transparent border-t-0 border-b-0 border-l-0 font-inherit max-mobile:px-2.5 max-mobile:text-[11px]',
                isActive
                  ? 'text-ink bg-paper before:content-[""] before:absolute before:top-[-1px] before:left-0 before:right-0 before:h-0.5 before:bg-ink after:content-[""] after:absolute after:-bottom-[1.5px] after:left-0 after:right-0 after:h-0.5 after:bg-paper'
                  : 'text-ink-dim hover:text-ink hover:bg-paper-3'
              )}
            >
              <IconFile size={11} />
              <span>{filename}</span>
              <span
                role="button"
                tabIndex={-1}
                aria-label={`Close ${filename}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onClose(s.id)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation()
                    onClose(s.id)
                  }
                }}
                className="w-3.5 h-3.5 grid place-items-center text-ink-faint opacity-0 transition-opacity duration-150 cursor-pointer group-hover:opacity-100 hover:text-ink"
              >
                <IconClose size={10} />
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex-1 overflow-y-auto relative" ref={contentRef}>
        <div className="doc max-w-[880px] pt-9 px-14 pb-20 mx-auto relative max-tablet:pt-6 max-tablet:px-[18px] max-tablet:pb-[60px] max-tablet:max-w-full max-mobile:pt-5 max-mobile:px-3.5">
          <div className="flex items-start justify-between mb-9 gap-6 relative max-tablet:flex-col max-tablet:gap-3.5 max-tablet:mb-6">
            <div className="relative">
              <h2 className="doc-title-underline text-[32px] font-bold tracking-[-0.01em] m-0 mb-1.5 relative inline-block max-tablet:text-[26px] max-mobile:text-[22px]">
                {activeSection.title}
              </h2>
            </div>
            <div className="flex gap-2 max-tablet:flex-wrap">
              <CopyButton
                text={activeSection.markdown}
                label="Copy"
                ariaLabel={`Copy ${activeSection.title} as markdown`}
              />
            </div>
          </div>

          <hr className="sketch-hr" />

          <SectionRenderer key={activeSection.id} section={activeSection} />
        </div>
      </div>
    </main>
  )
}
