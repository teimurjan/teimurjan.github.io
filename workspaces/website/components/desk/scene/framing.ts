import { SCREEN_CENTER, type Vec3 } from './layout'
import { MAC } from './macintosh/dimensions'

export interface Framing {
  viewportWidth: number
  viewportHeight: number
  slotCenterX: number
  slotCenterY: number
  slotHeight: number
}

export interface Pointer {
  x: number
  y: number
}

export interface CameraPose {
  position: Vec3
  target: Vec3
  fov: number
  viewOffsetX: number
  viewOffsetY: number
}

const FOCUS = {
  fov: 38,
  headShiftX: 0.011,
  headShiftY: 0.007,
} as const

const OVERVIEW = {
  fov: 44,
  distance: 0.94,
  yaw: -0.46,
  pitch: 0.2,
  yawSwing: 0.1,
  pitchSwing: 0.05,
  targetX: 0.015,
  targetY: -0.045,
  viewOffsetX: 0,
  viewOffsetY: -0.1,
} as const

const toRadians = (degrees: number) => (degrees * Math.PI) / 180

const mix = (from: number, to: number, amount: number) => from + (to - from) * amount

const pixelsPerMeter = ({ slotHeight }: Framing) => slotHeight / MAC.raster.height

const focusDistance = (framing: Framing) =>
  framing.viewportHeight / 2 / (pixelsPerMeter(framing) * Math.tan(toRadians(FOCUS.fov) / 2))

export const poseAt = (framing: Framing, progress: number, pointer: Pointer): CameraPose => {
  const roam = 1 - progress
  const [screenX, screenY, screenZ] = SCREEN_CENTER
  const distance = OVERVIEW.distance * (focusDistance(framing) / OVERVIEW.distance) ** progress
  const yaw = (OVERVIEW.yaw + pointer.x * OVERVIEW.yawSwing) * roam
  const pitch = (OVERVIEW.pitch + pointer.y * OVERVIEW.pitchSwing) * roam
  const headShiftX = pointer.x * FOCUS.headShiftX * progress
  const headShiftY = pointer.y * FOCUS.headShiftY * progress

  const eyeX = screenX + distance * Math.sin(yaw) * Math.cos(pitch) + headShiftX
  const eyeY = screenY + distance * Math.sin(pitch) + headShiftY
  const eyeZ = screenZ + distance * Math.cos(yaw) * Math.cos(pitch)

  const scale = pixelsPerMeter(framing)
  const focusOffsetX = framing.viewportWidth / 2 - headShiftX * scale - framing.slotCenterX
  const focusOffsetY = framing.viewportHeight / 2 + headShiftY * scale - framing.slotCenterY

  return {
    position: [eyeX, eyeY, eyeZ],
    target: [
      mix(screenX + OVERVIEW.targetX, eyeX, progress),
      mix(screenY + OVERVIEW.targetY, eyeY, progress),
      screenZ,
    ],
    fov: mix(OVERVIEW.fov, FOCUS.fov, progress),
    viewOffsetX: mix(OVERVIEW.viewOffsetX * framing.viewportWidth, focusOffsetX, progress),
    viewOffsetY: mix(OVERVIEW.viewOffsetY * framing.viewportHeight, focusOffsetY, progress),
  }
}

export const rasterCorners = (): Vec3[] => {
  const [x, y, z] = SCREEN_CENTER
  const halfWidth = MAC.raster.width / 2
  const halfHeight = MAC.raster.height / 2
  return [
    [x - halfWidth, y + halfHeight, z],
    [x + halfWidth, y + halfHeight, z],
    [x - halfWidth, y - halfHeight, z],
    [x + halfWidth, y - halfHeight, z],
  ]
}
