'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import {
  type Content,
  JSONEditor,
  type Mode,
  type OnChange,
} from 'vanilla-jsoneditor/standalone.js'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

export interface Props {
  content: Content
  onChange?: OnChange
  className?: string
  mode?: Mode
}

export interface JsonEditorRef {
  getMode: () => Mode
  setMode: (mode: Mode) => void
}

const JsonEditorComponent = forwardRef<JsonEditorRef, Props>(
  ({ content, onChange, className, mode }, ref) => {
    const jsonEditorRef = useRef<JSONEditor>()
    const containerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(
      ref,
      () => ({
        getMode: () => {
          if (jsonEditorRef.current) {
            return jsonEditorRef.current.mode
          }

          return mode
        },
        setMode: (mode: Mode) => {
          if (jsonEditorRef.current) {
            jsonEditorRef.current.updateProps({ mode })
          }
        },
      }),
      [mode]
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
  }
)

JsonEditorComponent.displayName = 'JsonEditor'

export const JsonEditor = JsonEditorComponent
