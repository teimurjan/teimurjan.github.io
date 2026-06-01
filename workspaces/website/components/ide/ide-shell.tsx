'use client'

import {
  IconClose,
  IconCommand,
  IconFile,
  IconHash,
  IconMenu,
  IconSearch,
} from '@/components/ui/sketch-icons'
import { TagChip } from '@/components/ui/tag-chip'
import { hrefForSection, sectionIdFromPath } from '@/lib/routes'
import type { FolderStructure, Section } from '@/lib/sections'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Palette, type PaletteItem } from './palette'
import { Sidebar } from './sidebar'

interface IDEShellProps {
  folders: FolderStructure[]
  fullName: string
  headline: string
  children: React.ReactNode
}

const STATUS = 'open to collaborations'

function buildLookups(folders: FolderStructure[]) {
  const sectionsById = new Map<string, Section>()
  const pathById = new Map<string, string>()
  for (const folder of folders) {
    for (const section of folder.sections) {
      sectionsById.set(section.id, section)
      pathById.set(section.id, `${folder.name}/${section.filename}`)
    }
  }
  return { sectionsById, pathById }
}

export function IDEShell({ folders, fullName, headline, children }: IDEShellProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { sectionsById, pathById } = useMemo(() => buildLookups(folders), [folders])

  const fallbackId = folders[0]?.sections[0]?.id ?? 'about'
  const activeId = sectionsById.has(sectionIdFromPath(pathname))
    ? sectionIdFromPath(pathname)
    : fallbackId

  const [tabIds, setTabIds] = useState<string[]>([activeId])
  const [openFolders, setOpenFolders] = useState<Set<string>>(
    () => new Set(folders.map((f) => f.name))
  )
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const pathFor = useCallback((id: string) => pathById.get(id) ?? id, [pathById])

  // Accumulate visited sections as open tabs; reset scroll on navigation.
  useEffect(() => {
    setTabIds((prev) => (prev.includes(activeId) ? prev : [...prev, activeId]))
    setMobileSidebarOpen(false)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [activeId])

  const navigate = useCallback((id: string) => router.push(hrefForSection(id)), [router])

  const closeTab = useCallback(
    (id: string) => {
      setTabIds((prev) => {
        const idx = prev.indexOf(id)
        if (idx === -1) return prev
        const next = prev.filter((x) => x !== id)
        if (id === activeId) {
          const fallback = next[idx] ?? next[idx - 1] ?? fallbackId
          navigate(fallback)
        }
        return next.length === 0 ? [fallbackId] : next
      })
    },
    [activeId, fallbackId, navigate]
  )

  const toggleFolder = useCallback((name: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }, [])

  const collapseAll = useCallback(() => setOpenFolders(new Set()), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if ((e.metaKey || e.ctrlKey) && (key === 'k' || key === 'p')) {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setPaletteOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const activePath = pathFor(activeId)
  const tabs = tabIds.map((id) => sectionsById.get(id)).filter((s): s is Section => Boolean(s))

  const paletteItems: PaletteItem[] = useMemo(
    () =>
      Array.from(sectionsById.values()).map((s) => ({
        id: s.id,
        label: s.title,
        path: pathFor(s.id),
      })),
    [sectionsById, pathFor]
  )

  return (
    <div className="grid grid-cols-[280px_1fr] grid-rows-[44px_1fr_28px] h-screen w-screen relative z-[2] max-tablet:grid-cols-1">
      <div className="col-span-full border-b-[1.5px] border-ink flex items-center px-3.5 gap-2.5 bg-paper relative max-tablet:px-2.5 max-tablet:gap-2">
        <button
          type="button"
          aria-label={mobileSidebarOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileSidebarOpen((o) => !o)}
          className="hidden max-tablet:inline-flex items-center justify-center w-8 h-7 border-[1.5px] border-ink bg-paper-3 text-ink cursor-pointer p-0 shadow-stamp transition-[transform,box-shadow] duration-[120ms] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--ink)] absolute top-1 left-1"
        >
          {mobileSidebarOpen ? <IconClose size={16} /> : <IconMenu size={16} />}
        </button>
        <div className="flex gap-2 max-tablet:hidden">
          {(['close', 'minimize', 'maximize'] as const).map((kind) => (
            <div
              key={kind}
              className="w-3.5 h-3.5 border-[1.5px] border-ink rounded-full bg-paper p-0"
            />
          ))}
        </div>
        <div className="flex-1 text-center text-[12px] text-ink-dim tracking-[0.02em] max-tablet:text-[11px] max-tablet:overflow-hidden max-tablet:text-ellipsis max-tablet:whitespace-nowrap">
          <b className="text-ink">teimurjan.dev - </b>
          {activePath}
        </div>
        <div className="flex gap-3.5 text-[12px] text-ink-dim max-tablet:hidden">
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="cursor-pointer px-1 py-0.5 transition-colors bg-transparent border-0 text-inherit font-inherit inline-flex items-center gap-1 hover:text-ink"
          >
            <IconSearch size={11} />
            jump <TagChip className="text-[9px] ml-1">⌘K</TagChip>
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setMobileSidebarOpen(false)}
        className={`fixed inset-0 z-[39] bg-black/50 backdrop-blur-[2px] cursor-pointer border-0 p-0 ${mobileSidebarOpen ? 'block' : 'hidden'}`}
      />

      <Sidebar
        folders={folders}
        fullName={fullName}
        headline={headline}
        status={STATUS}
        activeId={activeId}
        openFolders={openFolders}
        onToggleFolder={toggleFolder}
        onCollapseAll={collapseAll}
        hrefForSection={hrefForSection}
        onOpenPalette={() => setPaletteOpen(true)}
        mobileOpen={mobileSidebarOpen}
      />

      <main className="flex flex-col overflow-hidden bg-paper">
        <div
          className="flex border-b-[1.5px] border-ink bg-paper-2 min-h-9 items-stretch overflow-x-auto no-scrollbar [scrollbar-width:none] max-tablet:hidden"
          role="tablist"
        >
          {tabs.map((s) => {
            const filename = pathFor(s.id).split('/').pop()
            const isActive = s.id === activeId
            return (
              <Link
                key={s.id}
                href={hrefForSection(s.id)}
                role="tab"
                aria-selected={isActive}
                className={cn(
                  'group flex items-center gap-2 px-3.5 text-[12px] border-r border-rule cursor-pointer relative transition-[color,background] duration-150 whitespace-nowrap no-underline max-mobile:px-2.5 max-mobile:text-[11px]',
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
                    e.preventDefault()
                    e.stopPropagation()
                    closeTab(s.id)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      e.stopPropagation()
                      closeTab(s.id)
                    }
                  }}
                  className="w-3.5 h-3.5 grid place-items-center text-ink-faint opacity-0 transition-opacity duration-150 cursor-pointer group-hover:opacity-100 hover:text-ink"
                >
                  <IconClose size={10} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="flex-1 overflow-y-auto relative" ref={scrollRef}>
          {children}
        </div>
      </main>

      <footer className="col-span-full border-t-[1.5px] border-ink bg-paper-2 flex items-center px-3.5 text-[11px] text-ink-faint gap-3.5 overflow-hidden max-tablet:px-2.5 max-tablet:gap-2.5 max-tablet:text-[10px]">
        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          className="flex items-center gap-1.5 cursor-pointer transition-colors bg-transparent border-0 text-inherit font-inherit p-0 hover:text-ink"
        >
          <IconCommand size={11} /> ⌘K to jump
        </button>
        <div className="flex items-center gap-1.5">
          <IconHash size={11} /> {activePath}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1.5 max-tablet:hidden">UTF-8</div>
        <div className="flex items-center gap-1.5 max-tablet:hidden">LF</div>
        <div className="flex items-center gap-1.5 max-tablet:hidden">Markdown</div>
        <div className="flex items-center gap-1.5 max-tablet:hidden">Ln 1, Col 1</div>
      </footer>

      <Palette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        items={paletteItems}
        onPick={(id) => {
          navigate(id)
          setPaletteOpen(false)
        }}
      />
    </div>
  )
}
