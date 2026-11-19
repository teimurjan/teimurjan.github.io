'use client'

import { useMemo } from 'react'
import { BoxGeometry } from 'three'
import { InstancedPlacements, type Placement } from '../instanced-placements'
import type { Vec3 } from '../layout'
import { blackSteel, paper } from '../materials'
import { between, pick, seededRandom } from '../random'

const UNIT = { width: 3.4, height: 2.3, depth: 0.3 } as const
const SHELF_HEIGHTS = [0.3, 0.78, 1.26, 1.74, 2.22] as const
const SPINE_TINTS = ['#6b3a2e', '#2f4a5c', '#8a7a4f', '#3c3f4d', '#7c6f63', '#27402f', '#d4c8ae']

const stockShelves = (): Placement[] => {
  const random = seededRandom(71)
  return SHELF_HEIGHTS.slice(0, -1).flatMap((shelfY) => {
    const books: Placement[] = []
    let cursor = -UNIT.width / 2 + 0.08
    while (cursor < UNIT.width / 2 - 0.12) {
      const thickness = between(random, 0.025, 0.06)
      const height = between(random, 0.2, 0.36)
      const isGap = random() < 0.12
      if (!isGap) {
        books.push({
          position: [
            cursor + thickness / 2,
            shelfY + 0.012 + height / 2,
            between(random, -0.03, 0.03),
          ],
          rotation: [0, 0, random() < 0.08 ? between(random, -0.28, 0.28) : 0],
          scale: [thickness, height, between(random, 0.16, 0.22)],
          color: pick(random, SPINE_TINTS),
        })
      }
      cursor += isGap ? between(random, 0.12, 0.4) : thickness + 0.004
    }
    return books
  })
}

export function Shelving({ position, rotation }: { position: Vec3; rotation: Vec3 }) {
  const geometry = useMemo(
    () => ({
      shelf: new BoxGeometry(UNIT.width, 0.024, UNIT.depth),
      upright: new BoxGeometry(0.03, UNIT.height, UNIT.depth),
      book: new BoxGeometry(1, 1, 1),
    }),
    []
  )
  const books = useMemo(stockShelves, [])
  const shelves: Placement[] = SHELF_HEIGHTS.map((height) => ({ position: [0, height, 0] }))
  const uprights: Placement[] = [-0.5, -0.167, 0.167, 0.5].map((ratio) => ({
    position: [ratio * UNIT.width, UNIT.height / 2, 0],
  }))

  return (
    <group position={position} rotation={rotation}>
      <InstancedPlacements geometry={geometry.shelf} material={blackSteel} placements={shelves} />
      <InstancedPlacements
        geometry={geometry.upright}
        material={blackSteel}
        placements={uprights}
      />
      <InstancedPlacements geometry={geometry.book} material={paper} placements={books} />
    </group>
  )
}
