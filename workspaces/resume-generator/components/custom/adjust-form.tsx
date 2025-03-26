'use client'
import { ResumeQuery } from '@teimurjan/gql-client'
import { useEffect, useRef } from 'react'
import { JSONEditor, Mode } from 'vanilla-jsoneditor/standalone.js'
import { Copy, ExternalLink, Save } from 'lucide-react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { useCoverLetter, useResume } from '@teimurjan/resume'
import { Button } from '../ui/button'
import { JobApplication } from '@/db/db'
import { Textarea } from '../ui/textarea'
import { adjustFormSchema } from '@/schema/adjust-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { toast } from 'sonner'

const JSON_EDITOR_ID = 'editor'

interface Props {
  application: Pick<JobApplication, 'resume' | 'coverLetter'>
  onSave?: (application: Pick<JobApplication, 'resume' | 'coverLetter'>) => void
}

type FormValues = z.infer<typeof adjustFormSchema>

export const AdjustForm = ({ application, onSave }: Props) => {
  const jsonEditorRef = useRef<JSONEditor>()

  const form = useForm<FormValues>({
    resolver: zodResolver(adjustFormSchema),
    defaultValues: {
      resume: application.resume,
      coverLetter: application.coverLetter,
      config: { skills: 'row' as const },
    },
  })

  const formConfigValue = useWatch({ control: form.control, name: 'config' })
  const formResumeValue = useWatch({ control: form.control, name: 'resume' })
  const formCoverLetterValue = useWatch({
    control: form.control,
    name: 'coverLetter',
  })

  const { openResume } = useResume({
    config: formConfigValue,
    ...formResumeValue,
  })
  const { openCoverLetter } = useCoverLetter({
    children: formCoverLetterValue,
  })

  useEffect(() => {
    const target = document.getElementById(JSON_EDITOR_ID)
    if (!target) {
      return
    }

    jsonEditorRef.current = new JSONEditor({
      target,
      props: {
        mode: Mode.tree,
        mainMenuBar: false,
        navigationBar: false,
        content: { json: form.getValues('resume') },
        onChange: (updatedContent) => {
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
        },
      },
    })

    return () => {
      if (jsonEditorRef.current) {
        jsonEditorRef.current.destroy()
        jsonEditorRef.current = undefined
      }
    }
  }, [form])

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col gap-4"
        onSubmit={onSave ? form.handleSubmit(onSave) : undefined}
      >
        <div className="flex flex-col flex-1 overflow-hidden text-sm">
          <div className="flex items-center justify-between gap-4 mb-4">
            <Label className="text-base">
              Resume Data{' '}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  // Prevent submit action to be triggered
                  e.preventDefault()

                  navigator.clipboard.writeText(JSON.stringify(formResumeValue))
                  toast('Resume data copied to clipboard ✅')
                }}
              >
                <Copy />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  // Prevent submit action to be triggered
                  e.preventDefault()

                  openResume()
                }}
              >
                <ExternalLink />
              </Button>
            </Label>
            <FormField
              control={form.control}
              name="config.skills"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center gap-2">
                        <Switch
                          id="skills-in-row"
                          className="cursor-pointer"
                          checked={field.value === 'row'}
                          onCheckedChange={(checked) =>
                            form.setValue(
                              'config.skills',
                              checked ? 'row' : 'column',
                            )
                          }
                        />
                        <Label
                          htmlFor="skills-in-row"
                          className="cursor-pointer"
                        >
                          Skills Horizontal
                        </Label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Switch
                          id="tree-mode"
                          className="cursor-pointer"
                          defaultChecked
                          onCheckedChange={(checked) => {
                            if (jsonEditorRef.current) {
                              jsonEditorRef.current.updateProps({
                                mode: checked ? Mode.tree : Mode.text,
                              })
                            }
                          }}
                        />
                        <Label htmlFor="tree-mode" className="cursor-pointer">
                          Tree Mode
                        </Label>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div
            id={JSON_EDITOR_ID}
            className="jse-theme-dark flex-1 overflow-auto"
          />
        </div>

        {application.coverLetter && (
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex-0 text-base">
                  Cover Letter{' '}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      // Prevent submit action to be triggered
                      e.preventDefault()

                      navigator.clipboard.writeText(field.value)
                      toast('Cover letter copied to clipboard ✅')
                    }}
                  >
                    <Copy />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      // Prevent submit action to be triggered
                      e.preventDefault()

                      openCoverLetter()
                    }}
                  >
                    <ExternalLink />
                  </Button>
                </FormLabel>
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
