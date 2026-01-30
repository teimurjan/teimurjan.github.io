import type { ExperienceData } from '@/lib/sections'
import { prettyRange } from '@teimurjan/utils'
import Image from 'next/image'

interface ExperienceSectionProps {
  data: ExperienceData
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Experience</h1>

      <div className="space-y-4">
        {data.experiences.map((exp, index) => (
          <div key={exp.id}>
            {index > 0 && <hr className="border-border/50 mb-8" />}

            <div className="flex gap-4">
              <div className="shrink-0">
                <Image
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-lg bg-secondary"
                />
              </div>

              <div className="space-y-2 min-w-0">
                <h2 className="text-lg font-semibold text-foreground">{exp.position}</h2>

                <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                  <span>|</span>
                  <span>{prettyRange(exp.startDate, exp.endDate ?? undefined)}</span>
                </div>

                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
