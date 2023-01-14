// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { 
      name: 'section', 
      mode: 'out-in'
    },
    head: {
      titleTemplate: '%s | d0rich',
      meta: [
        {}
      ]
    }
  },
  build: {
    transpile: ['gsap'],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
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
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Roboto Slab': true,
      'JetBrains Mono': true
    },
    preload: true
  }
  
})
