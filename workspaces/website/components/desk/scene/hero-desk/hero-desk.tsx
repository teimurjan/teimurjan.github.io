'use client'

import { useMemo } from 'react'
import { coiledCableGeometry } from '../geometry'
import { DESK_TOP_Y, SCREEN_CENTER, type Vec3 } from '../layout'
import { KEYBOARD, MAC } from '../macintosh/dimensions'
import { Keyboard } from '../macintosh/keyboard'
import { Macintosh } from '../macintosh/macintosh'
import { Mouse } from '../macintosh/mouse'
import { beigePlastic } from '../materials'
import { Plant } from '../plant'
import { KEYBOARD_FRONT, MOUSE_POSITION, MOUSE_YAW } from './arrangement'
import { Desk } from './desk'
import { DeskLamp } from './desk-lamp'
import { FloppyStack } from './floppy-stack'
import { Mug } from './mug'

const CORD_PATH: Vec3[] = [
  [KEYBOARD_FRONT[0] + KEYBOARD.width / 2 - 0.03, 0.02, KEYBOARD_FRONT[2] - KEYBOARD.depth + 0.004],
  [0.15, 0.007, 0.1],
  [0.125, 0.007, 0.05],
  [0.088, 0.016, MAC.recessDepth + 0.004],
]
const DESK_PLANT = {
  pot: { radius: 0.055, height: 0.085 },
  foliage: {
    seed: 11,
    leafCount: 13,
    stemLength: [0.1, 0.24] as const,
    lean: [0.2, 1.05] as const,
    leafSize: [0.034, 0.004, 0.062] as Vec3,
  },
}

export function HeroDesk() {
  const cord = useMemo(
    () => coiledCableGeometry(CORD_PATH, { coilRadius: 0.0042, wireRadius: 0.0011, turns: 30 }),
    []
  )

  return (
    <group>
      <Desk />
      <group position={SCREEN_CENTER}>
        <Macintosh />
      </group>
      <group position={[0, DESK_TOP_Y, 0]}>
        <Keyboard position={KEYBOARD_FRONT} />
        <Mouse position={MOUSE_POSITION} rotation={[0, MOUSE_YAW, 0]} />
        <mesh geometry={cord} material={beigePlastic} />
        <DeskLamp position={[0.3, 0, -0.14]} rotation={[0, 0.93, 0]} aimAt={[-0.42, 0, 0]} />
        <Mug position={[-0.29, 0, 0.16]} rotation={[0, 2.2, 0]} />
        <FloppyStack position={[0.46, 0, 0.14]} />
        <Plant position={[-0.56, 0, -0.27]} {...DESK_PLANT} />
      </group>
    </group>
  )
}
