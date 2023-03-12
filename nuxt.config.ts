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
  css: [
    'assets/css/theme.css'
  ],
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  nitro: {
    prerender: {
      routes: ['/resume/test.pdf']
    }
  },
  content: {
    markdown: {
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Roboto Slab': true,
      'JetBrains Mono': true,
      'Arsenal': true,
    },
    preload: true
  }
  
})
