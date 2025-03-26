'use client'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { usePersonaContext } from '../../../context'
import Persona from '../persona'
import personaFirstFrame from '../../../assets/images/persona-first-frame.png'

const PersonaCanvas = () => {
  const { state } = usePersonaContext()
  const [key, setKey] = useState(0)

  return (
    <div
      className="relative h-[600px] w-full"
      onClick={() => state === 'idle' && setKey((prev) => prev + 1)}
      style={{
        cursor:
          state === 'idle'
            ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:32px;'><text y='50%'>👋</text></svg>") 16 0,auto`
            : undefined,
      }}
    >
      <Image
        className={classNames(
          'absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 object-cover',
          state === 'loading' && 'opacity-100 animate-pulse',
        )}
        src={personaFirstFrame}
        alt="Loading persona"
        fill
        priority
      />

      <Canvas
        className={classNames(
          'absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full',
          state === 'loading' && 'opacity-0',
        )}
      >
        <ambientLight intensity={3} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 1, 3]} />

        <Persona key={key} />
      </Canvas>
    </div>
  )
}

export default PersonaCanvas
