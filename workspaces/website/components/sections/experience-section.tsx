import { AvatarBox } from '@/components/ui/avatar-box'
import { Bold } from '@/components/ui/bold'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import type { ExperienceData } from '@/lib/sections'
import { prettyRange } from '@teimurjan/utils'
import Image from 'next/image'

interface ExperienceSectionProps {
  data: ExperienceData
}

function getMark(company: string) {
  const trimmed = company.trim()
  return trimmed.length > 0 ? trimmed.charAt(0).toUpperCase() : '?'
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <FadeIn>
      {data.experiences.map((exp, i) => {
        const bullets = exp.bullets.length > 0 ? exp.bullets : [exp.description]
        return (
          <Card key={exp.id} tilt={i % 2 === 1 ? 'r' : 'l'}>
            <div className="grid grid-cols-[56px_1fr] gap-4 items-start max-tablet:grid-cols-[44px_1fr] max-tablet:gap-3">
              <AvatarBox size="lg" className="text-[18px] font-bold max-tablet:text-base">
                {exp.logoUrl ? (
                  <Image
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    width={56}
                    height={56}
                    unoptimized
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  getMark(exp.company)
                )}
              </AvatarBox>
              <div>
                <h3 className="text-[17px] font-semibold m-0 max-tablet:text-[15px]">
                  {exp.position}
                </h3>
                <div className="mt-1 text-[12px] text-ink-dim flex flex-wrap gap-2 items-center max-tablet:text-[11px] max-tablet:gap-1.5 max-mobile:flex-col max-mobile:items-start max-mobile:gap-0.5">
                  <b className="text-ink font-semibold">{exp.company}</b>
                  {exp.location && (
                    <>
                      <span className="text-ink-faint max-mobile:hidden">·</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                  <span className="text-ink-faint max-mobile:hidden">|</span>
                  <span>{prettyRange(exp.startDate, exp.endDate ?? undefined)}</span>
                </div>
                <ul className="bullets">
                  {bullets.map((b, k) => {
                    const key = `${exp.id}-${k}`
                    return (
                      <li key={key}>
                        <Bold text={b} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Card>
        )
      })}
    </FadeIn>
  )
}
