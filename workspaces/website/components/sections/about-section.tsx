import { AvatarBox } from '@/components/ui/avatar-box'
import { Bold } from '@/components/ui/bold'
import { Button } from '@/components/ui/button'
import { CopyButton } from '@/components/ui/copy-button'
import { FadeIn } from '@/components/ui/fade-in'
import {
  IconCalendar,
  IconDownload,
  IconGitHub,
  IconLink,
  IconLinkedIn,
  IconMail,
} from '@/components/ui/sketch-icons'
import { TagChip } from '@/components/ui/tag-chip'
import type { AboutData, ContactData } from '@/lib/sections'
import Image from 'next/image'

interface AboutSectionProps {
  data: AboutData & ContactData
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <FadeIn>
      <div className="border-[1.5px] border-ink shadow-hard bg-paper-3 p-[26px] mb-7 grid grid-cols-[140px_1fr] gap-[26px] items-center relative max-tablet:grid-cols-1 max-tablet:p-5 max-tablet:gap-[18px] max-tablet:text-center max-mobile:p-4">
        <AvatarBox size="xl" bg="paper-2" className="max-tablet:mx-auto">
          <Image
            src="/logo.png"
            alt={data.fullName}
            width={140}
            height={140}
            className="w-full h-full object-contain"
          />
        </AvatarBox>
        <div>
          <h1 className="m-0 mb-1 text-[28px] tracking-[-0.01em] max-tablet:text-2xl">
            {data.fullName}
          </h1>
          <div className="text-ink-dim text-[13px] mb-3.5 flex flex-wrap gap-2 items-center max-tablet:justify-center">
            <TagChip>{data.headline}</TagChip>
            <TagChip>{data.location}</TagChip>
            <TagChip>open to collaborations</TagChip>
          </div>
          <p className="text-ink-dim text-[14px] leading-relaxed [&>b]:text-ink [&>b]:font-semibold">
            <Bold text={data.about} />
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-5 max-tablet:flex-wrap">
        <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <IconDownload size={14} /> Download CV
        </Button>
        <CopyButton text={data.cvMarkdown} label="Copy CV" ariaLabel="Copy CV as markdown" />
        <Button
          as="a"
          variant="ghost"
          href="https://adplist.org/mentors/teimur-gasanov?session=70480-mentorship-session"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconCalendar size={14} /> Book a session
        </Button>
      </div>

      <div className="note-with-arrow">always open for a good conversation</div>

      <p className="mt-[18px]">
        I&apos;m always interested in hearing about new projects and opportunities.
        <br />
        Feel free to reach out to me via:
      </p>

      <div className="flex flex-wrap gap-2.5 mt-3.5 max-tablet:gap-2">
        <Button as="a" variant="ghost" href={`mailto:${data.email}`}>
          <IconMail size={14} /> Email
        </Button>
        <Button
          as="a"
          variant="ghost"
          href="https://github.com/teimurjan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitHub size={14} /> GitHub
        </Button>
        <Button
          as="a"
          variant="ghost"
          href="https://www.linkedin.com/in/teimur-gasanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLinkedIn size={14} /> LinkedIn
        </Button>
        <Button
          as="a"
          variant="ghost"
          href="https://www.toptal.com/resume/teimur-gasanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink size={14} /> Toptal
        </Button>
      </div>
    </FadeIn>
  )
}
