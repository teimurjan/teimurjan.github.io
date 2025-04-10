'use client'
import { JobApplication } from '@/db/types'
import { Button } from '../../ui/button'
import { useRouter } from '@bprogress/next/app';
import { ExternalLink, Loader2, Search, Trash, X } from 'lucide-react'
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

interface Props {
  jobApplications: JobApplication[]
  className?: string
  loading?: boolean
  search?: boolean
}

export const JobApplicationsTable = ({
  jobApplications,
  loading,
  search,
  className,
}: Props) => {
  const {
    searchResults,
    isSearching,
    setIsSearching,
    setSearchQuery,
    searchQuery,
  } = useSearch({ items: jobApplications, keys: ['jobDescription'] })
  const [containerHeight, setContainerHeight] = useState<number>(600)

  const router = useRouter()
  const { mutateAsync: removeJobApplication, isPending: isRemoving } =
    useRemoveJobApplication()

  const [removingId, setRemovingId] = useState<string>()

  const columns: ColumnDef<JobApplication>[] = useMemo(
    () => [
      {
        header: 'Headline',
        cell: ({ row }) => (
          <div className="truncate w-72">
            {row.original.resume?.bios[0].headline ?? 'No Headline'}
          </div>
        ),
      },
      {
        header: () => {
          if (isSearching) {
            return (
              <>
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  autoFocus
                />
                <Button
                  className="align-middle ml-1"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSearchQuery('')
                    setIsSearching(false)
                  }}
                >
                  <X />
                </Button>
              </>
            )
          }
          return (
            <>
              <span>Job Description</span>
              {search && (
                <Button
                  className="py-0 ml-auto"
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearching(true)}
                >
                  <Search />
                </Button>
              )}
            </>
          )
        },
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
    [
      isSearching,
      search,
      searchQuery,
      setSearchQuery,
      setIsSearching,
      isRemoving,
      router,
    ],
  )

  if (loading) {
    return <JobApplicationsTableSkeleton />
  }

  return (
    <div
      className={className}
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
  )
}
