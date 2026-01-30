import type { EducationData } from '@/lib/sections'
import { prettyRange } from '@teimurjan/utils'
import { GraduationCap } from 'lucide-react'

interface EducationSectionProps {
  data: EducationData
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Education</h1>

      <div className="space-y-8">
        {data.educations.map((edu, index) => (
          <div key={edu.id}>
            {index > 0 && <hr className="border-border/50 mb-8" />}

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2 min-w-0">
                <h2 className="text-lg font-semibold text-foreground">{edu.school}</h2>

                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {edu.degree ? `${edu.degree} in ` : ''}
                    {edu.areaOfStudy}
                  </span>
                </p>

                <p className="text-sm text-muted-foreground">
                  {prettyRange(edu.startDate, edu.endDate ?? undefined)}
                </p>

                {edu.description && (
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
