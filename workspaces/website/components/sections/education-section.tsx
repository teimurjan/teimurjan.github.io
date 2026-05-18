import { AvatarBox } from '@/components/ui/avatar-box'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { IconCap } from '@/components/ui/sketch-icons'
import type { EducationData } from '@/lib/sections'
import { prettyRange } from '@teimurjan/utils'

interface EducationSectionProps {
  data: EducationData
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <FadeIn>
      {data.educations.map((edu) => {
        const degreeLine = edu.degree ? `${edu.degree} in ${edu.areaOfStudy}` : edu.areaOfStudy
        return (
          <Card key={edu.id} className="p-5 max-tablet:p-3.5">
            <div className="grid grid-cols-[56px_1fr] gap-4 items-start max-tablet:grid-cols-[44px_1fr] max-tablet:gap-3">
              <AvatarBox size="lg">
                <IconCap size={26} />
              </AvatarBox>
              <div>
                <h3 className="text-[17px] font-semibold m-0 max-tablet:text-[15px]">
                  {edu.school}
                </h3>
                <div className="mt-1 text-[12px] text-ink-dim flex flex-wrap gap-2 items-center max-tablet:text-[11px] max-tablet:gap-1.5 max-mobile:flex-col max-mobile:items-start max-mobile:gap-0.5">
                  <b className="text-ink font-semibold">{degreeLine}</b>
                  <span className="text-ink-faint max-mobile:hidden">|</span>
                  <span>{prettyRange(edu.startDate, edu.endDate ?? undefined)}</span>
                </div>
                {edu.bullets.length > 0 && (
                  <ul className="bullets">
                    {edu.bullets.map((b, k) => {
                      const key = `${edu.id}-${k}`
                      return <li key={key}>{b}</li>
                    })}
                  </ul>
                )}
                {edu.bullets.length === 0 && edu.description && (
                  <p className="mt-3">{edu.description}</p>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </FadeIn>
  )
}
