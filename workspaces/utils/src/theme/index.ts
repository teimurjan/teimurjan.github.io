import lightColors from './light-colors'

const smallScreenWidth = 700
const mediumScreenWidth = 1000
const largeScreenWidth = 1400
const xlargeScreenWidth = 1700

const theme = {
  colors: lightColors,
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
      xlarge: {
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
      large: {
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
          fontSize: '5rem',
          lineHeight: '4.5rem',
        },
      },
      small: {
        h5: {
          fontSize: '1rem',
          lineHeight: '1.25rem',
        },
        h4: {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
        },
        h3: {
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
        },
        h2: {
          fontSize: '2rem',
          lineHeight: '2.25rem',
        },
        h1: {
          fontSize: '3rem',
          lineHeight: '3.25rem',
        },
      },
    },
  },
  screens: {
    small: {
      containerWidth: smallScreenWidth,
      breakpoint: smallScreenWidth,
      mediaUpTo: `(max-width: ${smallScreenWidth}px)`,
      mediaFrom: `(min-width: ${smallScreenWidth + 1}px)`,
    },
    medium: {
      containerWidth: mediumScreenWidth,
      breakpoint: mediumScreenWidth + 50,
      mediaUpTo: `(max-width: ${mediumScreenWidth + 50}px)`,
      mediaFrom: `(min-width: ${mediumScreenWidth + 51}px)`,
    },
    large: {
      containerWidth: largeScreenWidth,
      breakpoint: largeScreenWidth + 100,
      mediaUpTo: `(max-width: ${largeScreenWidth + 100}px)`,
      mediaFrom: `(min-width: ${largeScreenWidth + 101}px)`,
    },
    xlarge: {
      containerWidth: xlargeScreenWidth,
      breakpoint: xlargeScreenWidth + 100,
      mediaUpTo: `(max-width: ${xlargeScreenWidth + 100}px)`,
      mediaFrom: `(min-width: ${xlargeScreenWidth + 101}px)`,
    },
  },
  spacing: {
    xxsmall: '0.25rem',
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
      linear: 'linear',
      easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
    },
  },
}

export type { Colors } from './types'

export default theme
