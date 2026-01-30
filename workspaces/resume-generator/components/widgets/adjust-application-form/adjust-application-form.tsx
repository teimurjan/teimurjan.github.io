'use client'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import type { JobApplication } from '@/db/types'
import { adjustFormSchema } from '@/schema/adjust-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ResumeQuery } from '@teimurjan/gql-client'
import { CustomResume, HarvardResume, useCoverLetter, useResume } from '@teimurjan/resume'
import { Copy, Save } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'
import type { JsonEditorRef } from '../../common/json-editor'
import { Button } from '../../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { Label } from '../../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { Textarea } from '../../ui/textarea'
import { AdjustResumeSubform } from '../adjust-resume-subform/adjust-resume-subform'
import { PdfPreviewButton } from '../pdf-preview-button/pdf-preview-button'

const JsonEditor = dynamic(() => import('../../common/json-editor').then((mod) => mod.JsonEditor), {
  ssr: false,
})

interface Props {
  application: Pick<
    JobApplication,
    'resume' | 'coverLetter' | 'status' | 'jobTitle' | 'companyName'
  >
  onSave?: (
    application: Pick<JobApplication, 'resume' | 'coverLetter' | 'jobTitle' | 'companyName'>
  ) => void
}

type FormValues = z.infer<typeof adjustFormSchema>

export const AdjustApplicationForm = ({ application, onSave }: Props) => {
  const jsonEditorRef = useRef<JsonEditorRef>(null)
  const [viewMode, setViewMode] = useState<'tree' | 'text' | 'form'>('form')

  const filenamePrefix = `${application.companyName}-${application.jobTitle}-${application.resume?.bios[0].fullName}`
  const getFilename = (postfix: string) =>
    `${filenamePrefix.toLowerCase().replace(/\s+/g, '-')}-${postfix}.pdf`

  const form = useForm<FormValues>({
    resolver: zodResolver(adjustFormSchema),
    defaultValues: {
      resume: application.resume,
      coverLetter: application.coverLetter,
      jobTitle: application.jobTitle,
      companyName: application.companyName,
      config: { skills: 'row' as const, location: false },
      style: 'harvard' as const,
    },
  })

  const formConfigValue = useWatch({ control: form.control, name: 'config' })
  const formStyleValue = useWatch({ control: form.control, name: 'style' })
  const formResumeValue = useWatch({ control: form.control, name: 'resume' })
  const formCoverLetterValue = useWatch({
    control: form.control,
    name: 'coverLetter',
  })

  useEffect(() => {
    if (!jsonEditorRef.current) {
      return
    }

    if (viewMode === 'form') {
      return
    }

    if (jsonEditorRef.current.getMode() !== viewMode) {
      // @ts-expect-error Unknown error
      jsonEditorRef.current.setMode(viewMode)
      return
    }
  }, [viewMode])

  const { generateResumeUrl } = useResume(
    formStyleValue === 'custom' ? CustomResume : HarvardResume,
    {
      config: formConfigValue,
      ...formResumeValue,
    }
  )
  const { generateCoverLetterUrl } = useCoverLetter({
    children: formCoverLetterValue,
  })

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4"
        onSubmit={onSave ? form.handleSubmit(onSave) : undefined}
      >
        <div className="flex flex-col flex-1 overflow-hidden text-sm">
          <Label className="text-lg mb-4">Company</Label>

          <div className="flex items-center gap-4 mb-4">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Software Engineer" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Google" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg">Resume</Label>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={(e) => {
                    // Prevent submit action to be triggered
                    e.preventDefault()

                    navigator.clipboard.writeText(JSON.stringify(formResumeValue))
                    toast('Resume data copied to clipboard ✅')
                  }}
                >
                  Copy
                  <Copy />
                </Button>
                <PdfPreviewButton
                  size="sm"
                  generatePdfUrl={generateResumeUrl}
                  filename={getFilename('cv')}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-4">
                <Label>Style</Label>
                <FormField
                  control={form.control}
                  name="style"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Select
                            value={field.value}
                            onValueChange={(value) =>
                              form.setValue('style', value as 'custom' | 'harvard')
                            }
                          >
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="custom">Custom</SelectItem>
                              <SelectItem value="harvard">Harvard</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {formStyleValue === 'custom' && (
                <div className="flex items-center gap-4">
                  <Label>Skills Layout</Label>
                  <FormField
                    control={form.control}
                    name="config.skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Select
                              value={field.value}
                              onValueChange={(value) =>
                                form.setValue('config.skills', value as 'row' | 'column')
                              }
                            >
                              <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Skills Layout" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="row">Horizontal</SelectItem>
                                <SelectItem value="column">Vertical</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex items-center gap-4">
                <Label>Show Location</Label>
                <FormField
                  control={form.control}
                  name="config.location"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={field.value}
                            onCheckedChange={(checked) => form.setValue('config.location', checked)}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <Label>View Mode</Label>
                <Select
                  value={viewMode}
                  onValueChange={(value: 'tree' | 'text' | 'form') => {
                    setViewMode(value)
                  }}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="View Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tree">Tree</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="form">Form</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator className="mb-4" />

          {viewMode === 'form' ? (
            <AdjustResumeSubform form={form} />
          ) : (
            <JsonEditor
              ref={jsonEditorRef}
              // @ts-expect-error Unknown error
              mode={viewMode}
              content={{ json: formResumeValue }}
              onChange={(updatedContent) => {
                if ('json' in updatedContent) {
                  form.setValue('resume', updatedContent.json as ResumeQuery)
                }
                if ('text' in updatedContent && typeof updatedContent.text === 'string') {
                  form.setValue('resume', JSON.parse(updatedContent.text) as ResumeQuery)
                }
              }}
              className="jse-theme-dark flex-1 overflow-auto"
            />
          )}
        </div>

        {application.coverLetter && (
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <div className="flex items-center justify-between flex-0 mb-2">
                  <FormLabel className="text-lg">Cover Letter</FormLabel>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        // Prevent submit action to be triggered
                        e.preventDefault()

                        navigator.clipboard.writeText(field.value)
                        toast('Cover letter copied to clipboard ✅')
                      }}
                    >
                      Copy <Copy />
                    </Button>
                    <PdfPreviewButton
                      size="sm"
                      generatePdfUrl={generateCoverLetterUrl}
                      filename={getFilename('cl')}
                    />
                  </div>
                </div>
                <FormControl className="flex-1">
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex items-center gap-4">
          {onSave && (
            <Button variant="secondary" className="flex-1" type="submit">
              Save <Save />
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
