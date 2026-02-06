import { SkeletonImage } from '@/components/ui/skeleton-image'
import type { SkillsData } from '@/lib/sections'

interface SkillsSectionProps {
  data: SkillsData
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Skills</h1>

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
