'use client'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { usePersonaContext } from '../../../context'

export type Props = object

const Persona = (props: Props) => {
  const group = useRef<THREE.Group>(null)
  const mixer = useRef<THREE.AnimationMixer>()
  const { nodes, materials, animations } = useGLTF('/persona.glb')
  const { setState } = usePersonaContext()

  // Play the combined animation once
  useEffect(() => {
    if (group.current && animations.length) {
      mixer.current = new THREE.AnimationMixer(group.current)
      const complexAnimation = animations.find(
        (animation) => animation.name === 'Action',
      )

      if (mixer.current && complexAnimation) {
        const action = mixer.current
          .clipAction(complexAnimation)
          .setLoop(THREE.LoopOnce, 1)
        action.clampWhenFinished = true
        action.play()

        setState('active')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Play the idle animation constantly when the complex animation ends
  useEffect(() => {
    const listener = () => {
      const idleAnimation = animations.find(
        (animation) => animation.name === 'Idle',
      )

      if (idleAnimation) {
        mixer.current?.clipAction(idleAnimation)?.play()

        setState('idle')
      }
    }
    mixer.current?.addEventListener('finished', listener)

    return () => {
      mixer.current?.removeEventListener('finished', listener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mixer.current])

  useFrame((_state, delta) => {
    mixer.current?.update?.(delta)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Body001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials['Wolf3D_Body.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Glasses001.geometry}
            material={materials['Wolf3D_Glasses.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Glasses001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials['Wolf3D_Hair.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials['Wolf3D_Outfit_Bottom.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials['Wolf3D_Outfit_Footwear.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials['Wolf3D_Outfit_Top.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            name="EyeLeft001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.EyeLeft001.geometry}
            material={materials['Wolf3D_Eye.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.EyeLeft001.skeleton}
            // @ts-expect-error TODO: fix typing issues
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            // @ts-expect-error TODO: fix typing issues
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.EyeRight001.geometry}
            material={materials['Wolf3D_Eye.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.EyeRight001.skeleton}
            // @ts-expect-error TODO: fix typing issues
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            // @ts-expect-error TODO: fix typing issues
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials['Wolf3D_Skin.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Head001.skeleton}
            // @ts-expect-error TODO: fix typing issues
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            // @ts-expect-error TODO: fix typing issues
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            // @ts-expect-error TODO: fix typing issues
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials['Wolf3D_Teeth.003']}
            // @ts-expect-error TODO: fix typing issues
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            // @ts-expect-error TODO: fix typing issues
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            // @ts-expect-error TODO: fix typing issues
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/persona.glb')

export default Persona
