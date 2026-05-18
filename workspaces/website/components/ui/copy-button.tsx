'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from './button'
import { IconCheck, IconCopy } from './sketch-icons'

interface CopyButtonProps {
  text: string
  label?: string
  ariaLabel?: string
  variant?: 'ghost' | 'solid' | 'naked'
  className?: string
}

export function CopyButton({
  text,
  label,
  ariaLabel,
  variant = 'ghost',
  className,
}: CopyButtonProps) {
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

  const Icon = copied ? IconCheck : IconCopy
  const visibleLabel = label ? (copied ? 'Copied!' : label) : null

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      aria-label={ariaLabel ?? (label ? `Copy ${label}` : 'Copy as markdown')}
      className={className}
    >
      <Icon size={14} />
      {visibleLabel}
    </Button>
  )
}
