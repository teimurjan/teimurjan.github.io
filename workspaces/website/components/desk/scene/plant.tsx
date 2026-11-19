'use client'

import { useMemo } from 'react'
import { CylinderGeometry, SphereGeometry } from 'three'
import { type FoliageSpec, growFoliage } from './foliage'
import { InstancedPlacements } from './instanced-placements'
import type { Vec3 } from './layout'
import { darkRubber, leaf, terracotta } from './materials'

interface PlantProps {
  position: Vec3
  pot: { radius: number; height: number }
  foliage: Omit<FoliageSpec, 'baseHeight'>
}

const LEAF_GEOMETRY = new SphereGeometry(1, 12, 8)
const STEM_GEOMETRY = new CylinderGeometry(0.0035, 0.0045, 1, 5)

export function Plant({ position, pot, foliage }: PlantProps) {
  const { stems, leaves } = useMemo(
    () => growFoliage({ ...foliage, baseHeight: pot.height * 0.9 }),
    [foliage, pot.height]
  )

  return (
    <group position={position}>
      <mesh position={[0, pot.height / 2, 0]} material={terracotta} castShadow>
        <cylinderGeometry args={[pot.radius, pot.radius * 0.76, pot.height, 28]} />
      </mesh>
      <mesh
        position={[0, pot.height * 0.94, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={darkRubber}
      >
        <circleGeometry args={[pot.radius * 0.94, 28]} />
      </mesh>
      <InstancedPlacements geometry={STEM_GEOMETRY} material={leaf} placements={stems} />
      <InstancedPlacements
        geometry={LEAF_GEOMETRY}
        material={leaf}
        placements={leaves}
        castShadow
      />
    </group>
  )
}
