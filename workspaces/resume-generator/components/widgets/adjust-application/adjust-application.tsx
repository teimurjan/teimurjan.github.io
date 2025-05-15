'use client'
import { JobApplication } from '@/db/types'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { Button } from '../../ui/button'
import { Copy, Loader2 } from 'lucide-react'
import { useJobApplication, useUpdateJobApplication } from '@/db/queries'
import { AdjustApplicationForm } from '../adjust-application-form/adjust-application-form'

interface Props {
  id: string
}

export const AdjustApplication = ({ id }: Props) => {
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
    <Tabs defaultValue="application" className="w-full h-full">
      <TabsList className="w-full">
        <TabsTrigger value="application">Application</TabsTrigger>
        <TabsTrigger value="description">Description</TabsTrigger>
      </TabsList>
      <TabsContent value="application" className="overflow-hidden mt-2">
        {(application.status && application.status !== 'completed') ||
        !application.resume ? (
          <div className="flex items-center justify-center h-full">
            Application is still processing{' '}
            <Loader2 className="ml-2 animate-spin" />
          </div>
        ) : (
          <AdjustApplicationForm
            application={application}
            onSave={handleSave}
          />
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
