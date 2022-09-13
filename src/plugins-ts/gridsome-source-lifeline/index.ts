// @ts-ignore
import PluginAPI from "PluginAPI"
import {textToId} from "./utils";

const SourceFileSystemPlugin = require('@gridsome/source-filesystem')

module.exports = async function (api: PluginAPI) {

    new SourceFileSystemPlugin(api, {
        ...SourceFileSystemPlugin.defaultOptions(),
        path: 'content/lifeline/*.md',
        typeName: 'LifelineEvent',
        refs: {
            tags: {
                typeName: 'Tag',
                create: true
            }
        },
    })

    api.loadSource(({ getCollection, addCollection, store }: any) => {
        const lifelineEventsCollection = getCollection('LifelineEvent')
        const newsCollection = getCollection('Post')

        const newsToDisplayInLifeline = newsCollection.data().filter((news: any) => news.include_to_lifeline)
        newsToDisplayInLifeline.forEach((news: any) => {
            lifelineEventsCollection.addNode({
                id: news.id,
                path: news.path,
                title: news.title,
                date: news.date,
                image: news.image,
                tags: news.tags,
                content: `<p>${news.summary}</p>`
            })
        })

        lifelineEventsCollection._collection.data.forEach((event: any) => {
            event.id = textToId(event.title)
        })
    })
}