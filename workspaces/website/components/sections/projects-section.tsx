import type { ProjectsData, Repository } from '@/lib/sections'
import { ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'

interface ProjectsSectionProps {
  data: ProjectsData
}

function OwnedRepoCard({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 p-3 rounded-lg transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src={repo.ownerAvatarUrl}
            alt={repo.nameWithOwner.split('/')[0]}
            width={24}
            height={24}
            className="rounded-full shrink-0"
          />
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2 truncate">
            {repo.nameWithOwner}
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </h3>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0 max-sm:hidden">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{repo.stargazerCount.toLocaleString()}</span>
          </div>
          {repo.primaryLanguage && <span>{repo.primaryLanguage}</span>}
        </div>
      </div>

      {repo.description && (
        <p className="text-sm text-muted-foreground line-clamp-2">{repo.description}</p>
      )}
    </a>
  )
}

function ContributedRepoCard({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-2 rounded-lg transition-colors"
    >
      <Image
        src={repo.ownerAvatarUrl}
        alt={repo.nameWithOwner.split('/')[0]}
        width={24}
        height={24}
        className="rounded-full shrink-0"
      />

      <div className="flex items-center justify-between gap-4 flex-1 min-w-0">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2 truncate">
          {repo.nameWithOwner}
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0 max-sm:hidden">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{repo.stargazerCount.toLocaleString()}</span>
          </div>
          {repo.primaryLanguage && <span>{repo.primaryLanguage}</span>}
        </div>
      </div>
    </a>
  )
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  if (data.repositories.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Projects</h1>
        <p className="text-muted-foreground">No projects yet.</p>
      </div>
    )
  }

  const ownedRepos = data.repositories.filter((r) => r.isOwned)
  const contributedRepos = data.repositories.filter((r) => !r.isOwned)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Projects</h1>

      {ownedRepos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            My Projects
          </h2>
          <div className="grid gap-3">
            {ownedRepos.map((repo) => (
              <OwnedRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}

      {contributedRepos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Contributions
          </h2>
          <div className="grid gap-2">
            {contributedRepos.map((repo) => (
              <ContributedRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
