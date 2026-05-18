import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative z-[2] min-h-screen grid place-items-center p-6">
      <div className="border-[1.5px] border-ink bg-paper-2 shadow-hard p-8 max-w-[420px] text-center">
        <h1 className="m-0 mb-2 text-2xl font-bold">404 — Not Found</h1>
        <p className="text-ink-dim m-0 mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button as={Link} href="/">
          Go home
        </Button>
      </div>
    </main>
  )
}
