/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fcfbf9',
          100: '#f8f6f2',
          200: '#f1ede4',
          300: '#e5dec9',
        },
        crimson: {
          DEFAULT: '#991b1b',
          dark: '#7f1d1d',
          light: '#b91c1c',
          soft: '#fef2f2',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        gold: {
          DEFAULT: '#b45309',
          light: '#d97706',
        }
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Onest', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
