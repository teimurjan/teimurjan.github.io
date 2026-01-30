'use client'

import { SectionRenderer } from '@/components/sections'
import type { Section } from '@/lib/sections'
import { cn } from '@/lib/utils'

interface EditorProps {
  section: Section
}

export function Editor({ section }: EditorProps) {
  return (
    <div className="flex-1 flex flex-col min-w-0 gap-2 max-h-full">
      <div
        className={cn(
          'bg-glass border border-glass-border rounded-2xl shadow-glass backdrop-blur-[40px] backdrop-saturate-150',
          'flex-1 flex flex-col min-w-0 overflow-auto'
        )}
      >
        <div className="flex-1 p-4 sm:p-6">
          <SectionRenderer section={section} />
        </div>
      </div>
    </div>
  )
}
