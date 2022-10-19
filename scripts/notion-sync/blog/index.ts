import { Client } from "@notionhq/client";
import {fetchPage} from "../utils/fetchPage";
import {NotionPageSaver} from "../utils/notionPageSaver";

const DATABASE_ID = 'a0526f361bfd442bb48dc5ab2c33b41a'

export async function syncBlogPosts(notion: Client) {
    const db = await notion.databases.query({ database_id: DATABASE_ID })
    const postsPromises = db.results.map(async (item) => fetchPage(item.id, notion))
    const posts = await Promise.all(postsPromises)
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
    for (let post of postsFiltered) {
        await saver.save(post)
    }
}
