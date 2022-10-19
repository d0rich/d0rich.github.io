import 'dotenv/config'

import { Client } from "@notionhq/client"
import { syncBlogPosts } from "./blog";

const notion = new Client({ auth: process.env.NOTION_SECRET })

async function main(){
    await syncBlogPosts(notion)
}

main()