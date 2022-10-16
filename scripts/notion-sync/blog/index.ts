import { Client } from "@notionhq/client";
import {fetchPage} from "../utils/fetchPage";

const DATABASE_ID = 'a0526f361bfd442bb48dc5ab2c33b41a'

export async function syncBlogPosts(notion: Client) {
    const db = await notion.databases.query({ database_id: DATABASE_ID })
    const postsPromises = db.results.map(async (item) => fetchPage(item.id, notion))
    const posts = await Promise.all(postsPromises)
}
