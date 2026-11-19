'use client'

import { ROOM, type Vec3 } from '../layout'
import { blackSteel } from '../materials'
import { Plant } from '../plant'
import { Benches } from './benches'
import { Chairs } from './chairs'
import { Lounge } from './lounge'
import { LitScreens, Monitors } from './monitors'
import { NeonSign } from './neon-sign'
import { PendantFixtures, PendantLight } from './pendants'
import { COLUMNS, Shell } from './shell'
import { Shelving } from './shelving'
import { WindowWall } from './window-wall'

const DEPTH = ROOM.front - ROOM.back
const CENTER_Z = (ROOM.front + ROOM.back) / 2
const NEON_Z = COLUMNS[0][1]
const NEON_RAIL_Y = 2.98
const FLOOR_POT = { radius: 0.2, height: 0.42 }
const FLOOR_PLANTS = (
  [
    { position: [-2.7, 0, -1.9], seed: 3 },
    { position: [2.05, 0, -8.3], seed: 9 },
    { position: [-5.9, 0, -1.1], seed: 14 },
    { position: [5.7, 0, -14.2], seed: 21 },
    { position: [-2, 0, -14.1], seed: 33 },
  ] as const
).map(({ position, seed }) => ({
  position,
  foliage: {
    seed,
    leafCount: 22,
    stemLength: [0.55, 1.25] as const,
    lean: [0.12, 0.8] as const,
    leafSize: [0.12, 0.012, 0.2] as Vec3,
  },
}))

function Glazing({ castsSpill }: { castsSpill: boolean }) {
  return (
    <>
      <WindowWall
        position={[0, 0, ROOM.back]}
        width={ROOM.halfWidth * 2}
        seed={5}
        castsSpill={castsSpill}
      />
      <WindowWall
        position={[ROOM.halfWidth, 0, CENTER_Z]}
        rotation={[0, -Math.PI / 2, 0]}
        width={DEPTH}
        seed={17}
        castsSpill={castsSpill}
      />
    </>
  )
}

function Sign({ castsLight }: { castsLight: boolean }) {
  return <NeonSign position={[0, 2.46, NEON_Z]} text="headcount: 0" castsLight={castsLight} />
}

function FloorReflections() {
  return (
    <group scale={[1, -1, 1]}>
      <Glazing castsSpill={false} />
      <PendantFixtures />
      <LitScreens castsGlow={false} />
      <Sign castsLight={false} />
    </group>
  )
}

export function RoomShell() {
  return (
    <>
      <Shell />
      <Glazing castsSpill />
    </>
  )
}

export function RoomFurniture() {
  return (
    <>
      <Benches />
      <Chairs />
      <Monitors />
      <PendantFixtures />
      <PendantLight />
      <Lounge position={[-4.5, 0, -4.1]} />
      <Shelving position={[-ROOM.halfWidth + 0.2, 0, -10.9]} rotation={[0, Math.PI / 2, 0]} />
    </>
  )
}

export function RoomDecor() {
  return (
    <>
      <mesh position={[0, NEON_RAIL_Y, NEON_Z]} material={blackSteel}>
        <boxGeometry args={[3.1, 0.04, 0.04]} />
      </mesh>
      <Sign castsLight />
      {FLOOR_PLANTS.map(({ position, foliage }) => (
        <Plant key={foliage.seed} position={position} pot={FLOOR_POT} foliage={foliage} />
      ))}
      <FloorReflections />
    </>
  )
}
