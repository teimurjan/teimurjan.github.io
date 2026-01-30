'use client'
import { Checkbox } from '@/components/ui/checkbox'
import type { JobApplication } from '@/db/types'
import { useRouter } from '@bprogress/next/app'
import { createColumnHelper } from '@tanstack/react-table'
import { ExternalLink } from 'lucide-react'
import { useMemo } from 'react'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'

interface Props {
  jobApplications: JobApplication[]
  selectable?: boolean
  footer?: boolean
}

const columnHelper = createColumnHelper<JobApplication>()

export const useJobApplicationsTableColumns = ({ jobApplications, footer, selectable }: Props) => {
  const router = useRouter()

  const selectColumn = useMemo(() => {
    return columnHelper.display({
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
      size: 50,
    })
  }, [])

  const baseColumns = useMemo(() => {
    return [
      columnHelper.accessor('companyName', {
        header: 'Company',
      }),
      columnHelper.accessor('jobTitle', {
        header: 'Job Title',
      }),
      columnHelper.display({
        header: 'Job Description',
        id: 'jobDescription',
        cell: ({ row }) => <div className="truncate w-[500px]">{row.original.jobDescription}</div>,
      }),
      columnHelper.accessor(
        (row) => new Intl.DateTimeFormat('en-US').format(new Date(row.createdAt.toMillis())),
        {
          header: 'Created At',
        }
      ),
      columnHelper.display({
        header: 'Status',
        cell: ({ row }) => {
          const getStatus = () => {
            if (!row.original.status) {
              return row.original.resume ? 'Completed' : 'Pending'
            }
            return row.original.status
          }

          const status = getStatus()

          return (
            <Badge variant={status === 'completed' ? 'success' : 'danger'} className="capitalize">
              {status}
            </Badge>
          )
        },
      }),
      columnHelper.display({
        id: 'actions',
        header: () => <span className="ml-auto">Actions</span>,
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
      }),
    ]
  }, [router])

  return useMemo(() => {
    return [
      columnHelper.group({
        id: 'applications',
        columns: selectable ? [selectColumn, ...baseColumns] : baseColumns,
        header: 'Applications',
        footer: footer
          ? ({ table }) =>
              `Selected ${table.getFilteredSelectedRowModel().rows.length} of ${jobApplications.length} applications`
          : undefined,
      }),
    ]
  }, [selectable, baseColumns, selectColumn, footer, jobApplications.length])
}
