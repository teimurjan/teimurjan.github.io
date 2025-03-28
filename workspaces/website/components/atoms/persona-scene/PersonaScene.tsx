import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

const Persona = dynamic(() => import('../persona'), {
  ssr: false,
  loading: () => null,
})

interface Props {
  className?: string
  style?: React.CSSProperties
  personaKey: number
}

const PersonaScene = ({ className, style, personaKey }: Props) => {
  return (
    <Canvas className={className} style={style}>
      <ambientLight intensity={3} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 1, 3]} />
      <Persona key={personaKey} />
    </Canvas>
  )
}

export default PersonaScene
