import { ReactNode, Suspense, useState } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { usePersonaContext } from '../../../context'
import { getEmojiCursorCss } from '../../../utils'

export interface Props {
  render: (key: string) => ReactNode
}

const PersonaCanvas = ({ render }: Props) => {
  const [personaKey, setPersonaKey] = useState(0)
  const setNextPersonaKey = () => {
    setPersonaKey(personaKey + 1)
  }
  const { state } = usePersonaContext()

  return (
    <Canvas
      onClick={state === 'idle' ? setNextPersonaKey : undefined}
      css={state === 'idle' ? getEmojiCursorCss('👋') : undefined}
      style={{
        height: 600,
        width: '100%',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 1, 3]} />

      <Suspense fallback={null}>{render(personaKey.toString())}</Suspense>
    </Canvas>
  )
}

export default PersonaCanvas
