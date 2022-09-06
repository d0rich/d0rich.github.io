// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/sass/_globals.sass'),
          // or if you use scss
          path.resolve(__dirname, './src/assets/sass/_globals.scss'),
          // you can also use a glob if you'd prefer
          path.resolve(__dirname, './src/assets/sass/*.sass'),
          // or scss
          path.resolve(__dirname, './src/assets/sass/*.scss'),
        ],
      })
}

module.exports = {
  siteName: 'Dorich',
  siteUrl: 'https://d0rich.github.io',
  siteDescription: 'I am Nikolay Dorofeev, multiskilled software developer. I already know a lot of technologies for creating visual interfaces, servers, working with databases.',
  plugins: [
      // Analytics
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: 'G-FJFPMTV42J',
        },
      },
    },
      // Sitemap
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
        }
      }
    },
      // Robots
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://d0rich.github.io/',
        sitemap: 'https://d0rich.github.io/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/"
          }
        ]
      }
    },
      // Nodes for blog
    {
      use: '@gridsome/vue-remark',
      options: {
        pathPrefix: '/blog/posts',
        baseDir: 'content/blog',
        template: './src/templates/Post.vue',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        },
        plugins: [
          require("@akebifiky/remark-simple-plantuml"),
          require('remark-prism'),
        ]
      }
    },
      // Nodes for projects
    {
      use: '@gridsome/vue-remark',
      options: {
        pathPrefix: '/portfolio/projects',
        baseDir: 'content/projects',
        typeName: 'Project',
        template: './src/templates/Project.vue',
        refs: {
          tags: {
            typeName: 'ProjectTag',
            create: true
          },
          technologies: {
            typeName: 'Technology',
            create: true
          }
        },
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        },
        plugins: [
          require("@akebifiky/remark-simple-plantuml"),
          require('remark-prism'),
        ]
      }
    },
    // Nodes for lifeline
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/lifeline/*.md',
        typeName: 'LifeNote',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
      }
    },
      // Nodes for resume
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/resume/*.yaml',
        typeName: 'Resume'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/work-exp/*.yaml',
        typeName: 'WorkExperience'
      }
    },
    require('./src/plugins/gridsome-source-d0rich-github')
  ],
  templates: {
    Tag: '/blog/tags/:id',
    ProjectTag: '/portfolio/projects/tags/:id',
    Technology: '/portfolio/projects/technologies/:id',
    Resume: '/resume/:path'
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
