'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  type ReactNode,
  type RefObject,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { HalfFloatType, type Object3D, WebGLRenderTarget } from 'three'
import type { DeskPhase } from '../desk-mode'
import { CameraRig } from './camera-rig'
import { Effects } from './effects'
import { HeroDesk } from './hero-desk/hero-desk'
import { Lighting } from './lighting'
import { PALETTE } from './materials'
import { RoomDecor, RoomFurniture, RoomShell } from './room/room'
import { MAX_PIXEL_RATIO } from './use-adaptive-resolution'

interface DeskSceneProps {
  phase: DeskPhase
  reducedMotion: boolean
  slotRef: RefObject<HTMLDivElement | null>
  crtRef: RefObject<HTMLDivElement | null>
  onReady: () => void
  onIntroDone: () => void
  onUnderpowered: () => void
}

const AMBIENT_FPS = 30
const STAGES = [
  <Lighting key="lighting" />,
  <HeroDesk key="hero-desk" />,
  <RoomShell key="room-shell" />,
  <RoomFurniture key="room-furniture" />,
  <RoomDecor key="room-decor" />,
  <Effects key="effects" />,
]
const WARM_UP_FRAMES = 4

function AmbientTicker() {
  const invalidate = useThree((state) => state.invalidate)

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!document.hidden) invalidate()
    }, 1000 / AMBIENT_FPS)
    return () => window.clearInterval(interval)
  }, [invalidate])

  return null
}

function Staged({ children }: { children: ReactNode }) {
  const [mountedStages, setMountedStages] = useState(0)
  const isComplete = mountedStages === STAGES.length

  useEffect(() => {
    if (isComplete) return
    const timeout = window.setTimeout(
      () => startTransition(() => setMountedStages(mountedStages + 1)),
      0
    )
    return () => window.clearTimeout(timeout)
  }, [isComplete, mountedStages])

  return (
    <>
      {STAGES.slice(0, mountedStages)}
      {isComplete && children}
    </>
  )
}

function ShaderWarmUp({ onWarm }: { onWarm: () => void }) {
  const gl = useThree((state) => state.gl)
  const scene = useThree((state) => state.scene)
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    const isCurrent = { value: true }
    const linearTarget = new WebGLRenderTarget(1, 1, { type: HalfFloatType })
    gl.setRenderTarget(linearTarget)
    const compiled = gl.compileAsync(scene, camera)
    gl.setRenderTarget(null)
    compiled.then(() => {
      linearTarget.dispose()
      if (isCurrent.value) onWarm()
    })
    return () => {
      isCurrent.value = false
    }
  }, [gl, scene, camera, onWarm])

  return null
}

function ReadySignal({ onReady }: { onReady: () => void }) {
  const gl = useThree((state) => state.gl)
  const invalidate = useThree((state) => state.invalidate)
  const renderedFrames = useRef(0)
  const culledObjects = useRef<Object3D[]>([])

  useEffect(() => {
    gl.shadowMap.autoUpdate = false
    gl.shadowMap.needsUpdate = true
  }, [gl])

  useFrame(({ scene }) => {
    renderedFrames.current += 1
    if (renderedFrames.current === 1) {
      scene.traverse((object) => {
        if (!object.frustumCulled) return
        culledObjects.current.push(object)
        object.frustumCulled = false
      })
    }
    if (renderedFrames.current < WARM_UP_FRAMES) {
      gl.shadowMap.needsUpdate = true
      invalidate()
    }
    if (renderedFrames.current === WARM_UP_FRAMES) {
      for (const object of culledObjects.current) object.frustumCulled = true
      onReady()
    }
  })

  return null
}

export function DeskScene({
  phase,
  reducedMotion,
  slotRef,
  crtRef,
  onReady,
  onIntroDone,
  onUnderpowered,
}: DeskSceneProps) {
  const [isWarm, setIsWarm] = useState(false)
  const handleWarm = useCallback(() => setIsWarm(true), [])

  return (
    <Canvas
      flat
      shadows="percentage"
      frameloop={isWarm ? 'demand' : 'never'}
      dpr={[1, MAX_PIXEL_RATIO]}
      gl={{
        antialias: false,
        alpha: false,
        stencil: false,
        powerPreference: 'high-performance',
        toneMappingExposure: 1.05,
      }}
      camera={{ manual: true, fov: 44, near: 0.04, far: 60, position: [-0.4, 1.15, 0.9] }}
      style={{ pointerEvents: 'none' }}
    >
      <color attach="background" args={[PALETTE.night]} />
      <fogExp2 attach="fog" args={[PALETTE.fog, 0.035]} />
      <CameraRig
        phase={phase}
        reducedMotion={reducedMotion}
        slotRef={slotRef}
        crtRef={crtRef}
        onIntroDone={onIntroDone}
        onUnderpowered={onUnderpowered}
      />
      <Staged>
        <ShaderWarmUp onWarm={handleWarm} />
      </Staged>
      {!reducedMotion && <AmbientTicker />}
      <ReadySignal onReady={onReady} />
    </Canvas>
  )
}
