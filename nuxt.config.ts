// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {}
      ]
    }
  },
  css: [
    'assets/css/theme.css'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@morev/vue-transitions/nuxt'
  ],
  colorMode: {
    classSuffix: '',
    
  }
  
})
