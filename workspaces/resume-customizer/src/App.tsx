import { ResumeQuery } from '@teimurjan/gql-types'
import { useEffect, useRef, useState } from 'react'
import { JSONEditor, Mode } from 'vanilla-jsoneditor/standalone.js'
import Resume, { PDFDownloadLink } from '@teimurjan/resume'
import gqlClient from './gql-client'

const JSON_EDITOR_ID = 'editor'

const loadResume = async () => await gqlClient.Resume()

function App() {
  const hasDataLoadStartedRef = useRef(false)
  const jsonEditorRef = useRef<JSONEditor>()

  const [data, setData] = useState<ResumeQuery>()
  const [customData, setCustomData] = useState<ResumeQuery>()
  const [_error, setError] = useState<unknown>()
  const [_isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (hasDataLoadStartedRef.current) {
      return () => {}
    }

    const initEditor = (initData: ResumeQuery) => {
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
          content: { json: initData },
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
    }

    const safeLoadResume = async () => {
      setIsLoading(true)

      try {
        const data = await loadResume()
        setData(data)
        setCustomData(data)

        initEditor(data)
      } catch (error) {
        setError(error)
      }

      setIsLoading(false)
    }

    hasDataLoadStartedRef.current = true
    safeLoadResume()

    return () => {
      return () => {
        if (jsonEditorRef.current) {
          jsonEditorRef.current.destroy()
          jsonEditorRef.current = undefined
        }
      }
    }
  }, [])

  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-row relative">
      <div className="fixed top-0 left-0 right-0 z-10 py-2 bg-white shadow-md flex">
        <h1 className="text-2xl font-bold flex-1">Original data</h1>
        <h1 className="text-2xl font-bold flex-1">Custom data</h1>
      </div>
      <div className="flex-1 h-full overflow-auto">
        <pre className="mt-12">{JSON.stringify(data ?? {}, null, 2)}</pre>
      </div>
      <div className="flex-1 h-full overflow-auto">
        <div className="mt-12" id={JSON_EDITOR_ID} />
      </div>

      <div className="inline-flex fixed bottom-8 right-8">
        {customData && (
          <PDFDownloadLink
            document={<Resume {...customData} />}
            fileName="resume.pdf"
          >
            {({ url, loading }) => (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
                {loading ? 'Loading...' : 'Generate Custom CV'}
              </button>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  )
}

export default App
