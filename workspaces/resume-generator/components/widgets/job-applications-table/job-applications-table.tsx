'use client'
import { useRemoveJobApplications } from '@/db/queries'
import type { JobApplication } from '@/db/types'
import { useSearch } from '@/hooks/use-search'
import { cn } from '@/lib/utils'
import type { Table } from '@tanstack/react-table'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../ui/alert-dialog'
import { Button } from '../../ui/button'
import { DataTable } from '../../ui/data-table'
import { Input } from '../../ui/input'
import { JobApplicationsTableSkeleton } from './job-applications-table-skeleton'
import { useJobApplicationsTableColumns } from './use-job-applications-table-columns'

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

  const { mutateAsync: removeJobApplications, isPending: isRemoving } = useRemoveJobApplications()

  const [removingIds, setRemovingIds] = useState<string[]>([])

  const columns = useJobApplicationsTableColumns({
    jobApplications,
    footer,
    selectable,
  })

  const renderHeader = ({ table }: { table: Table<JobApplication> }) => {
    if (!search) {
      return null
    }

    const selectedRows = table.getFilteredSelectedRowModel().rows
    return (
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
            'transition-opacity duration-300'
          )}
          variant="destructive"
          disabled={selectedRows.length === 0}
          onClick={() => {
            setRemovingIds(
              selectedRows.map((row) => row.original.id).filter((id) => id !== undefined)
            )
          }}
        >
          Delete
        </Button>
      </div>
    )
  }

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
          header={renderHeader}
        />

        <AlertDialog
          open={!!removingIds.length}
          onOpenChange={(open) => !open && setRemovingIds([])}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete {removingIds.length} applications?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the generated
                applications.
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
