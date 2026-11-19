import {
  BufferGeometry,
  CatmullRomCurve3,
  Float32BufferAttribute,
  Path,
  Shape,
  ShapeGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from 'three'
import type { Vec3 } from './layout'
import { type RoundedRect, insetRect, roundedRectPoints } from './rounded-rect'

export interface LoftRing {
  outline: Vector2[]
  z: number
}

export const roundedRectOutline = (rect: RoundedRect, cornerSegments?: number): Vector2[] =>
  roundedRectPoints(rect, cornerSegments).map(([x, y]) => new Vector2(x, y))

export const loftGeometry = (rings: LoftRing[], facing: 'out' | 'in' = 'out'): BufferGeometry => {
  const ordered = facing === 'out' ? rings : [...rings].reverse()
  const ringSize = ordered[0].outline.length
  const positions = ordered.flatMap(({ outline, z }) =>
    outline.flatMap((point) => [point.x, point.y, z])
  )
  const indices = ordered.slice(0, -1).flatMap((_, ringIndex) =>
    Array.from({ length: ringSize }, (_, pointIndex) => {
      const near = ringIndex * ringSize + pointIndex
      const nearNext = ringIndex * ringSize + ((pointIndex + 1) % ringSize)
      const far = near + ringSize
      const farNext = nearNext + ringSize
      return [near, far, nearNext, nearNext, far, farNext]
    }).flat()
  )
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return geometry
}

export const roundOverRings = (
  rect: RoundedRect,
  faceZ: number,
  radius: number,
  steps = 5
): LoftRing[] => [
  { outline: roundedRectOutline(insetRect(rect, radius * 1.25)), z: faceZ },
  ...Array.from({ length: steps + 1 }, (_, step) => {
    const angle = (step / steps) * (Math.PI / 2)
    return {
      outline: roundedRectOutline(insetRect(rect, radius * (1 - Math.sin(angle)))),
      z: faceZ - radius * (1 - Math.cos(angle)),
    }
  }),
]

export const plateGeometry = (outline: Vector2[], hole?: Vector2[]): ShapeGeometry => {
  const shape = new Shape(outline)
  if (hole) shape.holes.push(new Path(hole))
  return new ShapeGeometry(shape)
}

const spineThrough = (path: readonly Vec3[]) =>
  new CatmullRomCurve3(path.map((point) => new Vector3(...point)))

export const cableGeometry = (path: readonly Vec3[], radius: number, segments = 48) =>
  new TubeGeometry(spineThrough(path), segments, radius, 6)

export const coiledCableGeometry = (
  path: readonly Vec3[],
  { coilRadius, wireRadius, turns }: { coilRadius: number; wireRadius: number; turns: number }
) => {
  const samplesPerTurn = 10
  const sampleCount = turns * samplesPerTurn
  const spine = spineThrough(path)
  const frames = spine.computeFrenetFrames(sampleCount, false)
  const coil = Array.from({ length: sampleCount + 1 }, (_, sample) => {
    const angle = (sample / samplesPerTurn) * Math.PI * 2
    const easeAtEnds = Math.min(1, sample / samplesPerTurn, (sampleCount - sample) / samplesPerTurn)
    return spine
      .getPointAt(sample / sampleCount)
      .addScaledVector(frames.normals[sample], Math.cos(angle) * coilRadius * easeAtEnds)
      .addScaledVector(frames.binormals[sample], Math.sin(angle) * coilRadius * easeAtEnds)
  })
  return new TubeGeometry(new CatmullRomCurve3(coil), sampleCount * 2, wireRadius, 5)
}
