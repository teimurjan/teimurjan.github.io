'use client'

import type { FolderStructure, Section } from '@/lib/sections'
import { useEffect, useState } from 'react'
import { Editor } from './editor'
import { Sidebar } from './sidebar'
import { Terminal } from './terminal'

interface IDEWindowProps {
  folders: FolderStructure[]
  fullName: string
  headline: string
}

function findSectionById(folders: FolderStructure[], id: string): Section | undefined {
  for (const folder of folders) {
    const section = folder.sections.find((s) => s.id === id)
    if (section) return section
  }
  return undefined
}

export function IDEWindow({ folders, fullName, headline }: IDEWindowProps) {
  const [activeSection, setActiveSection] = useState<Section>(folders[0].sections[0])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const section = findSectionById(folders, hash)
      if (section) setActiveSection(section)
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1)
      if (newHash) {
        const section = findSectionById(folders, newHash)
        if (section) setActiveSection(section)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [folders])

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    window.history.replaceState(null, '', `#${section.id}`)
  }

  return (
    <div className="relative sm:bg-glass sm:border border-glass-border rounded-2xl sm:shadow-glass overflow-hidden flex flex-col w-full max-w-6xl h-[100vh] sm:h-[85vh] sm:max-h-[900px] p-4 sm:p8 gap-2">
      <div className="flex flex-1 min-h-0 gap-2">
        <Sidebar
          folders={folders}
          headline={headline}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          fullName={fullName}
        />

        <Editor section={activeSection} />
      </div>

      <Terminal folders={folders} fullName={fullName} />
    </div>
  )
}
