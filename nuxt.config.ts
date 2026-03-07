// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  ui: {
    global: true
  },
  app: {
    head: {
      title: 'Hot Stuff Dance Dashboard',
      meta: [
        { name: 'description', content: 'User dashboard for Hot Stuff Dance' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      wpApiUrl: 'https://hotstuffdance.com/wp-json'
    }
  }
})
