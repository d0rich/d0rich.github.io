import { Client } from "@notionhq/client";
import {fetchPage} from "../utils/fetchPage";
import {NotionPageSaver} from "../utils/notionPageSaver";

const DATABASE_ID = 'a0526f361bfd442bb48dc5ab2c33b41a'

export async function syncBlogPosts(notion: Client) {
    const db = await notion.databases.query({ database_id: DATABASE_ID })
    const postsPromises = db.results.map(async (item) => fetchPage(item.id, notion))
    const posts = await Promise.all(postsPromises)
    const saver = new NotionPageSaver('content/notion/test')
    posts.forEach(post => {
        saver.save(post)
    })
}
