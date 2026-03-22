import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,jsx,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,ts,tsx}',
    './pages/**/*.{vue,js,jsx,ts,tsx}',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './app.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#0b1121',
          50: '#0f172a',
          100: '#111827',
          200: '#1a2332',
          300: '#1e293b',
          400: '#334155',
        },
        accent: {
          cyan: '#00e5ff',
          teal: '#06b6d4',
          purple: '#a855f7',
          pink: '#f472b6',
        },
      },
    },
  },
  plugins: [],
}
