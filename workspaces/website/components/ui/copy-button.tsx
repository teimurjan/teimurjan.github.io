'use client'

import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface CopyButtonProps {
  text: string
  label?: string
  ariaLabel?: string
  className?: string
}

export function CopyButton({ text, label = 'Copy', ariaLabel, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.warn('Failed to copy to clipboard', err)
    }
  }, [text])

  const Icon = copied ? Check : Copy
  const visibleLabel = label ? (copied ? 'Copied' : label) : undefined

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel ?? (label ? `Copy ${label}` : 'Copy as markdown')}
      className={cn(
        'inline-flex items-center gap-2 text-sm text-foreground cursor-pointer',
        label ? 'px-3 py-2' : 'p-2 text-muted-foreground hover:text-foreground',
        className
      )}
    >
      <Icon className="w-4 h-4" />
      {visibleLabel}
    </button>
  )
}
