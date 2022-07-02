// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const { markdownToTxt } = require('markdown-to-txt')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  // Update pages metadata
  api.onCreateNode( node => {
    if (['Post', 'Project'].includes(node.internal.typeName)) {
      const mdDescription = /^[\w\W]*<!--more-->/.exec(node.content)
      if (node.summary) return node
      if (mdDescription)
        node.summary = markdownToTxt(mdDescription[0])
      else
        node.summary = markdownToTxt(node.content).substring(0, 250) + '...'
      return node
    }
  })

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
