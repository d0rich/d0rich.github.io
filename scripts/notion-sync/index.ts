import 'dotenv/config'

import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })
