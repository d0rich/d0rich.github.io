// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@d0rich/nuxt-content-mermaid',
    '@nuxt-themes/typography',
    '@d0rich/nuxt-design-system'
  ],
  app: {
    pageTransition: {
      name: 'section',
      mode: 'out-in'
    }
  },
  css: ['assets/css/theme.css'],
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}']
  },
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/api/resume/Nikolay_Dorofeev-Software Engineer.pdf',
        '/api/resume/Nikolay_Dorofeev-Node.js Developer.pdf',
        '/api/resume/Nikolay_Dorofeev-Vue Frontend Developer.pdf',
        '/api/resume/Nikolay_Dorofeev-System Analyst.pdf'
      ]
    }
  },
  pinceau: {
    preflight: false
  },
  content: {
    markdown: {
      remarkPlugins: ['@akebifiky/remark-simple-plantuml'],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  }
})
