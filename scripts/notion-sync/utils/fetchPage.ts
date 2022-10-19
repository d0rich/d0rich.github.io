import { Client } from "@notionhq/client";
import { fetchBlock } from "./fetchBlock";
import { PageWithContent} from "../types";

export async function fetchPage(id: string, notion: Client): Promise<PageWithContent>{
    const meta = await notion.pages.retrieve({page_id: id})
    let childrenResponse = await notion.blocks.children.list({block_id: id})
    const children = await Promise.all(childrenResponse.results.map(ch => fetchBlock(ch.id, notion)))
    while (childrenResponse.has_more) {
        childrenResponse = await notion.blocks.children
            // @ts-ignore
            .list({block_id: id, start_cursor: childrenResponse.next_cursor})
        children.push(...await Promise.all(childrenResponse.results.map(ch => fetchBlock(ch.id, notion))))
    }
    // @ts-ignore
    return { meta, content: children }
}

