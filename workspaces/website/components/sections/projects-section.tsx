import { AvatarBox } from '@/components/ui/avatar-box'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHead } from '@/components/ui/section-head'
import { IconStar } from '@/components/ui/sketch-icons'
import type { ProjectsData, Repository } from '@/lib/sections'
import Image from 'next/image'

interface ProjectsSectionProps {
  data: ProjectsData
}

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return n.toString()
}

function getMark(nameWithOwner: string): string {
  const repoName = nameWithOwner.split('/')[1] ?? nameWithOwner
  const clean = repoName.replace(/[^a-zA-Z0-9]/g, '')
  return clean.slice(0, 2).toUpperCase() || '?'
}

function RepoRow({ repo, showDesc }: { repo: Repository; showDesc: boolean }) {
  return (
    <a
      key={repo.id}
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-[28px_1fr_auto_auto] gap-3.5 items-center px-3.5 py-2.5 border-b border-dashed border-rule cursor-pointer transition-[background,padding] duration-[120ms] no-underline text-inherit last:border-b-0 hover:bg-highlight hover:pl-[22px] max-tablet:grid-cols-[24px_1fr_auto] max-tablet:gap-2.5 max-tablet:px-3 max-tablet:hover:pl-3"
    >
      <AvatarBox size="xs" shadow={false} className="text-[11px] font-bold">
        {repo.ownerAvatarUrl ? (
          <Image
            src={repo.ownerAvatarUrl}
            alt=""
            width={24}
            height={24}
            unoptimized
            className="w-full h-full object-cover"
          />
        ) : (
          getMark(repo.nameWithOwner)
        )}
      </AvatarBox>
      <div className="text-[13px] font-medium min-w-0">
        {repo.nameWithOwner}
        {showDesc && repo.description && (
          <span className="text-ink-dim font-normal text-[12px] block mt-0.5">
            {repo.description}
          </span>
        )}
      </div>
      <div className="text-[11px] text-ink-dim flex items-center gap-1">
        <IconStar size={12} /> {formatStars(repo.stargazerCount)}
      </div>
      <div className="text-[11px] text-ink-dim border border-rule px-2 py-0.5 max-tablet:hidden">
        {repo.primaryLanguage ?? '—'}
      </div>
    </a>
  )
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const owned = data.repositories.filter((r) => r.isOwned)
  const contributed = data.repositories.filter((r) => !r.isOwned)

  return (
    <FadeIn>
      {owned.length > 0 && (
        <>
          <SectionHead label="My projects" count={owned.length} />
          <div className="flex flex-col border-[1.5px] border-ink shadow-tight bg-paper-2">
            {owned.map((r) => (
              <RepoRow key={r.id} repo={r} showDesc />
            ))}
          </div>
        </>
      )}

      {contributed.length > 0 && (
        <>
          <SectionHead label="Contributions" count={contributed.length} />
          <div className="flex flex-col border-[1.5px] border-ink shadow-tight bg-paper-2">
            {contributed.map((r) => (
              <RepoRow key={r.id} repo={r} showDesc={false} />
            ))}
          </div>
        </>
      )}

      {data.repositories.length === 0 && <p>No projects yet.</p>}
    </FadeIn>
  )
}
