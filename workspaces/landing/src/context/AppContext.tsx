import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useElementVisibility } from '../hooks'

interface ContextValue {
  activeLink?: 'experience' | 'skills' | 'education' | 'activity'
  visitedLinks: Set<string>
}

const AppContext = createContext<ContextValue>({
  visitedLinks: new Set(),
})

interface ProviderProps {
  children: ReactNode
}

const AppContextProvider = ({ children }: ProviderProps) => {
  const { visible: experienceVisible, appearedOnce: experienceVisited } =
    useElementVisibility('experience')
  const { visible: skillsVisible, appearedOnce: skillsVisited } =
    useElementVisibility('skills')
  const { visible: educationVisible, appearedOnce: educationVisited } =
    useElementVisibility('education')
  const { visible: activityVisible, appearedOnce: activityVisited } =
    useElementVisibility('activity')

  const visitedLinks = useMemo(
    () =>
      new Set(
        [
          experienceVisited && 'experience',
          skillsVisited && 'skills',
          educationVisited && 'education',
          activityVisited && 'activity',
        ].filter(Boolean) as string[]
      ),
    [experienceVisited, skillsVisited, educationVisited, activityVisited]
  )

  const activeLink = useMemo(() => {
    if (experienceVisible) return 'experience'
    if (skillsVisible) return 'skills'
    if (educationVisible) return 'education'
    if (activityVisible) return 'activity'

    return undefined
  }, [experienceVisible, skillsVisible, educationVisible, activityVisible])

  return (
    <AppContext.Provider value={{ activeLink, visitedLinks }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { AppContextProvider, useAppContext }
