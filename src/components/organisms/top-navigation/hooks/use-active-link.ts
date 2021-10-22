import { useElementVisibility } from '../../../../hooks'

const useActiveLink = () => {
  const isDocumentDefined = typeof document !== 'undefined'
  const { visible: experienceVisible } = useElementVisibility(
    isDocumentDefined ? document.getElementById('experience') : null,
    0.5
  )
  const { visible: skillsVisible } = useElementVisibility(
    isDocumentDefined ? document.getElementById('skills') : null,
    0.5
  )
  const { visible: educationVisible } = useElementVisibility(
    isDocumentDefined ? document.getElementById('educaiton') : null,
    0.5
  )
  const { visible: mediaVisible } = useElementVisibility(
    isDocumentDefined ? document.getElementById('media') : null,
    0.5
  )

  if (experienceVisible) return 'experience'
  if (skillsVisible) return 'skills'
  if (educationVisible) return 'education'
  if (mediaVisible) return 'media'

  return undefined
}

export default useActiveLink
