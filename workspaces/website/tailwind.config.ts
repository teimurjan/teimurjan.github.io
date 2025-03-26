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
        dark: 'var(--text-dark)',
        light: 'var(--text-light)',
      },
      backgroundColor: {
        dark: 'var(--bg-dark)',
        dark2: 'var(--bg-dark2)',
        light: 'var(--bg-light)',
        light2: 'var(--bg-light2)',
        outline: 'var(--bg-outline)',
      },
      colors: {
        geometry: {
          dark: 'var(--geometry-dark)',
          light: 'var(--geometry-light)',
        },
      },
      borderColor: {
        dark: 'var(--border-dark)',
        light: 'var(--border-light)',
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
        'button-dark': 'var(--button-gradient-dark)',
        'button-light': 'var(--button-gradient-light)',
      },
    },
  },
  plugins: [],
} satisfies Config
