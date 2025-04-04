'use client'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '../ui/table'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const JobApplicationsTableSkeleton = ({ className }: Props) => {
  return (
    <Table className={cn('overflow-auto', className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Headline</TableHead>
          <TableHead>Job Application</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-72" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[500px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24 inline-block" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-9 w-9 inline-block" />
              <Skeleton className="h-9 w-9 inline-block ml-2" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
