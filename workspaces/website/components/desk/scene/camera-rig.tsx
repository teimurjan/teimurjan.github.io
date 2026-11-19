'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { type RefObject, useEffect, useRef } from 'react'
import { type PerspectiveCamera, Vector3 } from 'three'
import { type DeskPhase, INTRO } from '../desk-mode'
import { type CameraPose, type Framing, type Pointer, poseAt, rasterCorners } from './framing'
import { type Point, type Quad, quadToQuadMatrix3d } from './projective'
import { useAdaptiveResolution } from './use-adaptive-resolution'

interface CameraRigProps {
  phase: DeskPhase
  reducedMotion: boolean
  slotRef: RefObject<HTMLDivElement | null>
  crtRef: RefObject<HTMLDivElement | null>
  onIntroDone: () => void
  onUnderpowered: () => void
}

interface Travel {
  from: number
  to: number
  startedAt: number | null
  delay: number
  duration: number
  progress: number
}

interface SlotRect {
  left: number
  top: number
  width: number
  height: number
}

interface Measurement {
  framing: Framing
  slot: SlotRect
}

const TOGGLE_DURATION = 1.5
const SETTLE_DURATION = 0.45
const POINTER_STIFFNESS = 5
const POINTER_REST = 0.0005
const MAX_FRAME_STEP = 0.05
const CORNERS = rasterCorners().map((corner) => new Vector3(...corner))
const CENTERED: Pointer = { x: 0, y: 0 }
const RESTING: Travel = { from: 0, to: 0, startedAt: null, delay: 0, duration: 0, progress: 0 }
const IDLE_SWAY = { x: 0.22, y: 0.16, speedX: 0.19, speedY: 0.13 } as const

const easeInOut = (ratio: number) => (ratio < 0.5 ? 4 * ratio ** 3 : 1 - (-2 * ratio + 2) ** 3 / 2)

const travelFor = (phase: DeskPhase, previous: DeskPhase, progress: number): Travel => {
  const to = phase === 'focused' || phase === 'intro' ? 1 : 0
  const base = { from: progress, to, startedAt: null, progress }
  if (phase === 'intro') {
    return { ...base, delay: INTRO.holdSeconds, duration: INTRO.travelSeconds }
  }
  if (phase === 'focused' && previous !== 'overview') {
    return { ...base, delay: 0, duration: SETTLE_DURATION }
  }
  return { ...base, delay: 0, duration: TOGGLE_DURATION }
}

const advance = (travel: Travel, now: number): Travel => {
  const startedAt = travel.startedAt ?? now
  const elapsed = now - startedAt - travel.delay
  const ratio = travel.duration === 0 ? 1 : Math.min(Math.max(elapsed / travel.duration, 0), 1)
  const progress =
    ratio === 1 ? travel.to : travel.from + (travel.to - travel.from) * easeInOut(ratio)
  return { ...travel, startedAt, progress }
}

const measure = (slotElement: HTMLElement, canvas: HTMLElement): Measurement => {
  const slotRect = slotElement.getBoundingClientRect()
  const canvasRect = canvas.getBoundingClientRect()
  const slot = {
    left: slotRect.left - canvasRect.left,
    top: slotRect.top - canvasRect.top,
    width: slotRect.width,
    height: slotRect.height,
  }
  return {
    slot,
    framing: {
      viewportWidth: canvasRect.width,
      viewportHeight: canvasRect.height,
      slotCenterX: slot.left + slot.width / 2,
      slotCenterY: slot.top + slot.height / 2,
      slotHeight: slot.height,
    },
  }
}

const easePointer = (current: Pointer, goal: Pointer, delta: number) => {
  const gapX = goal.x - current.x
  const gapY = goal.y - current.y
  if (Math.abs(gapX) < POINTER_REST && Math.abs(gapY) < POINTER_REST) {
    return { pointer: goal, isDrifting: false }
  }
  const blend = 1 - Math.exp(-Math.min(delta, MAX_FRAME_STEP) * POINTER_STIFFNESS)
  return {
    pointer: { x: current.x + gapX * blend, y: current.y + gapY * blend },
    isDrifting: true,
  }
}

const idleSway = (time: number, amount: number): Pointer => ({
  x: Math.sin(time * IDLE_SWAY.speedX) * IDLE_SWAY.x * amount,
  y: Math.sin(time * IDLE_SWAY.speedY) * IDLE_SWAY.y * amount,
})

const applyPose = (camera: PerspectiveCamera, pose: CameraPose, framing: Framing) => {
  const { viewportWidth, viewportHeight } = framing
  camera.fov = pose.fov
  camera.aspect = viewportWidth / viewportHeight
  camera.position.set(...pose.position)
  camera.lookAt(...pose.target)
  camera.setViewOffset(
    viewportWidth,
    viewportHeight,
    pose.viewOffsetX,
    pose.viewOffsetY,
    viewportWidth,
    viewportHeight
  )
  camera.updateMatrixWorld()
}

const rasterTransform = (camera: PerspectiveCamera, { framing, slot }: Measurement): string => {
  const projected = new Vector3()
  const toSlotPoint = (corner: Vector3): Point => {
    projected.copy(corner).project(camera)
    return [
      ((projected.x + 1) / 2) * framing.viewportWidth - slot.left,
      ((1 - projected.y) / 2) * framing.viewportHeight - slot.top,
    ]
  }
  const flat: Quad = [
    [0, 0],
    [slot.width, 0],
    [0, slot.height],
    [slot.width, slot.height],
  ]
  const [topLeft, topRight, bottomLeft, bottomRight] = CORNERS.map(toSlotPoint)
  return quadToQuadMatrix3d(flat, [topLeft, topRight, bottomLeft, bottomRight])
}

export function CameraRig({
  phase,
  reducedMotion,
  slotRef,
  crtRef,
  onIntroDone,
  onUnderpowered,
}: CameraRigProps) {
  const camera = useThree((state) => state.camera) as PerspectiveCamera
  const canvas = useThree((state) => state.gl.domElement)
  const size = useThree((state) => state.size)
  const invalidate = useThree((state) => state.invalidate)
  const resolution = useAdaptiveResolution(onUnderpowered)

  const measurement = useRef<Measurement | null>(null)
  const travel = useRef<Travel>(RESTING)
  const previousPhase = useRef<DeskPhase>(phase)
  const pointerGoal = useRef<Pointer>(CENTERED)
  const pointer = useRef<Pointer>(CENTERED)
  const appliedTransform = useRef('')

  useEffect(() => {
    const next = travelFor(phase, previousPhase.current, travel.current.progress)
    travel.current = reducedMotion ? { ...next, delay: 0, duration: 0 } : next
    previousPhase.current = phase
    invalidate()
  }, [phase, reducedMotion, invalidate])

  useEffect(() => {
    const slotElement = slotRef.current
    if (!slotElement || size.width === 0) return
    measurement.current = measure(slotElement, canvas)
    invalidate()
  }, [size, slotRef, canvas, invalidate])

  useEffect(() => {
    const crt = crtRef.current
    return () => {
      if (crt) crt.style.transform = ''
    }
  }, [crtRef])

  useEffect(() => {
    if (reducedMotion) return
    const onPointerMove = (event: PointerEvent) => {
      pointerGoal.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: 1 - (event.clientY / window.innerHeight) * 2,
      }
      invalidate()
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [reducedMotion, invalidate])

  useFrame(({ clock }, delta) => {
    const crt = crtRef.current
    if (!measurement.current || !crt) return

    const wasTravelling = travel.current.progress !== travel.current.to
    travel.current = advance(travel.current, clock.elapsedTime)
    const { progress } = travel.current
    const isTravelling = progress !== travel.current.to
    if (wasTravelling && isTravelling) resolution.recordFrame(delta)
    if (wasTravelling && !isTravelling) resolution.settle()

    const isArriving = phase === 'loading' || phase === 'intro'
    const eased = isArriving
      ? { pointer: CENTERED, isDrifting: false }
      : easePointer(pointer.current, pointerGoal.current, delta)
    pointer.current = eased.pointer
    const sway = idleSway(clock.elapsedTime, reducedMotion || isArriving ? 0 : 1 - progress)
    const gaze = { x: pointer.current.x + sway.x, y: pointer.current.y + sway.y }
    applyPose(
      camera,
      poseAt(measurement.current.framing, progress, gaze),
      measurement.current.framing
    )

    const transform = progress === 1 ? '' : rasterTransform(camera, measurement.current)
    if (transform !== appliedTransform.current) {
      crt.style.transform = transform
      appliedTransform.current = transform
    }

    if (wasTravelling && !isTravelling && phase === 'intro') onIntroDone()
    if (isTravelling || eased.isDrifting) invalidate()
  })

  return null
}
