import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { ContributedRepository } from '@teimurjan/github-client'
import { Eye, EyeOff, Star, Box } from 'lucide-react'
import Card from '../card'
import Link from '@/components/atoms/link'
import Typography from '@/components/atoms/typography'

interface Props extends HTMLAttributes<HTMLDivElement> {
  repository: ContributedRepository
}

const RepositoryCard = ({ repository, className, ...props }: Props) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num.toString()
  }

  const repositoryName =
    repository.nameWithOwner.split('/').pop() || repository.nameWithOwner

  return (
    <Card
      className={classNames(className)}
      title={
        <Link href={repository.url} target="_blank" rel="noopener noreferrer">
          {repositoryName}
        </Link>
      }
      subtitle1={null}
      subtitle2={repository.nameWithOwner}
      {...props}
    >
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4">
          {repository.primaryLanguage && (
            <Typography.Text className="flex items-center gap-2" variant="sm">
              <Box className="w-4 h-4" />
              <span>{repository.primaryLanguage.name}</span>
            </Typography.Text>
          )}

          <Typography.Text className="flex items-center gap-1" variant="sm">
            <Star className="w-4 h-4  text-yellow-500" />
            <span>{formatNumber(repository.stargazerCount)}</span>
          </Typography.Text>
        </div>

        <Typography.Text className="flex items-center gap-2" variant="sm">
          {repository.isPrivate ? (
            <span className="flex items-center gap-1">
              <EyeOff className="w-3 h-3" />
              Private
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Public
            </span>
          )}
        </Typography.Text>
      </div>
    </Card>
  )
}

export default RepositoryCard
