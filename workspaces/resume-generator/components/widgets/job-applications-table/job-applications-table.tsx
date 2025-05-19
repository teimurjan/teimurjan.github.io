'use client'
import { JobApplication } from '@/db/types'
import { Button } from '../../ui/button'
import { useRouter } from '@bprogress/next/app'
import { ExternalLink, Loader2 } from 'lucide-react'
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
import { useRemoveJobApplications } from '@/db/queries'
import { Input } from '../../ui/input'
import { useSearch } from '@/hooks/use-search'
import { JobApplicationsTableSkeleton } from './job-applications-table-skeleton'
import { DataTable } from '../../ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '../../ui/badge'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
interface Props {
  jobApplications: JobApplication[]
  className?: string
  loading?: boolean
  search?: boolean
  selectable?: boolean
  footer?: boolean
}

export const JobApplicationsTable = ({
  jobApplications,
  loading,
  search,
  footer,
  selectable,
  className,
}: Props) => {
  const { searchResults, setSearchQuery, searchQuery } = useSearch({
    items: jobApplications,
    keys: ['jobDescription', 'jobTitle', 'companyName'],
  })
  const [containerHeight, setContainerHeight] = useState<number>(600)

  const router = useRouter()
  const { mutateAsync: removeJobApplications, isPending: isRemoving } =
    useRemoveJobApplications()

  const [removingIds, setRemovingIds] = useState<string[]>([])

  const columns: ColumnDef<JobApplication>[] = useMemo(() => {
    const selectColumn: ColumnDef<JobApplication> = {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
      footer: footer
        ? ({ table }) => (
            <div>
              Selected {table.getFilteredSelectedRowModel().rows.length} of{' '}
              {jobApplications.length} applications
            </div>
          )
        : undefined,
    }

    const columns_: ColumnDef<JobApplication>[] = [
      {
        header: 'Company',
        cell: ({ row }) => (
          <div className="truncate w-40">
            {row.original.companyName ?? 'N/A'}
          </div>
        ),
      },
      {
        header: 'Job Title',
        cell: ({ row }) => (
          <div className="truncate w-60">{row.original.jobTitle ?? 'N/A'}</div>
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
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()

                  router.push(`/adjust/${jobApplication.id}`)
                }}
                variant="outline"
              >
                <ExternalLink />
              </Button>
            </div>
          )
        },
      },
    ]

    if (selectable) {
      return [selectColumn, ...columns_]
    }

    return columns_
  }, [footer, jobApplications.length, router, selectable])

  if (loading) {
    return <JobApplicationsTableSkeleton />
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div
        className="flex-1"
        ref={(ref) => {
          if (ref) {
            setContainerHeight(ref.clientHeight - 64)
          }
        }}
      >
        <DataTable
          columns={columns}
          data={searchResults}
          height={containerHeight}
          header={({ table }) => {
            const selectedRows = table.getFilteredSelectedRowModel().rows
            return search ? (
              <div className="flex items-center justify-between gap-2 h-16">
                <Input
                  className="w-96 max-w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by job title, company name, or description..."
                />
                <Button
                  className={cn(
                    selectedRows.length === 0 ? 'opacity-0!' : 'opacity-100',
                    'transition-opacity duration-300',
                  )}
                  variant="destructive"
                  disabled={selectedRows.length === 0}
                  onClick={() => {
                    setRemovingIds(
                      selectedRows
                        .map((row) => row.original.id)
                        .filter((id) => id !== undefined),
                    )
                  }}
                >
                  Delete
                </Button>
              </div>
            ) : null
          }}
        />

        <AlertDialog
          open={!!removingIds.length}
          onOpenChange={(open) => !open && setRemovingIds([])}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete {removingIds.length}{' '}
                applications?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                generated applications.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (removingIds.length) {
                    removeJobApplications(removingIds)
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
