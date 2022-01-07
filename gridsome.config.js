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
  siteName: 'Gridsome',
  siteDescription: 'I am Nikolay Dorofeev, a young JavaScript developer from Tomsk (Russia). I already know a lot of technologies for creating visual interfaces, servers, working with databases. I will create web applications for business or join a development team.',
  plugins: [
      // Sitemap
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
        }
      }
    },
      // Nodes for blog
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
      // Nodes for projects
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/projects/**/*.md',
        typeName: 'Project',
        refs: {
          tags: {
            typeName: 'ProjectTag',
            create: true
          },
          technologies: {
            typeName: 'Technology',
            create: true
          }
        }
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
  ],
  templates: {
    Tag: '/blog/tags/:id',
    Post: '/blog/posts/:path',
    Project: '/portfolio/projects/:path',
    ProjectTag: '/portfolio/tags/:id',
    Technology: '/portfolio/technologies/:id',
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
