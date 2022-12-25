// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { 
      name: 'section', 
      mode: 'out-in'
    },
    head: {
      meta: [
        {}
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@morev/vue-transitions/nuxt'
  ],
  css: [
    'assets/css/theme.css'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  }
  
})
