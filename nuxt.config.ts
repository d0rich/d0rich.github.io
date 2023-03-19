// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '../nuxt-design-system'
  ],
  app: {
    pageTransition: {
      name: 'section',
      mode: 'out-in'
    }
  },
  css: ['assets/css/theme.css'],
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  modules: [
    '@nuxt/content'
  ],
  nitro: {
    prerender: {
      routes: [
        '/api/resume/Nikolay_Dorofeev-Software Engineer.pdf',
        '/api/resume/Nikolay_Dorofeev-Node.js Developer.pdf',
        '/api/resume/Nikolay_Dorofeev-Vue Frontend Developer.pdf',
        '/api/resume/Nikolay_Dorofeev-System Analyst.pdf'
      ]
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
  }
})
