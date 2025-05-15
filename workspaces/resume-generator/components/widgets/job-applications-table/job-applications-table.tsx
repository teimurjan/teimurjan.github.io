'use client'
import { JobApplication } from '@/db/types'
import { Button } from '../../ui/button'
import { useRouter } from '@bprogress/next/app'
import { ExternalLink, Loader2, Trash } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
} from '../../ui/alert-dialog'
import { useRemoveJobApplication } from '@/db/queries'
import { Input } from '../../ui/input'
import { useSearch } from '@/hooks/use-search'
import { JobApplicationsTableSkeleton } from './job-applications-table-skeleton'
import { DataTable } from '../../ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '../../ui/badge'
import { cn } from '@/lib/utils'
interface Props {
  jobApplications: JobApplication[]
  className?: string
  loading?: boolean
  search?: boolean
  footer?: boolean
}

export const JobApplicationsTable = ({
  jobApplications,
  loading,
  search,
  footer,
  className,
}: Props) => {
  const { searchResults, setSearchQuery, searchQuery } = useSearch({
    items: jobApplications,
    keys: ['jobDescription', 'jobTitle', 'companyName'],
  })
  const [containerHeight, setContainerHeight] = useState<number>(600)

  const router = useRouter()
  const { mutateAsync: removeJobApplication, isPending: isRemoving } =
    useRemoveJobApplication()

  const [removingId, setRemovingId] = useState<string>()

  const columns: ColumnDef<JobApplication>[] = useMemo(
    () => [
      {
        header: 'Company',
        cell: ({ row }) => (
          <div className="truncate w-32">
            {row.original.companyName ?? 'N/A'}
          </div>
        ),
        footer: footer
          ? () => <div>Total: {jobApplications.length} applications</div>
          : undefined,
      },
      {
        header: 'Job Title',
        cell: ({ row }) => (
          <div className="truncate w-52">{row.original.jobTitle ?? 'N/A'}</div>
        ),
      },
      {
        header: 'Job Description',
        cell: ({ row }) => (
          <div className="truncate w-[500px]">
            {row.original.jobDescription}
          </div>
        ),
        id: 'jobDescription',
      },
      {
        accessorFn: (row) =>
          new Intl.DateTimeFormat('en-US').format(
            new Date(row.createdAt.toMillis()),
          ),
        header: 'Created At',
      },
      {
        cell: ({ row }) => {
          const status = (() => {
            if (!row.original.status) {
              return row.original.resume ? 'Completed' : 'Pending'
            }
            return (
              row.original.status.slice(0, 1).toUpperCase() +
              row.original.status.slice(1)
            )
          })()
          return (
            <Badge variant={status === 'Completed' ? 'default' : 'secondary'}>
              {status}
            </Badge>
          )
        },
        header: 'Status',
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const jobApplication = row.original
          return (
            <div className="text-right">
              <Button
                onClick={() => {
                  router.push(`/adjust/${jobApplication.id}`)
                }}
              >
                <ExternalLink />
              </Button>
              <Button
                className="ml-2"
                variant="destructive"
                onClick={() => setRemovingId(jobApplication.id)}
                disabled={isRemoving}
              >
                <Trash />
              </Button>
            </div>
          )
        },
        header: () => <span className="ml-auto">Actions</span>,
      },
    ],
    [footer, isRemoving, jobApplications.length, router],
  )

  if (loading) {
    return <JobApplicationsTableSkeleton />
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {search && (
        <div className="flex items-center gap-2">
          <Input
            className="w-96 max-w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title, company name, or description..."
          />
        </div>
      )}
      <div
        className="flex-1"
        ref={(ref) => {
          if (ref) {
            setContainerHeight(ref.clientHeight)
          }
        }}
      >
        <DataTable
          columns={columns}
          data={searchResults}
          height={containerHeight}
        />

        <AlertDialog
          open={!!removingId}
          onOpenChange={(open) => !open && setRemovingId(undefined)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                generated application.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (removingId) {
                    removeJobApplication(removingId)
                  }
                }}
                disabled={isRemoving}
              >
                {isRemoving ? <Loader2 className="animate-spin" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
