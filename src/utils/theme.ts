import Color from 'color'

const blue = new Color('#05386b')
const beige = new Color('#edf5f1')
const beigeDark = new Color('#e0e1e0')
const green = new Color('#5cdb95')

const smallScreenWidth = 700
const mediumScreenWidth = 1000
const largeScreenWidth = 1400
const xlargeScreenWidth = 1700

export default {
  colors: {
    typography: {
      blue: blue.hex(),
      beige: beige.hex(),
    },
    link: {
      blue: blue.hex(),
      beige: beige.hex(),
    },
    background: {
      green: green.hex(),
      blue: blue.hex(),
      beige: beige.hex(),
    },
    button: {
      blue: blue.hex(),
      blueDarken: blue.darken(0.25).hex(),
      beige: beige.hex(),
      beigeDarken: beigeDark.hex(),
    },
    geometry: {
      blue: blue.hex(),
      blueAlpha: blue.alpha(0.5).rgb().string(),
    },
  },
  typography: {
    text: {
      small: {
        fontSize: '0.75rem',
        lineHeight: '1.25rem',
      },
      p: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
    title: {
      h5: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
      h4: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      h3: {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
      h2: {
        fontSize: '4rem',
        lineHeight: '4.5rem',
      },
      h1: {
        fontSize: '6rem',
        lineHeight: '6.5rem',
      },
    },
    titleResponsive: {
      h5: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      h2: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      h1: {
        fontSize: '4rem',
        lineHeight: '4.5rem',
      },
    },
  },
  screens: {
    small: {
      width: smallScreenWidth,
      mediaUpTo: `(max-width: ${smallScreenWidth}px)`,
      mediaFrom: `(min-width: ${smallScreenWidth + 1}px)`,
    },
    medium: {
      width: mediumScreenWidth,
      mediaUpTo: `(max-width: ${mediumScreenWidth}px)`,
      mediaFrom: `(min-width: ${mediumScreenWidth + 1}px)`,
    },
    large: {
      width: largeScreenWidth,
      mediaUpTo: `(max-width: ${largeScreenWidth}px)`,
      mediaFrom: `(min-width: ${largeScreenWidth + 1}px)`,
    },
    xlarge: {
      width: xlargeScreenWidth,
      mediaUpTo: `(max-width: ${xlargeScreenWidth}px)`,
      mediaFrom: `(min-width: ${xlargeScreenWidth + 1}px)`,
    },
  },
  spacing: {
    xsmall: '0.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    xlarge: '4rem',
  },
  border: {
    radius: {
      small: '1rem',
      medium: '2rem',
      large: '2rem',
      xlarge: '3rem',
    },
  },
  layout: {
    logoSize: {
      small: '50px',
      large: '80px',
    },
    contentTop: {
      small: '66px',
      large: '96px',
    },
  },
  transition: {
    timingFunction: {
      easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
    },
  },
}
