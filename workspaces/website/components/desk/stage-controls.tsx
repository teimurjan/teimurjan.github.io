import { Button } from '@/components/ui/button'
import { IconSitDown, IconStepBack } from '@/components/ui/sketch-icons'

interface StageControlsProps {
  isSteppedBack: boolean
  onToggle: () => void
}

export function StageControls({ isSteppedBack, onToggle }: StageControlsProps) {
  return (
    <>
      {isSteppedBack && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={onToggle}
          className="fixed inset-0 z-[3] cursor-zoom-in border-0 bg-transparent p-0"
        />
      )}
      <Button
        variant="ghost"
        onClick={onToggle}
        className="fixed right-5 bottom-5 z-[4] bg-paper-2/85 text-ink-dim hover:text-ink animate-fade-in"
      >
        {isSteppedBack ? <IconSitDown size={13} /> : <IconStepBack size={13} />}
        {isSteppedBack ? 'sit down' : 'step back'}
      </Button>
    </>
  )
}
