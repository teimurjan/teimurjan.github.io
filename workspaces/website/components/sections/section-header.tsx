import { CopyButton } from '@/components/ui/copy-button'

interface SectionHeaderProps {
  title: string
  markdown: string
}

export function SectionHeader({ title, markdown }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      <CopyButton text={markdown} ariaLabel={`Copy ${title} as markdown`} />
    </div>
  )
}
