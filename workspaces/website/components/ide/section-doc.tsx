import { SectionRenderer } from '@/components/sections'
import { CopyButton } from '@/components/ui/copy-button'
import type { Section } from '@/lib/sections'

interface SectionDocProps {
  section: Section
}

export function SectionDoc({ section }: SectionDocProps) {
  return (
    <div className="doc max-w-[880px] pt-9 px-14 pb-20 mx-auto relative max-tablet:pt-6 max-tablet:px-[18px] max-tablet:pb-[60px] max-tablet:max-w-full max-mobile:pt-5 max-mobile:px-3.5">
      <div className="flex items-start justify-between mb-9 gap-6 relative max-tablet:flex-col max-tablet:gap-3.5 max-tablet:mb-6">
        <div className="relative">
          <h1 className="doc-title-underline text-[32px] font-bold tracking-[-0.01em] m-0 mb-1.5 relative inline-block max-tablet:text-[26px] max-mobile:text-[22px]">
            {section.title}
          </h1>
        </div>
        <div className="flex gap-2 max-tablet:flex-wrap">
          <CopyButton
            text={section.markdown}
            label="Copy"
            ariaLabel={`Copy ${section.title} as markdown`}
          />
        </div>
      </div>

      <hr className="sketch-hr" />

      <SectionRenderer section={section} />
    </div>
  )
}
