import scrollTo from 'gatsby-plugin-smoothscroll'

export enum Anchor {
  Experience = 'experience',
  Skills = 'skills',
  Education = 'education',
  Media = 'media',
}

export const navigateToAnchor = (anchor: string) => {
  if ('history' in window) {
    window.history.replaceState(null, '', `#${anchor}`)
  }
  scrollTo(`#${anchor}`)
}
