const scrollTo = require('gatsby-plugin-smoothscroll').default

exports.onClientEntry = () => {
  const hash = window.location.hash

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  window.onload = () => {
    if (hash) {
      scrollTo(hash)
    }
  }
}

exports.onInitialClientRender = () => {
  window.scrollTo(0, 0)
}
