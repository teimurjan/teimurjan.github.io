'use client'

import { useMemo } from 'react'
import { useFieldArray, UseFormReturn } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { Plus, Trash } from 'lucide-react'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'
import { Label } from '../../ui/label'
import { Combobox, ComboboxOption } from '../../ui/combobox'
import { z } from 'zod'
import { adjustFormSchema } from '@/schema/adjust-form'
import dynamic from 'next/dynamic'

const HtmlEditor = dynamic(
  () => import('../../common/html-editor').then((mod) => mod.HtmlEditor),
  {
    ssr: false,
  },
)

type FormValues = z.infer<typeof adjustFormSchema>

interface Props {
  form: UseFormReturn<FormValues>
}

export const AdjustResumeSubform = ({ form }: Props) => {
  const { fields: bioFields } = useFieldArray({
    control: form.control,
    name: 'resume.bios',
  })

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: form.control,
    name: 'resume.educations',
  })

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: form.control,
    name: 'resume.skills',
  })

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: 'resume.experiences',
  })

  const {
    fields: publicationFields,
    append: appendPublication,
    remove: removePublication,
  } = useFieldArray({
    control: form.control,
    name: 'resume.publications',
  })

  const {
    fields: conferenceFields,
    append: appendConference,
    remove: removeConference,
  } = useFieldArray({
    control: form.control,
    name: 'resume.conferences',
  })
  const skillOptions: ComboboxOption[] = useMemo(() => {
    return skillFields.map((field) => ({
      value: field.id,
      label: field.title,
    }))
  }, [skillFields])

  const handleAddSkill = (title: string) => {
    appendSkill({
      id: uuidv4(),
      title,
      yearsOfExperience: 1,
    })
  }

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto pb-4">
      {bioFields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name={`resume.bios.${index}.fullName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`resume.bios.${index}.headline`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Headline</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`resume.bios.${index}.email`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`resume.bios.${index}.phoneNumber`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`resume.bios.${index}.location`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`resume.bios.${index}.about`}
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Skills</Label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skillFields.map((field, index) => (
            <div key={field.id} className="flex items-end gap-4">
              <FormField
                control={form.control}
                name={`resume.skills.${index}.title`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Skill Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.skills.${index}.yearsOfExperience`}
                render={({ field }) => (
                  <FormItem className="w-[150px]">
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeSkill(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Label className="mb-2">Add Skill</Label>
          <Combobox
            options={skillOptions}
            placeholder="Type to search or add a new skill"
            emptyText="No skills found"
            onAdd={handleAddSkill}
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Education</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              appendEducation({
                id: uuidv4(),
                school: '',
                degree: '',
                areaOfStudy: '',
                startDate: '',
                endDate: null,
              })
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>

        {educationFields.map((field, index) => (
          <div key={field.id} className="space-y-4 border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <Label>Education #{index + 1}</Label>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeEducation(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`resume.educations.${index}.school`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.educations.${index}.degree`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.educations.${index}.areaOfStudy`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area of Study</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`resume.educations.${index}.startDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`resume.educations.${index}.endDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Work Experience</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              appendExperience({
                id: uuidv4(),
                company: '',
                position: '',
                startDate: '',
                endDate: null,
                description: {
                  html: '',
                },
              })
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Experience
          </Button>
        </div>

        {experienceFields.map((field, index) => (
          <div key={field.id} className="space-y-4 border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <Label>Experience #{index + 1}</Label>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeExperience(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`resume.experiences.${index}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.experiences.${index}.position`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`resume.experiences.${index}.startDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`resume.experiences.${index}.endDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`resume.experiences.${index}.description.html`}
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <HtmlEditor
                        value={field.value ?? ''}
                        onChange={(content) => field.onChange(content)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Publications</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              appendPublication({
                id: uuidv4(),
                title: '',
                link: 'https://',
                date: '',
              })
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Publication
          </Button>
        </div>

        {publicationFields.map((field, index) => (
          <div key={field.id} className="space-y-4 border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <Label>Publication #{index + 1}</Label>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removePublication(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`resume.publications.${index}.title`}
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.publications.${index}.link`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.publications.${index}.date`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Conferences</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              appendConference({
                id: uuidv4(),
                title: '',
                topic: '',
                link: 'https://',
                date: '',
              })
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Conference
          </Button>
        </div>

        {conferenceFields.map((field, index) => (
          <div key={field.id} className="space-y-4 border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <Label>Conference #{index + 1}</Label>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeConference(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`resume.conferences.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.conferences.${index}.topic`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.conferences.${index}.link`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input {...field} type="url" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`resume.conferences.${index}.date`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
