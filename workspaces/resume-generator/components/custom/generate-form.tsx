'use client'
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
import { useState } from 'react'
import { toast } from 'sonner'
import { Copy, ExternalLink, Loader2, PartyPopper } from 'lucide-react'
import { JobApplication, useAddJobApplication } from '@/db/db'
import { useResume } from '@teimurjan/resume'
import { Timestamp } from 'firebase/firestore'
import { cn } from '@/lib/utils'

type GeneratedApplication = Pick<JobApplication, 'resume' | 'coverLetter'>

interface Props {
  application: Pick<JobApplication, 'resume'>
  className?: string
}

type FormValues = z.infer<typeof generateFormSchema>

export const GenerateForm = ({ application, className }: Props) => {
  const addJobApplication = useAddJobApplication()

  const [generatedApplication, setGeneratedApplication] = useState<
    GeneratedApplication | undefined
  >(undefined)

  const form = useForm<FormValues>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      resume: application.resume,
    },
  })

  const { openResume } = useResume(generatedApplication?.resume)

  const handleSubmit = async (values: FormValues) => {
    try {
      setGeneratedApplication(undefined)

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription: values.jobDescription,
          resume: application.resume,
        }),
      })
      if (response.ok) {
        const newGeneratedApplication =
          (await response.json()) as GeneratedApplication
        setGeneratedApplication(newGeneratedApplication)
        addJobApplication({
          ...newGeneratedApplication,
          jobDescription: values.jobDescription,
          createdAt: Timestamp.now(),
        })
      } else {
        throw new Error()
      }
    } catch (_e) {
      toast('Error generating resume')
    }
  }

  return (
    <Form {...form}>
      <form
        className={cn('flex flex-col gap-4', className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base'>Job description</FormLabel>
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

        <div className="flex gap-4">
          <Button
            className="flex-1"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="animate-spin" />
            )}
            Generate <PartyPopper />
          </Button>

          {generatedApplication?.resume && (
            <Button
              className="flex-1"
              onClick={(e) => {
                // Prevent download action to be triggered
                e.preventDefault()

                openResume()
              }}
              variant="secondary"
            >
              Resume <ExternalLink />
            </Button>
          )}

          {generatedApplication?.coverLetter && (
            <Button
              className="flex-1"
              variant="secondary"
              onClick={(e) => {
                // Prevent download action to be triggered
                e.preventDefault()

                if (generatedApplication) {
                  navigator.clipboard.writeText(
                    generatedApplication.coverLetter,
                  )
                  toast('Cover letter copied to clipboard')
                }
              }}
            >
              Cover Letter <Copy />
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
