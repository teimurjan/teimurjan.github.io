'use client'
import { AdjustForm } from '@/components/custom/adjust-form'
import {
  JobApplication,
  useJobApplication,
  useUpdateJobApplication,
} from '@/db/db'
import { useCallback } from 'react'
import { toast } from 'sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { Copy } from 'lucide-react'

interface Props {
  id: string
}

export const AdjustByIdForm = ({ id }: Props) => {
  const application = useJobApplication(id)
  const updateJobApplication = useUpdateJobApplication()

  const handleSave = useCallback(
    async (newApplication: Pick<JobApplication, 'resume' | 'coverLetter'>) => {
      await updateJobApplication(id, newApplication)
      toast('Application updated successfully')
    },
    [id, updateJobApplication],
  )

  if (!application) {
    return null
  }

  return (
    <Tabs defaultValue="resume" className="w-full h-full">
      <TabsList className="w-full">
        <TabsTrigger value="resume">
          Resume
        </TabsTrigger>
        <TabsTrigger value="description">
          Description
        </TabsTrigger>
      </TabsList>
      <TabsContent value="resume" className="overflow-hidden mt-2">
        <AdjustForm application={application} onSave={handleSave} />
      </TabsContent>
      <TabsContent value="description" className="overflow-hidden mt-2">
        <pre>{application.jobDescription}</pre>
        <Button
          className="w-full mt-4"
          onClick={() => {
            if (application) {
              navigator.clipboard.writeText(application.jobDescription)
              toast('Description copied to clipboard')
            }
          }}
        >
          Copy <Copy />
        </Button>
      </TabsContent>
    </Tabs>
  )
}
