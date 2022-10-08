import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

const useThreeModelLoaded = (path: string) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { item, progress } = useProgress()

  useEffect(() => {
    if (item === path && progress === 100) {
      setIsLoaded(true)
    }
  }, [item, path, progress])

  return isLoaded
}

export default useThreeModelLoaded
