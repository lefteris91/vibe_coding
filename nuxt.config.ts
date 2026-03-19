// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@pinia/nuxt', '@vee-validate/nuxt'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Hot Stuff Dance Dashboard',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'preload', href: '/images/logo.png', as: 'image' }
      ],
      meta: [
        { name: 'description', content: 'User dashboard for Hot Stuff Dance' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {
      wpApiUrl: process.env.WP_API_URL || 'https://hotstuffdance.com/wp-json'
    }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true
  }
})
