'use client'
import { ResumeQuery } from '@teimurjan/gql-client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { generateFormSchema } from '@/schema/generate-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'
import { useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import {
  JobApplication,
  useAddJobApplication,
  useJobApplications,
  useRemoveJobApplication,
} from '@/db/db'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Separator } from '../ui/separator'

interface Props {
  data: ResumeQuery
}

type GeneratedData = Pick<JobApplication, 'resume' | 'coverLetter'>

type FormValues = z.infer<typeof generateFormSchema>

export const GenerateForm = ({ data }: Props) => {
  const jobApplications = useJobApplications()
  const addJobApplication = useAddJobApplication()
  const removeJobApplication = useRemoveJobApplication()

  const [generatedData, setGeneratedData] = useState<
    GeneratedData | undefined
  >()

  const form = useForm<FormValues>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      resume: data,
    },
  })

  const handleSubmit = async (values: FormValues) => {
    try {
      setGeneratedData(undefined)

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription: values.jobDescription,
          resume: data,
        }),
      })
      if (response.ok) {
        const newGeneratedData = (await response.json()) as GeneratedData
        setGeneratedData(newGeneratedData)
        addJobApplication({
          ...newGeneratedData,
          jobDescription: values.jobDescription,
          createdAt: new Date(),
        })
      } else {
        throw new Error()
      }
    } catch (_e) {
      toast('Error generating resume')
    }
  }

  const handleCopyCoverLetter = () => {
    if (generatedData) {
      navigator.clipboard.writeText(generatedData.coverLetter)
      toast('Cover letter copied to clipboard')
    }
  }

  const handleCopyGeneratedResumeData = () => {
    if (generatedData) {
      navigator.clipboard.writeText(
        JSON.stringify(generatedData.resume, null, 2),
      )
      toast('Generated resume data copied to clipboard')
    }
  }

  return (
    <Form {...form}>
      <div className="flex h-full flex-col gap-4">
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter job description"
                    className="h-[50vh]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="cursor-pointer"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="animate-spin" />
            )}
            {generatedData ? 'Regenerate' : 'Generate'} resume
          </Button>
        </form>

        {generatedData && (
          <div className="flex gap-4">
            <PDFDownloadLink
              className="flex-1"
              document={<Resume {...generatedData.resume} />}
              fileName="resume.pdf"
            >
              {({ url, loading }) => (
                <Button
                  className="cursor-pointer w-full"
                  onClick={(e) => {
                    // Prevent download action to be triggered
                    e.stopPropagation()
                    e.preventDefault()

                    if (url) {
                      window.open(url, '_blank')
                    }
                  }}
                  disabled={loading}
                  variant="secondary"
                >
                  {loading && <Loader2 className="animate-spin" />}
                  Get resume
                </Button>
              )}
            </PDFDownloadLink>

            <Button
              className="cursor-pointer flex-1"
              variant="secondary"
              onClick={handleCopyGeneratedResumeData}
            >
              Copy generated resume data
            </Button>

            <Button
              className="cursor-pointer flex-1"
              variant="secondary"
              onClick={handleCopyCoverLetter}
            >
              Copy cover letter
            </Button>
          </div>
        )}

        {jobApplications && jobApplications.length > 0 && (
          <>
            <Separator />
            <h4>Recent applications</h4>
            <Table className="flex-1 overflow-auto">
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
                  const handleRestoreClick = () => {
                    form.setValue(
                      'jobDescription',
                      jobApplication.jobDescription,
                    )
                    setGeneratedData({
                      resume: jobApplication.resume,
                      coverLetter: jobApplication.coverLetter,
                    })
                  }
                  const handleRemoveClick = () => {
                    if (jobApplication.id) {
                      removeJobApplication(jobApplication.id)
                    }
                  }

                  return (
                    <TableRow key={jobApplication.createdAt.getTime()}>
                      <TableCell>
                        {jobApplication.resume.bios[0].headline}
                      </TableCell>
                      <TableCell>
                        {jobApplication.jobDescription.slice(0, 80)}...
                      </TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat('en-US').format(
                          jobApplication.createdAt,
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          className="cursor-pointer"
                          onClick={handleRestoreClick}
                        >
                          Restore
                        </Button>
                        {jobApplication.id && (
                          <Button
                            className="cursor-pointer ml-2"
                            variant="destructive"
                            onClick={handleRemoveClick}
                          >
                            Remove
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </>
        )}
      </div>
    </Form>
  )
}
