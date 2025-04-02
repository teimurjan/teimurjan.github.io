'use client'
import { AdjustForm } from '@/components/custom/adjust-form'
import { JobApplication } from '@/db/types'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { Copy, Loader2 } from 'lucide-react'
import { useJobApplication, useUpdateJobApplication } from '@/db/queries'

interface Props {
  id: string
}

export const AdjustByIdForm = ({ id }: Props) => {
  const { data: application } = useJobApplication(id)
  const { mutateAsync: updateJobApplication } = useUpdateJobApplication()

  const handleSave = useCallback(
    async (newApplication: Pick<JobApplication, 'resume' | 'coverLetter'>) => {
      await updateJobApplication({ id, data: newApplication })
      toast('Application updated successfully ✅')
    },
    [id, updateJobApplication],
  )

  if (!application) {
    return null
  }

  return (
    <Tabs defaultValue="resume" className="w-full h-full">
      <TabsList className="w-full">
        <TabsTrigger value="resume">Resume</TabsTrigger>
        <TabsTrigger value="description">Description</TabsTrigger>
      </TabsList>
      <TabsContent value="resume" className="overflow-hidden mt-2">
        {(application.status && application.status !== 'completed') ||
        !application.resume ? (
          <div className="flex items-center justify-center h-full">
            Application is still processing{' '}
            <Loader2 className="ml-2 animate-spin" />
          </div>
        ) : (
          <AdjustForm application={application} onSave={handleSave} />
        )}
      </TabsContent>
      <TabsContent value="description" className="overflow-hidden mt-2">
        <pre>{application.jobDescription}</pre>
        <Button
          className="w-full mt-4"
          onClick={() => {
            if (application) {
              navigator.clipboard.writeText(application.jobDescription)
              toast('Description copied to clipboard ✅')
            }
          }}
        >
          Copy <Copy />
        </Button>
      </TabsContent>
    </Tabs>
  )
}
