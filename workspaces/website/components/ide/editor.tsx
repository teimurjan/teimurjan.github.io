'use client'

import { SectionRenderer } from '@/components/sections'
import type { Section } from '@/lib/sections'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

interface EditorProps {
  section: Section
}

export function Editor({ section }: EditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [displayedSection, setDisplayedSection] = useState(section)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    // Hide overflow during animation to prevent scrollbars
    container.style.overflow = 'hidden'

    gsap.to(content, {
      opacity: 0,
      scale: 0.98,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        // Scroll to top before showing new content
        container.scrollTop = 0
        setDisplayedSection(section)

        gsap.fromTo(
          content,
          { opacity: 0, scale: 1.02 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              container.style.overflow = 'auto'
            },
          }
        )
      },
    })
  }, [section])

  return (
    <div className="flex-1 flex flex-col min-w-0 gap-2 max-h-full">
      <div
        ref={containerRef}
        className={cn(
          'bg-glass border border-glass-border rounded-2xl shadow-glass backdrop-blur-[40px] backdrop-saturate-150',
          'flex-1 flex flex-col min-w-0 overflow-auto'
        )}
      >
        <div ref={contentRef} className="flex-1 p-4 sm:p-6 origin-center">
          <SectionRenderer section={displayedSection} />
        </div>
      </div>
    </div>
  )
}
