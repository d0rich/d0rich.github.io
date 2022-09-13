// @ts-ignore
import PluginAPI from "PluginAPI"

const SourceFileSystemPlugin = require('@gridsome/source-filesystem')

module.exports = async function (api: PluginAPI) {

    new SourceFileSystemPlugin(api, {
        ...SourceFileSystemPlugin.defaultOptions(),
        path: 'content/lifeline/*.md',
        typeName: 'LifeNote',
        refs: {
            tags: {
                typeName: 'Tag',
                create: true
            }
        },
    })

    api.loadSource(async ({ getCollection, addCollection, store }: any) => {

    })
}