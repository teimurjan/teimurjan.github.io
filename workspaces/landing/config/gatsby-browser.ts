import scrollTo from 'gatsby-plugin-smoothscroll'

export const onClientEntry = () => {
  const hash = window.location.hash

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  window.onload = () => {
    if (hash) {
      scrollTo(hash)
    }
  }
}

export const onInitialClientRender = () => {
  window.scrollTo(0, 0)
}
