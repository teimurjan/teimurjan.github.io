import { SkeletonImage } from '@/components/ui/skeleton-image'
import type { SkillsData } from '@/lib/sections'
import { SectionHeader } from './section-header'

interface SkillsSectionProps {
  data: SkillsData
  markdown: string
}

export function SkillsSection({ data, markdown }: SkillsSectionProps) {
  return (
    <div className="space-y-6">
      <SectionHeader title="Skills" markdown={markdown} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3">
        {data.skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-3">
            <SkeletonImage
              src={skill.logoUrl}
              alt={`${skill.title} logo`}
              width={24}
              height={24}
              className="shrink-0 rounded"
            />
            <span className="font-medium text-foreground truncate">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
