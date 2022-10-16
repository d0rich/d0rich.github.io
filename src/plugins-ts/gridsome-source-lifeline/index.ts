// @ts-ignore
import PluginAPI from "PluginAPI"
import {textToId, addMonths} from "./utils";
import {LifelineEvent, LifelineMonth} from "./types";

const SourceFileSystemPlugin = require('@gridsome/source-filesystem')

const AVERAGE_LIFE_YEARS = 65
const BIRTHDATE = new Date(2000, 6, 4)

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

    // Fullfill lifeline events
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
                story_filter_tag: news.story_filter_tag,
                story_topic_tag: news.story_topic_tag,
                content: `<p>${news.summary}</p>`,
                postPath: news.path,
                fileInfo: news.fileInfo,
                internal: news.internal
            })
        })

        lifelineEventsCollection._collection.data.forEach((event: any) => {
            event.id = textToId(event.title)
        })
    })
    // Add months collection
    api.loadSource(({ getCollection, addCollection, store }: any) => {
        const eventsCollection = getCollection('LifelineEvent')
        const monthsCollection = addCollection('LifelineMonth')

        const numberOfMonths = AVERAGE_LIFE_YEARS * 12
        const birthdate = BIRTHDATE
        const months: LifelineMonth[] = []
        for (let monthNumber = 0; monthNumber < numberOfMonths; monthNumber++ ) {
            const date = addMonths(birthdate, monthNumber)
            months.push({
                id: monthNumber + 1,
                number: monthNumber + 1,
                numberInYear: date.getMonth() - birthdate.getMonth() + (birthdate.getMonth() <= date.getMonth() ?  1 :  13),
                year: date.getFullYear(),
                yearOfLife: date.getFullYear() - birthdate.getFullYear() + (birthdate.getMonth() <= date.getMonth() ? 1 : 0),
                date,
                events: []
            })
        }
        for (const month of months){
            monthsCollection.addNode(month)
        }
    })

    api.loadSource(({ getCollection, addCollection, store }: any) => {
        const eventsCollection = getCollection('LifelineEvent')
        const monthsCollection = getCollection('LifelineMonth')

        for (const month of monthsCollection.data()){
            monthsCollection.updateNode({
                ...month,
                events: eventsCollection.data()
                    .filter((event: LifelineEvent) => (event.date.getDate() >= month.date.getDate()
                            && event.date.getMonth() === month.date.getMonth()
                            && event.date.getFullYear() === month.date.getFullYear())
                        || (event.date.getDate() < month.date.getDate()
                            && event.date.getMonth() === addMonths(month.date, 1).getMonth()
                            && event.date.getFullYear() === addMonths(month.date, 1).getFullYear()))
                    .map((event: LifelineEvent) => event)
            })
        }
    })
}