'use client'
import { ResumeQuery } from '@teimurjan/gql-client'
import { useEffect, useRef, useState } from 'react'
import { JSONEditor, Mode } from 'vanilla-jsoneditor/standalone.js'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'
import { useDebounce } from 'use-debounce'
import { Button } from '@/components/ui/button'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import { Loader2 } from 'lucide-react'

const JSON_EDITOR_ID = 'editor'

interface Props {
  data: ResumeQuery
}

export const AdjustForm = ({ data }: Props) => {
  const jsonEditorRef = useRef<JSONEditor>()

  const [customData, setCustomData] = useState<ResumeQuery>(data)
  const [debouncedCustomData] = useDebounce(customData, 500)

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
      <div className="flex-1 h-full overflow-auto text-sm">
        <div id={JSON_EDITOR_ID} className="jse-theme-dark" />
      </div>

      {debouncedCustomData && (
        <PDFDownloadLink
          document={<Resume {...debouncedCustomData} />}
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
            >
              {loading && <Loader2 className="animate-spin" />}
              Get Resume
            </Button>
          )}
        </PDFDownloadLink>
      )}
    </div>
  )
}
