'use client'

import type { FolderStructure, Section } from '@/lib/sections'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  ChevronRight,
  FileDown,
  FileText,
  Folder,
  ChevronLeft,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

interface SidebarProps {
  folders: FolderStructure[]
  headline: string
  activeSection: Section
  onSectionChange: (section: Section) => void
  fullName: string
}

export function Sidebar({
  folders,
  headline,
  activeSection,
  onSectionChange,
  fullName,
}: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(folders.map((f) => f.name))
  )
  const [isOpen, setIsOpen] = useState(false)

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(folderName)) {
        next.delete(folderName)
      } else {
        next.add(folderName)
      }
      return next
    })
  }

  const handleSectionChange = useCallback(
    (section: Section) => {
      onSectionChange(section)
      setIsOpen(false)
    },
    [onSectionChange]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const sidebarContent = (
    <>
      <div className="p-4 flex items-center gap-3 border-b border-border/30">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <div className="flex-1 min-w-0">
          <h1 className="text-foreground font-semibold text-sm">{fullName}</h1>
          <p className="text-muted-foreground text-xs">{headline}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="sm:hidden p-1.5 rounded-md hover:bg-secondary/50 transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
          Explorer
        </div>

        <div className="space-y-1">
          {folders.map((folder) => (
            <div key={folder.name}>
              <button
                type="button"
                onClick={() => toggleFolder(folder.name)}
                className="flex items-center gap-2 w-full px-2 py-1.5 rounded-md hover:bg-secondary/50 transition-colors text-sm text-muted-foreground"
              >
                {expandedFolders.has(folder.name) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <Folder className="w-4 h-4" />
                <span>{folder.name}</span>
              </button>

              {expandedFolders.has(folder.name) && (
                <div className="ml-8 mt-1 space-y-0.5">
                  {folder.sections.map((section) => (
                    <button
                      type="button"
                      key={section.id}
                      onClick={() => handleSectionChange(section)}
                      className={cn(
                        'flex items-center gap-2 w-full px-2 py-1.5 rounded-md transition-all text-sm',
                        activeSection.id === section.id
                          ? 'bg-secondary/60 text-foreground'
                          : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground'
                      )}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="truncate">{section.filename}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-8 mt-2"
          >
            <FileDown className="w-4 h-4" />
            <span>resume.pdf</span>
          </a>
        </div>
      </div>
    </>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="sm:hidden absolute top-7 right-6 z-30 p-2.5 bg-glass border border-glass-border rounded-lg shadow-glass-pill backdrop-blur-[40px] backdrop-saturate-150 hover:bg-secondary/50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          'bg-glass border border-glass-border shadow-glass backdrop-blur-[40px] backdrop-saturate-150 flex flex-col shrink-0',
          'fixed inset-y-0 right-0 z-50 w-72 rounded-r-2xl transition-transform duration-300 ease-out',
          'sm:relative sm:inset-auto sm:z-auto sm:rounded-2xl sm:translate-x-0 sm:w-72',
          isOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
