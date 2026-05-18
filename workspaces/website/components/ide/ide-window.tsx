'use client'

import {
  IconClose,
  IconCommand,
  IconHash,
  IconMenu,
  IconSearch,
} from '@/components/ui/sketch-icons'
import { TagChip } from '@/components/ui/tag-chip'
import type { FolderStructure, Section } from '@/lib/sections'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Editor } from './editor'
import { Palette, type PaletteItem } from './palette'
import { Sidebar } from './sidebar'

interface IDEWindowProps {
  folders: FolderStructure[]
  fullName: string
  headline: string
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

export function IDEWindow({ folders, fullName, headline }: IDEWindowProps) {
  const { sectionsById, pathById } = useMemo(() => buildLookups(folders), [folders])

  const initialId = folders[0]?.sections[0]?.id ?? 'about'
  const [activeId, setActiveId] = useState<string>(initialId)
  const [tabIds, setTabIds] = useState<string[]>([initialId])
  const [openFolders, setOpenFolders] = useState<Set<string>>(
    () => new Set(folders.map((f) => f.name))
  )
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const pathFor = useCallback((id: string) => pathById.get(id) ?? id, [pathById])

  const openSection = useCallback((id: string) => {
    setTabIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setActiveId(id)
  }, [])

  const openFile = useCallback(
    (section: Section) => {
      openSection(section.id)
      setMobileSidebarOpen(false)
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${section.id}`)
      }
    },
    [openSection]
  )

  const closeTab = useCallback(
    (id: string) => {
      setTabIds((prev) => {
        const idx = prev.indexOf(id)
        if (idx === -1) return prev
        const next = prev.filter((x) => x !== id)
        if (next.length === 0) {
          setActiveId(initialId)
          return [initialId]
        }
        if (id === activeId) {
          const fallback = next[idx] ?? next[idx - 1] ?? next[0]
          setActiveId(fallback)
        }
        return next
      })
    },
    [activeId, initialId]
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
    const onHash = () => {
      const hash = window.location.hash.slice(1)
      if (hash && sectionsById.has(hash)) openSection(hash)
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [sectionsById, openSection])

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

  const activeSection = sectionsById.get(activeId) ?? folders[0].sections[0]
  const activePath = pathFor(activeSection.id)
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
            <button
              key={kind}
              type="button"
              aria-label={kind}
              className="w-3.5 h-3.5 border-[1.5px] border-ink rounded-full bg-paper cursor-pointer p-0 transition-[transform,background] duration-150 hover:scale-[1.1] hover:rotate-[-6deg] hover:bg-ink"
            />
          ))}
        </div>
        <div className="flex-1 text-center text-[12px] text-ink-dim tracking-[0.02em] max-tablet:text-[11px] max-tablet:overflow-hidden max-tablet:text-ellipsis max-tablet:whitespace-nowrap">
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
        activeId={activeSection.id}
        openFolders={openFolders}
        onToggleFolder={toggleFolder}
        onCollapseAll={collapseAll}
        onOpenFile={openFile}
        onOpenPalette={() => setPaletteOpen(true)}
        mobileOpen={mobileSidebarOpen}
      />

      <Editor
        tabs={tabs}
        activeSection={activeSection}
        pathFor={pathFor}
        onActivate={(id) => {
          setActiveId(id)
          if (typeof window !== 'undefined') window.history.replaceState(null, '', `#${id}`)
        }}
        onClose={closeTab}
      />

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
        onPick={openSection}
      />
    </div>
  )
}
