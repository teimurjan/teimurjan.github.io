'use client'

import { IconButton } from '@/components/ui/icon-button'
import {
  IconChev,
  IconCollapse,
  IconFile,
  IconFolder,
  IconSearch,
} from '@/components/ui/sketch-icons'
import { TagChip } from '@/components/ui/tag-chip'
import type { FolderStructure } from '@/lib/sections'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface SidebarProps {
  folders: FolderStructure[]
  fullName: string
  headline: string
  status: string
  activeId: string
  openFolders: Set<string>
  onToggleFolder: (name: string) => void
  onCollapseAll: () => void
  hrefForSection: (id: string) => string
  onOpenPalette: () => void
  mobileOpen: boolean
}

const TREE_ITEM_BASE =
  'flex items-center gap-1.5 px-2 py-1 text-[13px] cursor-pointer select-none relative bg-transparent border-0 w-full text-left font-inherit transition-colors duration-[120ms]'

export function Sidebar({
  folders,
  fullName,
  headline,
  status,
  activeId,
  openFolders,
  onToggleFolder,
  onCollapseAll,
  hrefForSection,
  onOpenPalette,
  mobileOpen,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'border-r-[1.5px] border-ink flex flex-col bg-paper-2 overflow-hidden',
        'max-tablet:fixed max-tablet:top-0 max-tablet:bottom-0 max-tablet:left-0 max-tablet:w-[min(300px,88vw)] max-tablet:z-40 max-tablet:shadow-[8px_0_0_rgba(0,0,0,0.4)] max-tablet:transition-transform max-tablet:duration-[220ms] max-tablet:ease-out',
        mobileOpen ? 'max-tablet:translate-x-0' : 'max-tablet:-translate-x-[105%]'
      )}
    >
      <div className="pt-[22px] px-[18px] pb-[18px] border-b-[1.5px] border-ink flex flex-col gap-3 relative">
        <div className="flex gap-3 items-center">
          <button
            type="button"
            aria-label={fullName}
            className="w-12 h-12 border-[1.5px] border-ink bg-paper-3 grid place-items-center shadow-stamp transition-transform duration-200 cursor-pointer shrink-0 overflow-hidden p-0 hover:rotate-[-4deg] hover:scale-[1.05]"
          >
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </button>
          <div>
            <div className="text-sm font-semibold tracking-[0.01em]">{fullName}</div>
            <div className="text-[11px] text-ink-dim mt-0.5">{headline}</div>
          </div>
        </div>
        <TagChip pulse>{status}</TagChip>
      </div>

      <div className="flex-1 px-2 py-3.5 overflow-y-auto">
        <div className="flex items-center justify-between text-[10px] text-ink-faint uppercase tracking-[0.18em] pt-1.5 px-2.5 pb-2.5">
          <span>Explorer</span>
          <div className="flex gap-1">
            <IconButton title="search" onClick={onOpenPalette}>
              <IconSearch size={12} />
            </IconButton>
            <IconButton title="collapse all" onClick={onCollapseAll}>
              <IconCollapse size={12} />
            </IconButton>
          </div>
        </div>

        {folders.map((folder) => {
          const isOpen = openFolders.has(folder.name)
          return (
            <div key={folder.name}>
              <button
                type="button"
                onClick={() => onToggleFolder(folder.name)}
                className={cn(TREE_ITEM_BASE, 'text-ink-dim font-medium hover:text-ink')}
              >
                <span
                  className={cn(
                    'w-3 inline-grid place-items-center text-ink-faint transition-transform duration-[180ms]',
                    isOpen && 'rotate-90'
                  )}
                >
                  <IconChev size={10} />
                </span>
                <IconFolder size={14} className="shrink-0 opacity-90" />
                <span>{folder.name}</span>
              </button>
              <div className={cn('flex flex-col pl-[18px]', !isOpen && 'hidden')}>
                {folder.sections.map((section) => {
                  const isActive = activeId === section.id
                  return (
                    <Link
                      key={section.id}
                      href={hrefForSection(section.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        TREE_ITEM_BASE,
                        'no-underline hover:text-ink',
                        isActive
                          ? 'text-ink bg-highlight before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[70%] before:bg-ink'
                          : 'text-ink-dim'
                      )}
                    >
                      <span className="w-3" />
                      <IconFile size={14} className="shrink-0 opacity-90" />
                      <span>{section.filename}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
