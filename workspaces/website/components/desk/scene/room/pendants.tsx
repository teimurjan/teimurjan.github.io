'use client'

import { useMemo } from 'react'
import { AdditiveBlending, BackSide, CylinderGeometry, DoubleSide, SphereGeometry } from 'three'
import { Glow } from '../glow'
import { InstancedPlacements, type Placement } from '../instanced-placements'
import { ROOM } from '../layout'
import { PALETTE, blackSteel } from '../materials'
import { beamFalloffTexture } from '../textures/glow-texture'
import { BENCH, PENDANTS, PENDANT_HEIGHT } from './workstations'

const SHADE = { topRadius: 0.045, bottomRadius: 0.19, height: 0.17 } as const
const CORD_LENGTH = ROOM.height - PENDANT_HEIGHT - SHADE.height
const BEAM_HEIGHT = PENDANT_HEIGHT - BENCH.height
const BEAM_SPREAD = 0.85
const LIT = PENDANTS.filter((pendant) => pendant.isLit)

const SHADE_GEOMETRY = new CylinderGeometry(
  SHADE.topRadius,
  SHADE.bottomRadius,
  SHADE.height,
  28,
  1,
  true
)
const CORD_GEOMETRY = new CylinderGeometry(0.004, 0.004, CORD_LENGTH, 5)
const BULB_GEOMETRY = new SphereGeometry(0.038, 16, 12)
const BEAM_GEOMETRY = new CylinderGeometry(
  SHADE.bottomRadius,
  BEAM_SPREAD,
  BEAM_HEIGHT,
  32,
  1,
  true
)

const shades: Placement[] = PENDANTS.map(({ position: [x, y, z] }) => ({
  position: [x, y + SHADE.height / 2, z],
}))
const cords: Placement[] = PENDANTS.map(({ position: [x, y, z] }) => ({
  position: [x, y + SHADE.height + CORD_LENGTH / 2, z],
}))

export function PendantFixtures() {
  const shadeSteel = useMemo(() => {
    const material = blackSteel.clone()
    material.side = DoubleSide
    return material
  }, [])

  return (
    <>
      <InstancedPlacements geometry={SHADE_GEOMETRY} material={shadeSteel} placements={shades} />
      <InstancedPlacements geometry={CORD_GEOMETRY} material={blackSteel} placements={cords} />
      {LIT.map(({ position: [x, y, z] }) => (
        <group key={`${x}:${z}`} position={[x, y, z]}>
          <mesh geometry={SHADE_GEOMETRY} position={[0, SHADE.height / 2, 0]} scale={0.97}>
            <meshBasicMaterial color={[1.5, 0.95, 0.5]} side={BackSide} toneMapped={false} />
          </mesh>
          <mesh geometry={BULB_GEOMETRY} position={[0, 0.03, 0]}>
            <meshBasicMaterial color={[4.5, 3.2, 1.9]} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </>
  )
}

export function PendantLight() {
  return (
    <>
      {LIT.map(({ position: [x, y, z], castsLight }) => (
        <group key={`${x}:${z}`} position={[x, y, z]}>
          <mesh geometry={BEAM_GEOMETRY} position={[0, -BEAM_HEIGHT / 2, 0]} renderOrder={3}>
            <meshBasicMaterial
              map={beamFalloffTexture()}
              color={PALETTE.warmLight}
              opacity={0.02}
              transparent
              depthWrite={false}
              side={DoubleSide}
              blending={AdditiveBlending}
              toneMapped={false}
            />
          </mesh>
          <Glow
            position={[0, -BEAM_HEIGHT + 0.004, 0]}
            size={[2.3, 2.3]}
            color={PALETTE.warmLight}
            opacity={0.34}
          />
          {castsLight && (
            <pointLight
              position={[0, -0.12, 0]}
              color={PALETTE.warmLight}
              intensity={3.4}
              distance={6}
              decay={2}
            />
          )}
        </group>
      ))}
    </>
  )
}
