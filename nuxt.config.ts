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
  modules: ['@nuxthq/studio', '@nuxt/content'],
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/api/resume/Nikolai_Dorofeev-Fullstack_Developer.pdf',
        '/api/resume/Nikolai_Dorofeev-Backend_Developer.pdf',
        '/api/resume/Nikolai_Dorofeev-Frontend_Developer.pdf'
      ]
    }
  },
  content: {
    highlight: {
      theme: 'one-dark-pro'
    },
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
