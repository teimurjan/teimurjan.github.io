'use client'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { usePersonaContext } from '../../../context'
import Persona from '../persona'
import { useState } from 'react'

const PersonaCanvas = () => {
  const { state } = usePersonaContext()
  const [key, setKey] = useState(0)
  return (
    <Canvas
      onClick={() => state === 'idle' && setKey((prev) => prev + 1)}
      style={{
        cursor:
          state === 'idle'
            ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:32px;'><text y='50%'>👋</text></svg>") 16 0,auto`
            : undefined,
        height: 600,
        width: '100%',
      }}
    >
      <ambientLight intensity={3} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 1, 3]} />

      <Persona key={key} />
    </Canvas>
  )
}

export default PersonaCanvas
