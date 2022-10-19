import { Client } from "@notionhq/client";
import {fetchPage} from "./utils/fetchPage";
import {NotionPageSaver} from "./utils/notionPageSaver";
import * as cliProgress from 'cli-progress'

const DATABASE_ID = 'a0526f361bfd442bb48dc5ab2c33b41a'

let progress = new cliProgress.SingleBar({
    format: 'Posts parsing | {bar} | {percentage}% || {value}/{total} Posts',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

export async function syncBlogPosts(notion: Client) {
    let db = await notion.databases.query({ database_id: DATABASE_ID })
    progress.start(0, 0)
    const postsPromises = db.results.map(async (item) => {
        const result = await fetchPage(item.id, notion)
        progress.increment()
        return result
    })
    progress.setTotal(postsPromises.length)
    while (db.has_more) {
        // @ts-ignore
        db = await notion.databases.query({ database_id: DATABASE_ID, start_cursor: db.next_cursor })
        postsPromises.push(...db.results.map(async (item) => {
            const result = await fetchPage(item.id, notion)
            progress.increment()
            return result
        }))
        progress.setTotal(postsPromises.length)
    }
    const posts = await Promise.all(postsPromises)
    progress.stop()
    const postsFiltered = posts.filter(post => {
        if (post.meta.properties?.date?.type !== 'date')
            return false
        if (new Date(post.meta.properties?.date?.date?.start || Number(new Date()) + 1000) > new Date())
            return false
        if (post.meta.properties?.title?.type !== 'title')
            return false
        return true
    })
    const saver = new NotionPageSaver('content/blog', 'blogPost')
    progress = new cliProgress.SingleBar({
        format: 'Saving posts | {bar} | {percentage}% || {value}/{total} Posts || {post}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });
    progress.start(postsFiltered.length, 0)
    for (let post of postsFiltered) {
        // @ts-ignore
        progress.update({ post: saver.richTextToPlainText(post.meta.properties.title.title) })
        await saver.save(post)
        progress.increment()
    }
    progress.stop()
}
