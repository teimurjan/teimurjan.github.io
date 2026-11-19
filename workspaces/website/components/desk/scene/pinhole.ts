import type { CameraPose } from './framing'
import type { Vec3 } from './layout'
import type { Point2 } from './rounded-rect'

const WORLD_UP: Vec3 = [0, 1, 0]

const subtract = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]

const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]

const normalize = (vector: Vec3): Vec3 => {
  const length = Math.hypot(...vector)
  return [vector[0] / length, vector[1] / length, vector[2] / length]
}

export const projectorFor = (pose: CameraPose) => {
  const forward = normalize(subtract(pose.target, pose.position))
  const right = normalize(cross(forward, WORLD_UP))
  const up = cross(right, forward)
  const viewportHeightsPerSlope = 0.5 / Math.tan((pose.fov * Math.PI) / 360)

  return (point: Vec3): Point2 => {
    const offset = subtract(point, pose.position)
    const depth = dot(offset, forward)
    return [
      (dot(offset, right) / depth) * viewportHeightsPerSlope,
      (-dot(offset, up) / depth) * viewportHeightsPerSlope,
    ]
  }
}
