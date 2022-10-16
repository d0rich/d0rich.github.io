import { Client } from "@notionhq/client";

const DATABASE_ID = 'a0526f361bfd442bb48dc5ab2c33b41a'

export async function syncBlogPosts(notion: Client) {
    const db = await notion.databases.query({ database_id: DATABASE_ID })
    const postsPromises = db.results.map(async (item) => {
        return {
            meta: await notion.pages.retrieve({page_id: item.id}),
            content:( await notion.blocks.children.list({block_id: item.id, page_size: 1000})).results
        }

    })
    const posts = await Promise.all(postsPromises)
    console.log(posts)
}
