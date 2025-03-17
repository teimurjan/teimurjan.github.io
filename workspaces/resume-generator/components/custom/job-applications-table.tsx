import { JobApplication, useRemoveJobApplication } from '@/db/db'
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
import { ExternalLink, Trash } from 'lucide-react'
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

interface Props {
  jobApplications: JobApplication[]
  className?: string
}

export const JobApplicationsTable = ({ jobApplications, className }: Props) => {
  const router = useRouter()
  const removeJobApplication = useRemoveJobApplication()

  const [removingId, setRemovingId] = useState<string>()

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
            return (
              <TableRow key={jobApplication.id}>
                <TableCell>{jobApplication.resume.bios[0].headline}</TableCell>
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
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
