// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  app: {
    head: {
      title: 'Viet Pham — Fullstack Developer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio of Viet Pham — a passionate Fullstack Developer showcasing projects, skills, and experience.' },
        { property: 'og:title', content: 'Viet Pham — Fullstack Developer' },
        { property: 'og:description', content: 'Personal portfolio of Viet Pham — a passionate Fullstack Developer.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap' },
      ],
    },
  },

  compatibilityDate: '2026-03-04',
})
