'use client'

import { useMemo } from 'react'
import { beigePlastic, darkRubber, seamPlastic, tubeGlass } from '../materials'
import { RoundedBox } from '../rounded-box'
import { MAC } from './dimensions'
import { FACE_Z, rearRectAt, rearZAt } from './profile'
import { buildShellGeometries } from './shell-geometry'

const { body, slot, badge, vents } = MAC

const DETAIL_Z = FACE_Z + 0.0002
const FOOT_INSET = 0.03

function FloppySlot() {
  return (
    <group position={[0, slot.y, DETAIL_Z]}>
      <mesh material={seamPlastic}>
        <boxGeometry args={[body.width - slot.grooveInset * 2, 0.0012, 0.0004]} />
      </mesh>
      <RoundedBox
        args={[slot.width, slot.height, 0.0006]}
        radius={0.0002}
        position={[slot.x, 0, 0]}
        material={seamPlastic}
      />
      <RoundedBox
        args={[0.021, 0.0125, 0.0006]}
        radius={0.0002}
        position={[slot.x, 0, 0]}
        material={seamPlastic}
      />
    </group>
  )
}

function Badge() {
  return (
    <group position={[badge.x, badge.y, DETAIL_Z]}>
      <RoundedBox args={[badge.size, badge.size, 0.0008]} radius={0.0003} material={seamPlastic} />
      <mesh position={[0, 0, 0.0005]}>
        <circleGeometry args={[0.0034, 20]} />
        <meshStandardMaterial color="#e3b23c" roughness={0.4} />
      </mesh>
    </group>
  )
}

function SideVents({ side }: { side: 1 | -1 }) {
  return (
    <>
      {vents.travels.map((travel) => {
        const rect = rearRectAt(travel)
        const top = (rect.centerY ?? 0) + rect.height / 2
        return (
          <mesh
            key={travel}
            position={[side * (rect.width / 2 + 0.0002), top - vents.drop, rearZAt(travel)]}
            material={seamPlastic}
          >
            <boxGeometry args={[0.0016, vents.height, 0.0042]} />
          </mesh>
        )
      })}
    </>
  )
}

function HandleRecess() {
  const rect = rearRectAt(0.5)
  const top = (rect.centerY ?? 0) + rect.height / 2
  return (
    <RoundedBox
      args={[0.086, 0.004, 0.03]}
      radius={0.0015}
      position={[0, top - 0.0008, rearZAt(0.5)]}
      rotation={[-0.19, 0, 0]}
      material={seamPlastic}
    />
  )
}

function Feet() {
  const frontZ = FACE_Z - 0.03
  const backZ = rearZAt(0.85)
  const x = body.width / 2 - FOOT_INSET
  return (
    <>
      {[
        [x, frontZ],
        [-x, frontZ],
        [x * 0.8, backZ],
        [-x * 0.8, backZ],
      ].map(([footX, footZ]) => (
        <mesh
          key={`${footX}:${footZ}`}
          position={[footX, body.bottom - MAC.footHeight / 2, footZ]}
          material={darkRubber}
        >
          <cylinderGeometry args={[0.009, 0.009, MAC.footHeight, 16]} />
        </mesh>
      ))}
    </>
  )
}

export function Macintosh() {
  const shell = useMemo(buildShellGeometries, [])

  return (
    <group>
      {shell.plastic.map((geometry) => (
        <mesh
          key={geometry.uuid}
          geometry={geometry}
          material={beigePlastic}
          castShadow
          receiveShadow
        />
      ))}
      <mesh geometry={shell.seam} material={seamPlastic} />
      <mesh geometry={shell.glass} material={tubeGlass} />
      <FloppySlot />
      <Badge />
      <SideVents side={1} />
      <SideVents side={-1} />
      <HandleRecess />
      <Feet />
    </group>
  )
}
