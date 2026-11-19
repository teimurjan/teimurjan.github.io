'use client'

import { useFrame } from '@react-three/fiber'
import { useMemo } from 'react'
import { BoxGeometry, PlaneGeometry, RepeatWrapping } from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { Glow } from '../glow'
import { InstancedPlacements, type Placement, nestPlacement } from '../instanced-placements'
import { blackSteel, tubeGlass } from '../materials'
import { codeScreenTexture } from '../textures/screen-texture'
import { DARK_MONITORS, LIT_MONITORS } from './workstations'

const PANEL = { width: 0.6, height: 0.36, depth: 0.03, centerY: 0.37 } as const
const SCREEN_GLOW = '#9ec4ff'
const SCROLL_SPEED = 0.012

const BASE: Placement = { position: [0, 0.006, -0.02] }
const NECK: Placement = { position: [0, 0.16, -0.035] }
const PANEL_PART: Placement = { position: [0, PANEL.centerY, 0] }
const SCREEN_PART: Placement = { position: [0, PANEL.centerY, PANEL.depth / 2 + 0.001] }

const ALL_MONITORS = [...DARK_MONITORS, ...LIT_MONITORS]
const BASE_GEOMETRY = new BoxGeometry(0.24, 0.012, 0.17)
const NECK_GEOMETRY = new BoxGeometry(0.04, 0.32, 0.03)
const PANEL_GEOMETRY = new RoundedBoxGeometry(PANEL.width, PANEL.height, PANEL.depth, 2, 0.008)
const SCREEN_GEOMETRY = new PlaneGeometry(0.57, 0.33)

const nest = (monitors: readonly Placement[], part: Placement) =>
  monitors.map((monitor) => nestPlacement(monitor, part))

const BASES = nest(ALL_MONITORS, BASE)
const NECKS = nest(ALL_MONITORS, NECK)
const PANELS = nest(ALL_MONITORS, PANEL_PART)
const DARK_SCREENS = nest(DARK_MONITORS, SCREEN_PART)
const LIT_SCREENS = nest(LIT_MONITORS, SCREEN_PART)

const scrollingCode = (seed: number) => {
  const texture = codeScreenTexture(seed)
  texture.wrapT = RepeatWrapping
  return texture
}

export function LitScreens({ castsGlow = true }: { castsGlow?: boolean }) {
  const textures = useMemo(() => LIT_SCREENS.map((_, index) => scrollingCode(index + 3)), [])

  useFrame(({ clock }) => {
    textures.forEach((texture, index) => {
      texture.offset.y = clock.elapsedTime * SCROLL_SPEED * (1 + index * 0.35)
    })
  })

  return (
    <>
      {LIT_SCREENS.map(({ position, rotation }, index) => (
        <group key={position.join(':')} position={position} rotation={rotation}>
          <mesh geometry={SCREEN_GEOMETRY}>
            <meshBasicMaterial map={textures[index]} color={[1.7, 1.7, 1.7]} toneMapped={false} />
          </mesh>
          {castsGlow && (
            <Glow
              position={[0, -PANEL.centerY + 0.004, 0.32]}
              size={[1.1, 0.8]}
              color={SCREEN_GLOW}
              opacity={0.16}
            />
          )}
        </group>
      ))}
    </>
  )
}

export function Monitors() {
  return (
    <>
      <InstancedPlacements geometry={BASE_GEOMETRY} material={blackSteel} placements={BASES} />
      <InstancedPlacements geometry={NECK_GEOMETRY} material={blackSteel} placements={NECKS} />
      <InstancedPlacements geometry={PANEL_GEOMETRY} material={blackSteel} placements={PANELS} />
      <InstancedPlacements
        geometry={SCREEN_GEOMETRY}
        material={tubeGlass}
        placements={DARK_SCREENS}
      />
      <LitScreens />
    </>
  )
}
