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
                content: `<p>${news.summary}</p>`,
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
        monthsCollection.addReference('events', 'LifelineEvent')

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
                events: eventsCollection.data()
                    .filter((event: LifelineEvent) => (event.date.getDate() >= date.getDate()
                                && event.date.getMonth() === date.getMonth()
                                && event.date.getFullYear() === date.getFullYear())
                            || (event.date.getDate() < date.getDate()
                                && event.date.getMonth() === addMonths(date, 1).getMonth()
                                && event.date.getFullYear() === addMonths(date, 1).getFullYear()))
                    .map((event: LifelineEvent) => event.id)
            })
        }
        for (const month of months){
            monthsCollection.addNode(month)
        }
    })
}