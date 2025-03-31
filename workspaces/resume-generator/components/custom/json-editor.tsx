'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import {
  JSONEditor,
  Mode,
  OnChange,
  Content,
} from 'vanilla-jsoneditor/standalone.js'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

export interface Props {
  content: Content
  onChange?: OnChange
  className?: string
  mode?: Mode
}

export interface JsonEditorRef {
  setTextMode: () => void
  setTreeMode: () => void
}

const JsonEditorComponent = forwardRef<JsonEditorRef, Props>(
  ({ content, onChange, className, mode = Mode.tree }, ref) => {
    const jsonEditorRef = useRef<JSONEditor>()
    const containerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(
      ref,
      () => ({
        setTextMode: () => {
          if (jsonEditorRef.current) {
            jsonEditorRef.current.updateProps({ mode: Mode.text })
          }
        },
        setTreeMode: () => {
          if (jsonEditorRef.current) {
            jsonEditorRef.current.updateProps({ mode: Mode.tree })
          }
        },
      }),
      [],
    )

    useEffect(() => {
      if (typeof document === 'undefined' || !containerRef.current) {
        return
      }

      jsonEditorRef.current = new JSONEditor({
        target: containerRef.current,
        props: {
          mode,
          mainMenuBar: false,
          navigationBar: false,
          content,
          onChange,
        },
      })

      return () => {
        if (jsonEditorRef.current) {
          jsonEditorRef.current.destroy()
          jsonEditorRef.current = undefined
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div ref={containerRef} className={className} />
  },
)

JsonEditorComponent.displayName = 'JsonEditor'

export const JsonEditor = JsonEditorComponent
