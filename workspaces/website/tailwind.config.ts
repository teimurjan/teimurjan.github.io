import { theme } from '@teimurjan/utils'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'double-x': '200% 100%',
      },
      textColor: {
        ...theme.colors.typography,
      },
      backgroundColor: {
        ...theme.colors.background,
      },
      colors: {
        geometry: {
          ...theme.colors.geometry,
        },
      },
      borderColor: {
        ...theme.colors.typography,
      },

      keyframes: {
        rolllg: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0) rotate(200deg)' },
        },
        rollsm: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0) rotate(150deg)' },
        },
      },
      backgroundImage: {
        'button-dark': `linear-gradient(to right, ${theme.colors.button.dark2} 50%, ${theme.colors.button.dark} 50%)`,
        'button-light': `linear-gradient(to right, ${theme.colors.button.light2} 50%, ${theme.colors.button.light} 50%)`,
      },
    },
  },
  plugins: [],
} satisfies Config
