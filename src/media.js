export const sizes = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const mediaSizeLessThan = size => `(max-width: ${size}px)`
export const mediaSizeGreaterThan = size => `(min-width: ${size}px)`

export const makeMediaListener = (
  mediaQueryStr,
  onMatch = () => {},
  onDismatch = () => {}
) => {
  const mql = window.matchMedia(mediaQueryStr)
  const stopListening = () => {
    mql.removeListener(listener)
  }

  const listener = e => {
    if (e.matches) {
      onMatch({ stopListening })
    } else {
      onDismatch({ stopListening })
    }
  }

  mql.addListener(listener)

  return stopListening
}
