'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { toast } from 'sonner'
import { Loader2, PartyPopper } from 'lucide-react'
import { JobApplication } from '@/db/types'
import { cn } from '@/lib/utils'
import { useRouter } from '@bprogress/next/app'
import { generateFormSchema } from '@/schema/generate-form'
import { useAuth } from '@/providers/auth-provider'
import { Input } from '@/components/ui/input'

interface Props {
  application: Pick<JobApplication, 'resume'>
  className?: string
}

type FormValues = z.infer<typeof generateFormSchema>

export const GenerateApplicationForm = ({ application, className }: Props) => {
  const router = useRouter()
  const { user } = useAuth()
  const form = useForm<FormValues>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      resume: application.resume,
    },
  })

  const handleSubmit = async (values: FormValues) => {
    try {
      const token = await user?.getIdToken()
      const redirectParams = new URLSearchParams({
        redirect: window.location.href,
      })
      const loginUrl = `/login?${redirectParams.toString()}`
      if (!token) {
        router.push(loginUrl)
        return
      }

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          jobDescription: values.jobDescription,
          resume: application.resume,
          jobTitle: values.jobTitle,
          companyName: values.companyName,
        }),
      })

      if (response.status === 401) {
        router.push(loginUrl)
        return
      }

      if (!response.ok) {
        throw new Error()
      }

      const { jobApplicationId } = await response.json()
      router.push(`/adjust/${jobApplicationId}`)
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
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Company name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Job title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Job description</FormLabel>
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
        </div>
      </form>
    </Form>
  )
}
