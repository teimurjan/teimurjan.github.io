import { FileQuestion } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="bg-glass border border-glass-border rounded-2xl shadow-glass backdrop-blur-[40px] backdrop-saturate-150 p-8 max-w-md text-center relative z-10">
        <FileQuestion className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-foreground mb-2">404 — Not Found</h1>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go home
        </Link>
      </div>
    </main>
  )
}
