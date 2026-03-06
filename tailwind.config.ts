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
    },
  },
  plugins: [],
}
