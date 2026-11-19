import { Bold } from '@/components/ui/bold'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import {
  IconCalendar,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from '@/components/ui/sketch-icons'
import { abbreviateHeadline } from '@/lib/headline'
import { PROFILE_LINKS, RESUME_PATH } from '@/lib/links'
import type { AboutData, ContactData } from '@/lib/sections'
import type { ComponentType } from 'react'

interface AboutSectionProps {
  data: AboutData & ContactData
}

interface ContactLink {
  label: string
  href: string
  Icon: ComponentType<{ size?: number }>
}

const contactLinksFor = (email: string): ContactLink[] => [
  { label: 'Email', href: `mailto:${email}`, Icon: IconMail },
  { label: PROFILE_LINKS.github.label, href: PROFILE_LINKS.github.url, Icon: IconGitHub },
  { label: PROFILE_LINKS.linkedin.label, href: PROFILE_LINKS.linkedin.url, Icon: IconLinkedIn },
]

const isExternal = (href: string) => href.startsWith('http')

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <FadeIn>
      <h1 className="doc-title-underline text-[28px] font-bold tracking-[-0.01em] m-0 relative inline-block max-tablet:text-2xl">
        {data.fullName}
      </h1>
      <div className="mt-4 text-[13px] text-ink-dim">
        {abbreviateHeadline(data.headline)}
        <span aria-hidden="true" className="mx-2">
          ·
        </span>
        {data.location}
      </div>

      <div className="mt-7 max-w-[58ch] text-base leading-[1.75] text-ink-dim [&>b]:text-ink [&>b]:font-semibold max-tablet:text-[15px]">
        <Bold text={data.about} />
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <Button as="a" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          <IconDownload size={14} /> Download CV
        </Button>
        <Button
          as="a"
          variant="ghost"
          href={PROFILE_LINKS.mentorship.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconCalendar size={14} /> Book a session
        </Button>
      </div>

      <div className="pt-6">
        <div className="note-with-arrow">always open for a good conversation</div>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 m-0 mt-3 p-0 list-none">
        {contactLinksFor(data.email).map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...(isExternal(href) && { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex items-center gap-1.5 text-[13px] text-ink-dim underline decoration-rule underline-offset-[5px] transition-colors duration-150 hover:text-ink hover:decoration-ink focus-visible:outline-1 focus-visible:outline-ink focus-visible:outline-offset-4"
            >
              <Icon size={14} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </FadeIn>
  )
}
