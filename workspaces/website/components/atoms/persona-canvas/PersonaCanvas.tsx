'use client'
import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { usePersonaContext } from '../../../context'
import personaFirstFrame from '../../../assets/images/persona-first-frame.png'

const PersonaScene = dynamic(() => import('../persona-scene'), {
  ssr: false,
  loading: () => null,
})

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
          'absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 object-contain',
          state === 'loading' && 'opacity-100 animate-pulse',
        )}
        src={personaFirstFrame}
        alt="Loading persona"
        fill
        priority
      />
      <PersonaScene
        className={classNames(
          'absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full opacity-0',
          state !== 'loading' && 'opacity-100',
        )}
        personaKey={key}
      />
    </div>
  )
}

export default PersonaCanvas
