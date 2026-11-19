'use client'

import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import {
  AdditiveBlending,
  type CanvasTexture,
  type MeshBasicMaterial,
  type PointLight,
} from 'three'
import type { Vec3 } from '../layout'
import { PALETTE } from '../materials'
import { canvasTexture } from '../textures/canvas-texture'

interface NeonSignProps {
  position: Vec3
  rotation?: Vec3
  text: string
  castsLight?: boolean
}

const CANVAS = { width: 1024, height: 384 } as const
const SIGN_WIDTH = 2.5
const FONT_SIZE = 190
const TUBE_COLOR = [2.4, 2.1, 1.7] as const
const LIGHT_INTENSITY = 2.6
const FLICKER = { ticksPerSecond: 16, chance: 0.035, dim: 0.45 } as const

const tubePower = (time: number) => {
  const tick = Math.floor(time * FLICKER.ticksPerSecond)
  const noise = Math.abs(Math.sin(tick * 12.9898) * 43758.5453) % 1
  return noise < FLICKER.chance ? FLICKER.dim : 1
}

const handwritingFont = () =>
  `700 ${FONT_SIZE}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-caveat')}, cursive`

const paintNeon = (text: string, font: string) =>
  canvasTexture(CANVAS.width, CANVAS.height, (context, width, height) => {
    context.font = font
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.lineJoin = 'round'
    context.shadowColor = '#ffb46a'
    context.shadowBlur = 46
    context.fillStyle = '#ffe2b8'
    context.fillText(text, width / 2, height / 2)
    context.shadowBlur = 14
    context.fillStyle = '#fff6e6'
    context.fillText(text, width / 2, height / 2)
  })

export function NeonSign({ position, rotation, text, castsLight = true }: NeonSignProps) {
  const [tube, setTube] = useState<CanvasTexture | null>(null)
  const glass = useRef<MeshBasicMaterial>(null)
  const spill = useRef<PointLight>(null)

  useFrame(({ clock }) => {
    const power = tubePower(clock.elapsedTime)
    glass.current?.color.setRGB(TUBE_COLOR[0] * power, TUBE_COLOR[1] * power, TUBE_COLOR[2] * power)
    if (spill.current) spill.current.intensity = LIGHT_INTENSITY * power
  })

  useEffect(() => {
    const font = handwritingFont()
    const isCurrent = { value: true }
    document.fonts.load(font, text).then(() => {
      if (isCurrent.value) setTube(paintNeon(text, font))
    })
    return () => {
      isCurrent.value = false
    }
  }, [text])

  return (
    <group position={position} rotation={rotation}>
      {tube && (
        <mesh>
          <planeGeometry args={[SIGN_WIDTH, (SIGN_WIDTH * CANVAS.height) / CANVAS.width]} />
          <meshBasicMaterial
            ref={glass}
            map={tube}
            transparent
            depthWrite={false}
            blending={AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      )}
      {castsLight && (
        <pointLight
          ref={spill}
          position={[0, 0, 0.5]}
          color={PALETTE.neon}
          intensity={LIGHT_INTENSITY}
          distance={6}
          decay={2}
        />
      )}
    </group>
  )
}
