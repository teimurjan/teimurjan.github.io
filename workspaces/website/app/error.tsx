'use client'

import { AlertCircle } from 'lucide-react'

export default function ErrorPage({
  reset,
}: {
  error: globalThis.Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="bg-glass border border-glass-border rounded-2xl shadow-glass backdrop-blur-[40px] backdrop-saturate-150 p-8 max-w-md text-center relative z-10">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-foreground mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
