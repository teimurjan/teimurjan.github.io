'use client'
import { ResumeQuery } from '@teimurjan/gql-client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { JSONEditor, Mode } from 'vanilla-jsoneditor/standalone.js'
import { useDebounce } from 'use-debounce'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { useResume } from '@teimurjan/resume'
import { Button } from '../ui/button'

const JSON_EDITOR_ID = 'editor'

interface Props {
  data: ResumeQuery
}

export const AdjustForm = ({ data }: Props) => {
  const jsonEditorRef = useRef<JSONEditor>()

  const [customData, setCustomData] = useState<ResumeQuery>(data)
  const [debouncedCustomData] = useDebounce(customData, 500)
  const [skillsInRow, setSkillsInRow] = useState(true)

  const downloadResumeProps = useMemo(
    () => ({
      ...debouncedCustomData,
      config: { skills: skillsInRow ? 'row' : 'column' } as const,
    }),
    [debouncedCustomData, skillsInRow],
  )
  const { openResume } = useResume(downloadResumeProps)

  useEffect(() => {
    const target = document.getElementById(JSON_EDITOR_ID)
    if (!target) {
      return
    }

    jsonEditorRef.current = new JSONEditor({
      target,
      props: {
        mode: Mode.text,
        mainMenuBar: false,
        navigationBar: false,
        content: { json: data },
        onChange: (updatedContent) => {
          if ('json' in updatedContent) {
            setCustomData(updatedContent.json as ResumeQuery)
          }
          if ('text' in updatedContent) {
            setCustomData(JSON.parse(updatedContent.text) as ResumeQuery)
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
  }, [data])

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex-0">
        <div className="flex items-center space-x-2">
          <Switch
            id="skills-in-row"
            onCheckedChange={setSkillsInRow}
            checked={skillsInRow}
          />
          <Label htmlFor="skills-in-row">Skills Horizontal</Label>
        </div>
      </div>

      <div className="flex-1 h-full overflow-auto text-sm">
        <div id={JSON_EDITOR_ID} className="jse-theme-dark" />
      </div>

      <Button className="w-full" onClick={() => openResume()}>
        Get resume
      </Button>
    </div>
  )
}
