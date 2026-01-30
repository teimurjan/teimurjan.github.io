'use client'

import { usePortfolioQA } from '@/hooks/use-portfolio-qa'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp, Loader2, Terminal as TerminalIcon } from 'lucide-react'
import { type KeyboardEvent, useCallback, useRef, useState } from 'react'

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

export function Terminal() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const { ask, isLoading, isModelLoading } = usePortfolioQA()

  const handleSubmit = useCallback(async () => {
    const question = input.trim()
    if (!question || isLoading) return

    setInput('')
    setMessages((prev) => [...prev, { type: 'question', text: question }])

    const answer = await ask(question)
    setMessages((prev) => [...prev, { type: 'answer', text: answer }])
  }, [input, isLoading, ask])

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
      if (isLoading) return

      setMessages((prev) => [...prev, { type: 'question', text: question }])
      const answer = await ask(question)
      setMessages((prev) => [...prev, { type: 'answer', text: answer }])
    },
    [isLoading, ask]
  )

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

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
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between px-4 py-2 border-b border-border/30 hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Whoami</span>
          {isModelLoading && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              Loading model...
            </span>
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
          <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2">
            {messages.length === 0 ? (
              <div className="space-y-2">
                <p className="text-muted-foreground">Try asking:</p>
                <div className="flex flex-col items-start gap-2">
                  {exampleQuestions.map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => handleExampleClick(q)}
                      disabled={isLoading}
                      className="text-xs py-0.5 rounded-md bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={`${msg.type}-${i}`}
                  className={cn(
                    msg.type === 'question' ? 'text-primary' : 'text-foreground whitespace-pre-wrap'
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
              ))
            )}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Searching...</span>
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
              disabled={isLoading}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent outline-none text-sm font-mono placeholder:text-muted-foreground disabled:opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  )
}
