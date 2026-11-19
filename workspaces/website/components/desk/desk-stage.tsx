'use client'

import { useMediaQuery } from '@/lib/use-media-query'
import dynamic from 'next/dynamic'
import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import { BootSplash } from './boot-splash'
import {
  DESK_MEDIA_QUERY,
  type DeskPhase,
  INTRO,
  REDUCED_MOTION_QUERY,
  applyDeskAttribute,
  canRenderDesk,
} from './desk-mode'
import { SceneBoundary } from './scene-boundary'
import { StageControls } from './stage-controls'

const DeskScene = dynamic(() => import('./scene/desk-scene').then((scene) => scene.DeskScene), {
  ssr: false,
})

interface DeskStageProps {
  siteName: string
  loader: ReactNode
  children: ReactNode
}

type StageEvent = 'sceneReady' | 'introFinished' | 'viewToggled' | 'reset'

const BOOT_TIMEOUT_MS = 6000
const SKIP_INTRO_EVENTS = ['keydown', 'pointerdown', 'wheel'] as const
const INTRO_TIMING = {
  '--intro-reveal': `${INTRO.holdSeconds + INTRO.travelSeconds * INTRO.revealAt}s`,
} as CSSProperties

const NEXT_PHASE: Record<StageEvent, Partial<Record<DeskPhase, DeskPhase>>> = {
  sceneReady: { loading: 'intro' },
  introFinished: { intro: 'focused' },
  viewToggled: { focused: 'overview', overview: 'focused' },
  reset: { intro: 'loading', focused: 'loading', overview: 'loading' },
}

const reducePhase = (phase: DeskPhase, event: StageEvent): DeskPhase =>
  NEXT_PHASE[event][phase] ?? phase

export function DeskStage({ siteName, loader, children }: DeskStageProps) {
  const matchesDesk = useMediaQuery(DESK_MEDIA_QUERY)
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const [hasFailed, setHasFailed] = useState(false)
  const [phase, dispatch] = useReducer(reducePhase, 'loading')
  const slotRef = useRef<HTMLDivElement>(null)
  const crtRef = useRef<HTMLDivElement>(null)

  const isEnabled = matchesDesk && !hasFailed && canRenderDesk()
  const isBooting = phase === 'loading' || phase === 'intro'

  const handleSceneReady = useCallback(() => dispatch('sceneReady'), [])
  const handleIntroDone = useCallback(() => dispatch('introFinished'), [])
  const handleToggle = useCallback(() => dispatch('viewToggled'), [])
  const handleFailure = useCallback(() => setHasFailed(true), [])

  useEffect(() => {
    if (isEnabled) applyDeskAttribute(phase === 'loading' ? 'boot' : 'on')
  }, [isEnabled, phase])

  useEffect(() => {
    if (!isEnabled) return
    return () => {
      applyDeskAttribute(null)
      dispatch('reset')
    }
  }, [isEnabled])

  useEffect(() => {
    if (crtRef.current) crtRef.current.inert = isEnabled && phase !== 'focused'
  }, [isEnabled, phase])

  useEffect(() => {
    if (!isEnabled || phase !== 'loading') return
    const timeout = window.setTimeout(handleFailure, BOOT_TIMEOUT_MS)
    return () => window.clearTimeout(timeout)
  }, [isEnabled, phase, handleFailure])

  useEffect(() => {
    if (!isEnabled || phase !== 'intro') return
    const skipIntro = () => dispatch('introFinished')
    for (const eventName of SKIP_INTRO_EVENTS) {
      window.addEventListener(eventName, skipIntro, { passive: true })
    }
    return () => {
      for (const eventName of SKIP_INTRO_EVENTS) window.removeEventListener(eventName, skipIntro)
    }
  }, [isEnabled, phase])

  return (
    <>
      {isEnabled && (
        <div className="desk-canvas" data-ready={phase !== 'loading'} aria-hidden="true">
          <SceneBoundary onError={handleFailure}>
            <DeskScene
              phase={phase}
              reducedMotion={prefersReducedMotion}
              slotRef={slotRef}
              crtRef={crtRef}
              onReady={handleSceneReady}
              onIntroDone={handleIntroDone}
              onUnderpowered={handleFailure}
            />
          </SceneBoundary>
        </div>
      )}
      {loader}
      <div
        className="crt-slot"
        ref={slotRef}
        data-phase={isEnabled ? phase : undefined}
        style={INTRO_TIMING}
      >
        <div className="crt" ref={crtRef}>
          {children}
          {isEnabled && <BootSplash siteName={siteName} isVisible={isBooting} />}
          {isEnabled && <div className="crt-glass" aria-hidden="true" />}
        </div>
      </div>
      {isEnabled && !isBooting && (
        <StageControls isSteppedBack={phase === 'overview'} onToggle={handleToggle} />
      )}
    </>
  )
}
