import { AvatarBox } from '@/components/ui/avatar-box'
import { FadeIn } from '@/components/ui/fade-in'
import type { SkillsData } from '@/lib/sections'
import Image from 'next/image'

interface SkillsSectionProps {
  data: SkillsData
}

function getMark(title: string) {
  const words = title.trim().split(/\s+/)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return title.slice(0, 2).toUpperCase()
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <FadeIn className="grid grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 gap-3">
      {data.skills.map((skill) => (
        <div
          key={skill.id}
          className="border-[1.5px] border-ink bg-paper-2 p-3.5 flex items-center gap-2.5 shadow-stamp cursor-default transition-[transform,box-shadow] duration-150 relative hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--ink)] hover:rotate-[-1deg] odd:hover:rotate-[1deg]"
        >
          <AvatarBox size="sm" shadow={false} className="text-[11px] font-bold">
            {skill.logoUrl ? (
              <Image
                src={skill.logoUrl}
                alt={`${skill.title} logo`}
                width={28}
                height={28}
                unoptimized
                className="w-full h-full object-contain p-[3px]"
              />
            ) : (
              getMark(skill.title)
            )}
          </AvatarBox>
          <div className="text-[13px] font-medium">{skill.title}</div>
        </div>
      ))}
    </FadeIn>
  )
}
