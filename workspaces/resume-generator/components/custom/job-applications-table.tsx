import { JobApplication } from '@/db/types'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ExternalLink, Loader2, Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
} from '../ui/alert-dialog'
import { useRemoveJobApplication } from '@/db/queries'
import { Skeleton } from '../ui/skeleton'

interface Props {
  jobApplications: JobApplication[]
  className?: string
  loading?: boolean
}

const getStatus = (jobApplication: JobApplication) => {
  if (!jobApplication.status) {
    return jobApplication.resume ? 'Completed' : 'Pending'
  }
  return (
    jobApplication.status.slice(0, 1).toUpperCase() +
    jobApplication.status.slice(1)
  )
}

export const JobApplicationsTable = ({
  jobApplications,
  className,
  loading,
}: Props) => {
  const router = useRouter()
  const { mutateAsync: removeJobApplication, isPending: isRemoving } =
    useRemoveJobApplication()

  const [removingId, setRemovingId] = useState<string>()

  if (loading) {
    return (
      <Table className={cn('overflow-auto', className)}>
        <TableHeader>
          <TableRow>
            <TableHead>Headline</TableHead>
            <TableHead>Job Application</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-4 w-[200px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[300px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[100px]" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-9 w-9 inline-block" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <>
      <Table className={cn('overflow-auto', className)}>
        <TableHeader>
          <TableRow>
            <TableHead>Headline</TableHead>
            <TableHead>Job Application</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobApplications.map((jobApplication) => {
            const headline = jobApplication.resume?.bios[0].headline
            const status = getStatus(jobApplication)
            return (
              <TableRow key={jobApplication.id}>
                <TableCell>{headline ?? status}</TableCell>
                <TableCell>
                  {jobApplication.jobDescription.slice(0, 80)}...
                </TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(jobApplication.createdAt.toMillis()),
                  )}
                </TableCell>
                <TableCell className="text-right">
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
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

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
    </>
  )
}
