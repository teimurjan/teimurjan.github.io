'use client'
import { createContext, ReactNode, useContext, useState } from 'react'
import { useThreeModelLoaded } from '../hooks'

interface ContextValue {
  state: 'loading' | 'idle' | 'active'
  setState: (nextState: 'idle' | 'active') => void
}

const PersonaContext = createContext<ContextValue>({
  state: 'loading',
  setState: () => undefined,
})

interface ProviderProps {
  children: ReactNode
}

const PersonaContextProvider = ({ children }: ProviderProps) => {
  const isLoaded = useThreeModelLoaded('/persona.glb')
  const [state, setState] = useState<ContextValue['state']>('idle')

  return (
    <PersonaContext.Provider
      value={{ state: isLoaded ? state : 'loading', setState }}
    >
      {children}
    </PersonaContext.Provider>
  )
}

const usePersonaContext = () => useContext(PersonaContext)

export { PersonaContextProvider, usePersonaContext }
