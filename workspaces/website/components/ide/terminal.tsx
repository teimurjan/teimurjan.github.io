'use client'

import { usePortfolioQA } from '@/hooks/use-portfolio-qa'
import type { FolderStructure } from '@/lib/sections'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp, Loader2, Terminal as TerminalIcon } from 'lucide-react'
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'

const exampleQuestions = [
  "What's Teimur's experience with React?",
  'What languages does Teimur know?',
  'Where did Teimur study?',
  'What projects has Teimur contributed to?',
]

interface Message {
  type: 'question' | 'answer'
  text: string
}

interface TerminalProps {
  folders: FolderStructure[]
  fullName: string
}

export function Terminal({ folders, fullName }: TerminalProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { loadModel, ask, status, progress, error, streamingResponse, isGenerating } =
    usePortfolioQA({ folders, fullName })

  useEffect(() => {
    loadModel()
  }, [loadModel])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, streamingResponse])

  const handleSubmit = useCallback(async () => {
    const question = input.trim()
    if (!question || isGenerating || status !== 'ready') return

    setInput('')
    setMessages((prev) => [...prev, { type: 'question', text: question }])

    await ask(question)
  }, [input, isGenerating, status, ask])

  useEffect(() => {
    if (!isGenerating && streamingResponse) {
      setMessages((prev) => [...prev, { type: 'answer', text: streamingResponse }])
    }
  }, [isGenerating, streamingResponse])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  const handleExampleClick = useCallback(
    async (question: string) => {
      if (isGenerating || status !== 'ready') return

      setMessages((prev) => [...prev, { type: 'question', text: question }])
      await ask(question)
    },
    [isGenerating, status, ask]
  )

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleToggle = useCallback(() => {
    if (status === 'ready') {
      setIsExpanded((prev) => !prev)
    }
  }, [status])

  const isDisabled = status !== 'ready'

  return (
    <div
      className={cn(
        'bg-glass border border-glass-border rounded-2xl shadow-glass backdrop-blur-[40px] backdrop-saturate-150',
        'flex flex-col overflow-hidden transition-all duration-300',
        isExpanded ? 'h-64' : 'h-10'
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        disabled={isDisabled && status !== 'loading'}
        className={cn(
          'flex items-center justify-between px-4 py-2 border-b border-border/30 transition-colors',
          isDisabled ? 'cursor-not-allowed opacity-70' : 'hover:bg-secondary/30'
        )}
      >
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Whoami</span>

          {status === 'idle' && (
            <span className="text-xs text-muted-foreground">Initializing...</span>
          )}

          {status === 'loading' && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              Loading ({progress}%)
            </span>
          )}

          {status === 'ready' && (
            <span className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Ready
            </span>
          )}

          {status === 'error' && (
            <span className="text-xs text-destructive">{error || 'Not available'}</span>
          )}

          {status === 'unsupported' && (
            <span className="text-xs text-muted-foreground">Unavailable (WebGPU not supported)</span>
          )}
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <div className="flex-1 flex flex-col min-h-0" onClick={focusInput}>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2">
            {messages.length === 0 && !isGenerating ? (
              <div className="space-y-2">
                <p className="text-muted-foreground">Try asking:</p>
                <div className="flex flex-col items-start gap-2">
                  {exampleQuestions.map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => handleExampleClick(q)}
                      disabled={isGenerating}
                      className="text-xs py-0.5 rounded-md bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={`${msg.type}-${i}`}
                    className={cn(
                      msg.type === 'question'
                        ? 'text-primary'
                        : 'text-foreground whitespace-pre-wrap'
                    )}
                  >
                    {msg.type === 'question' ? (
                      <span>
                        <span className="text-syntax-keyword">❯</span> {msg.text}
                      </span>
                    ) : (
                      msg.text
                    )}
                  </div>
                ))}
                {isGenerating && streamingResponse && (
                  <div className="text-foreground whitespace-pre-wrap">
                    {streamingResponse}
                    <span className="animate-pulse">▋</span>
                  </div>
                )}
              </>
            )}
            {isGenerating && !streamingResponse && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border-t border-border/30">
            <span className="text-syntax-keyword font-mono">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isGenerating}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent outline-none text-sm font-mono placeholder:text-muted-foreground disabled:opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  )
}
