import Color from 'color'
import type { Colors } from './types'

const blue = new Color('#05386b')
const beige = new Color('#edf5f1')
const green = new Color('#5cdb95')

export const lightColors: Colors = {
  resume: {
    accent: '#96D3AC',
    dark3: '#252525',
    dark2: '#777777',
    dark: '#E8E8E8',
    light: '#FDFDFD',
  },
  typography: {
    dark: blue.hex(),
    light: beige.hex(),
  },
  link: {
    dark: blue.hex(),
    light: beige.hex(),
  },
  background: {
    dark: green.hex(),
    dark2: blue.hex(),
    light: beige.hex(),
    outline: 'rgba(0, 0, 0, 0.35)',
  },
  button: {
    dark: blue.hex(),
    dark2: blue.darken(0.25).hex(),
    light: beige.hex(),
    light2: beige.darken(0.125).hex(),
  },
  geometry: {
    dark: blue.hex(),
    light: blue.alpha(0.5).rgb().string(),
  },
}

export default lightColors
