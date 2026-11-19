import { Euler, Quaternion, Vector3 } from 'three'
import type { Placement } from './instanced-placements'
import type { Vec3 } from './layout'
import { between, seededRandom } from './random'

export interface FoliageSpec {
  seed: number
  leafCount: number
  baseHeight: number
  stemLength: readonly [min: number, max: number]
  lean: readonly [min: number, max: number]
  leafSize: Vec3
}

interface Foliage {
  stems: Placement[]
  leaves: Placement[]
}

const GOLDEN_ANGLE = 2.39996
const UP = new Vector3(0, 1, 0)
const FORWARD = new Vector3(0, 0, 1)

const eulerTowards = (from: Vector3, direction: Vector3): Vec3 => {
  const euler = new Euler().setFromQuaternion(new Quaternion().setFromUnitVectors(from, direction))
  return [euler.x, euler.y, euler.z]
}

export const growFoliage = ({
  seed,
  leafCount,
  baseHeight,
  stemLength,
  lean,
  leafSize,
}: FoliageSpec): Foliage => {
  const random = seededRandom(seed)
  const sprigs = Array.from({ length: leafCount }, (_, index) => {
    const azimuth = index * GOLDEN_ANGLE + between(random, -0.3, 0.3)
    const tilt = between(random, lean[0], lean[1])
    const length = between(random, stemLength[0], stemLength[1])
    const direction = new Vector3(
      Math.sin(tilt) * Math.cos(azimuth),
      Math.cos(tilt),
      Math.sin(tilt) * Math.sin(azimuth)
    )
    const droop = direction
      .clone()
      .setY(direction.y - 0.55)
      .normalize()
    const size = between(random, 0.75, 1.15)
    const tip = direction
      .clone()
      .multiplyScalar(length)
      .setY(direction.y * length + baseHeight)
    return { direction, droop, length, size, tip }
  })

  return {
    stems: sprigs.map(({ direction, length }) => ({
      position: [
        (direction.x * length) / 2,
        baseHeight + (direction.y * length) / 2,
        (direction.z * length) / 2,
      ],
      rotation: eulerTowards(UP, direction),
      scale: [1, length, 1],
    })),
    leaves: sprigs.map(({ droop, size, tip }) => ({
      position: [
        tip.x + droop.x * leafSize[2] * size * 0.8,
        tip.y + droop.y * leafSize[2] * size * 0.8,
        tip.z + droop.z * leafSize[2] * size * 0.8,
      ],
      rotation: eulerTowards(FORWARD, droop),
      scale: [leafSize[0] * size, leafSize[1], leafSize[2] * size],
    })),
  }
}
