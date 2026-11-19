'use client'

import { useMemo } from 'react'
import { BoxGeometry } from 'three'
import { Glow } from '../glow'
import { InstancedPlacements, type Placement } from '../instanced-placements'
import type { Vec3 } from '../layout'
import { PALETTE, blackSteel, concrete } from '../materials'
import { windowPanesTexture } from '../textures/glow-texture'
import { skylineTexture } from '../textures/skyline-texture'
import { CityLights } from './city-lights'

interface WindowWallProps {
  position: Vec3
  rotation?: Vec3
  width: number
  seed: number
  castsSpill?: boolean
}

const SILL = 0.5
const HEAD = 3.25
const CEILING = 3.6
const BAY = 1.05
const MULLION = 0.055
const TRANSOMS = [SILL, 1.42, 2.34, HEAD] as const
const BACKDROP = { distance: 9, height: 7.4, overscan: 2.4 } as const
const SPILL_DEPTH = 3.4

export function WindowWall({
  position,
  rotation,
  width,
  seed,
  castsSpill = true,
}: WindowWallProps) {
  const geometry = useMemo(
    () => ({
      post: new BoxGeometry(MULLION, HEAD - SILL, 0.09),
      transom: new BoxGeometry(width, MULLION, 0.09),
    }),
    [width]
  )
  const skyline = useMemo(
    () => skylineTexture(seed, Math.round((width * BACKDROP.overscan) / (BACKDROP.height * 2))),
    [seed, width]
  )
  const bays = Math.round(width / BAY)
  const posts: Placement[] = useMemo(
    () =>
      Array.from({ length: bays + 1 }, (_, bay) => ({
        position: [(bay / bays - 0.5) * width, (SILL + HEAD) / 2, 0] as const,
      })),
    [bays, width]
  )
  const transoms: Placement[] = useMemo(
    () => TRANSOMS.map((height) => ({ position: [0, height, 0] as const })),
    []
  )
  const spills = Math.round(width / 4.2)

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, SILL / 2, 0]} material={concrete}>
        <boxGeometry args={[width, SILL, 0.24]} />
      </mesh>
      <mesh position={[0, (HEAD + CEILING) / 2, 0]} material={concrete}>
        <boxGeometry args={[width, CEILING - HEAD, 0.24]} />
      </mesh>
      <InstancedPlacements geometry={geometry.post} material={blackSteel} placements={posts} />
      <InstancedPlacements
        geometry={geometry.transom}
        material={blackSteel}
        placements={transoms}
      />
      <mesh position={[0, BACKDROP.height / 2, -BACKDROP.distance]}>
        <planeGeometry args={[width * BACKDROP.overscan, BACKDROP.height]} />
        <meshBasicMaterial map={skyline} color={[1.7, 1.7, 1.7]} toneMapped={false} fog={false} />
      </mesh>
      <CityLights
        position={[0, 0, -BACKDROP.distance + 0.06]}
        span={width * BACKDROP.overscan}
        seed={seed}
      />
      {Array.from({ length: castsSpill ? spills : 0 }, (_, spill) => (
        <Glow
          key={spill}
          position={[((spill + 0.5) / spills - 0.5) * width, 0.012, SPILL_DEPTH / 2 + 0.3]}
          size={[width / spills - 0.5, SPILL_DEPTH]}
          color={PALETTE.coolLight}
          opacity={0.055}
          texture={windowPanesTexture()}
        />
      ))}
    </group>
  )
}
