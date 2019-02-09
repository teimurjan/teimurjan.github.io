export const sizes = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const mediaSizeLessThan = size => `@media (max-width: ${size}px)`
export const mediaSizeGreaterThan = size => `@media (min-width: ${size}px)`
