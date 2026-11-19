import type { BufferGeometry } from 'three'
import {
  type LoftRing,
  loftGeometry,
  plateGeometry,
  roundOverRings,
  roundedRectOutline,
} from '../geometry'
import { type RoundedRect, insetRect } from '../rounded-rect'
import { MAC } from './dimensions'
import {
  FACE_Z,
  REAR_FRONT_Z,
  SLAB_BACK_Z,
  bodyRect,
  rearRectAt,
  rearZAt,
  seamRect,
} from './profile'

const { body, opening, glass } = MAC

const LIP = 0.0009
const REAR_STEPS = [0, 0.12, 0.3, 0.55, 0.8, 1]

const openingLipRect = insetRect(opening, -LIP)

const ring = (rect: RoundedRect, z: number): LoftRing => ({ outline: roundedRectOutline(rect), z })

const creased = (rect: RoundedRect, z: number): LoftRing[] => [ring(rect, z), ring(rect, z)]

interface ShellGeometries {
  plastic: BufferGeometry[]
  seam: BufferGeometry
  glass: BufferGeometry
}

export const buildShellGeometries = (): ShellGeometries => ({
  plastic: [
    plateGeometry(
      roundedRectOutline(insetRect(bodyRect, body.edgeRound * 1.25)),
      roundedRectOutline(openingLipRect)
    ).translate(0, 0, FACE_Z),
    loftGeometry([
      ...roundOverRings(bodyRect, FACE_Z, body.edgeRound),
      ...creased(bodyRect, SLAB_BACK_Z),
      ring(seamRect, SLAB_BACK_Z),
    ]),
    loftGeometry([ring(openingLipRect, FACE_Z), ring(opening, FACE_Z - LIP), ring(glass, 0)], 'in'),
    loftGeometry([
      ring(seamRect, REAR_FRONT_Z),
      ...creased(rearRectAt(0), REAR_FRONT_Z),
      ...REAR_STEPS.slice(1).map((travel) => ring(rearRectAt(travel), rearZAt(travel))),
    ]),
  ],
  seam: loftGeometry([ring(seamRect, SLAB_BACK_Z), ring(seamRect, REAR_FRONT_Z)]),
  glass: plateGeometry(roundedRectOutline(glass)),
})
