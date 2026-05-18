'use client'

import { Button } from '@/components/ui/button'

export default function ErrorPage({
  reset,
}: {
  error: globalThis.Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="relative z-[2] min-h-screen grid place-items-center p-6">
      <div className="border-[1.5px] border-ink bg-paper-2 shadow-hard p-8 max-w-[420px] text-center">
        <h1 className="m-0 mb-2 text-2xl font-bold">Something went wrong</h1>
        <p className="text-ink-dim m-0 mb-6">An unexpected error occurred. Please try again.</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </main>
  )
}
