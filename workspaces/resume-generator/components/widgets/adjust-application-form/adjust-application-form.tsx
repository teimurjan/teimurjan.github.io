'use client'
import { ResumeQuery } from '@teimurjan/gql-client'
import { useRef, useState } from 'react'
import { Copy, ExternalLink, Save } from 'lucide-react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '../../ui/label'
import { useCoverLetter, useResume } from '@teimurjan/resume'
import { Button } from '../../ui/button'
import { JobApplication } from '@/db/types'
import { Textarea } from '../../ui/textarea'
import dynamic from 'next/dynamic'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { toast } from 'sonner'
import type { JsonEditorRef } from '../../common/json-editor'
import { adjustFormSchema } from '@/schema/adjust-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { AdjustResumeSubform } from '../adjust-resume-subform/adjust-resume-subform'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

const JsonEditor = dynamic(
  () => import('../../common/json-editor').then((mod) => mod.JsonEditor),
  {
    ssr: false,
  },
)

interface Props {
  application: Pick<JobApplication, 'resume' | 'coverLetter' | 'status'>
  onSave?: (application: Pick<JobApplication, 'resume' | 'coverLetter'>) => void
}

type FormValues = z.infer<typeof adjustFormSchema>

export const AdjustApplicationForm = ({ application, onSave }: Props) => {
  const jsonEditorRef = useRef<JsonEditorRef>(null)
  const [viewMode, setViewMode] = useState<'tree' | 'text' | 'form'>('form')

  const form = useForm<FormValues>({
    resolver: zodResolver(adjustFormSchema),
    defaultValues: {
      resume: application.resume,
      coverLetter: application.coverLetter,
      config: { skills: 'row' as const, location: true },
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

  const { openResume } = useResume(
    {
      config: formConfigValue,
      ...formResumeValue,
    },
    formStyleValue,
  )
  const { openCoverLetter } = useCoverLetter({
    children: formCoverLetterValue,
  })

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4"
        onSubmit={onSave ? form.handleSubmit(onSave) : undefined}
      >
        <div className="flex flex-col flex-1 overflow-hidden text-sm">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg">Resume</Label>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={(e) => {
                    // Prevent submit action to be triggered
                    e.preventDefault()

                    navigator.clipboard.writeText(
                      JSON.stringify(formResumeValue),
                    )
                    toast('Resume data copied to clipboard ✅')
                  }}
                >
                  Copy
                  <Copy />
                </Button>
                <Button
                  size="sm"
                  onClick={(e) => {
                    // Prevent submit action to be triggered
                    e.preventDefault()

                    openResume()
                  }}
                >
                  Open
                  <ExternalLink />
                </Button>
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
                              form.setValue(
                                'style',
                                value as 'custom' | 'harvard',
                              )
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
                                form.setValue(
                                  'config.skills',
                                  value as 'row' | 'column',
                                )
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
                            onCheckedChange={(checked) =>
                              form.setValue('config.location', checked)
                            }
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
                    if (
                      jsonEditorRef.current &&
                      (value === 'tree' || value === 'text')
                    ) {
                      if (value === 'tree') {
                        jsonEditorRef.current.setTreeMode()
                      } else if (value === 'text') {
                        jsonEditorRef.current.setTextMode()
                      }
                    }
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
              content={{ json: formResumeValue }}
              onChange={(updatedContent) => {
                if ('json' in updatedContent) {
                  form.setValue('resume', updatedContent.json as ResumeQuery)
                }
                if (
                  'text' in updatedContent &&
                  typeof updatedContent.text === 'string'
                ) {
                  form.setValue(
                    'resume',
                    JSON.parse(updatedContent.text) as ResumeQuery,
                  )
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
                    <Button
                      size="sm"
                      onClick={(e) => {
                        // Prevent submit action to be triggered
                        e.preventDefault()

                        openCoverLetter()
                      }}
                    >
                      Open <ExternalLink />
                    </Button>
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
