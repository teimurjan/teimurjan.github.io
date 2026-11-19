'use client'

import { useMemo } from 'react'
import { BoxGeometry, CylinderGeometry } from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { InstancedPlacements, type Placement, nestPlacement } from '../instanced-placements'
import { blackSteel, charcoalFabric } from '../materials'
import { CHAIRS } from './workstations'

const SEAT_HEIGHT = 0.47
const SPOKES = 5

const SEAT: Placement = { position: [0, SEAT_HEIGHT, 0] }
const BACK: Placement = { position: [0, SEAT_HEIGHT + 0.36, -0.23], rotation: [-0.14, 0, 0] }
const SPINE: Placement = { position: [0, SEAT_HEIGHT + 0.1, -0.24], rotation: [-0.14, 0, 0] }
const POST: Placement = { position: [0, SEAT_HEIGHT / 2 + 0.02, 0] }
const BASE: Placement[] = Array.from({ length: SPOKES }, (_, spoke) => {
  const angle = (spoke / SPOKES) * Math.PI * 2
  return {
    position: [Math.sin(angle) * 0.15, 0.05, Math.cos(angle) * 0.15] as const,
    rotation: [0, angle, 0] as const,
  }
})

const nestAll = (parts: readonly Placement[]) =>
  CHAIRS.flatMap((chair) => parts.map((part) => nestPlacement(chair, part)))

export function Chairs() {
  const geometry = useMemo(
    () => ({
      seat: new RoundedBoxGeometry(0.46, 0.07, 0.44, 3, 0.03),
      back: new RoundedBoxGeometry(0.42, 0.46, 0.05, 3, 0.022),
      spine: new BoxGeometry(0.06, 0.3, 0.025),
      post: new CylinderGeometry(0.024, 0.024, SEAT_HEIGHT - 0.06, 10),
      spoke: new BoxGeometry(0.035, 0.03, 0.3),
    }),
    []
  )
  const placements = useMemo(
    () => ({
      seats: nestAll([SEAT]),
      backs: nestAll([BACK]),
      spines: nestAll([SPINE]),
      posts: nestAll([POST]),
      spokes: nestAll(BASE),
    }),
    []
  )

  return (
    <>
      <InstancedPlacements
        geometry={geometry.seat}
        material={charcoalFabric}
        placements={placements.seats}
      />
      <InstancedPlacements
        geometry={geometry.back}
        material={charcoalFabric}
        placements={placements.backs}
      />
      <InstancedPlacements
        geometry={geometry.spine}
        material={blackSteel}
        placements={placements.spines}
      />
      <InstancedPlacements
        geometry={geometry.post}
        material={blackSteel}
        placements={placements.posts}
      />
      <InstancedPlacements
        geometry={geometry.spoke}
        material={blackSteel}
        placements={placements.spokes}
      />
    </>
  )
}
