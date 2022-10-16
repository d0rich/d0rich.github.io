import {Client} from "@notionhq/client";
import {BlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

type BlockWithChildren = {
    block: BlockObjectResponse
    children: BlockObjectResponse[]
}

export async function fetchBlock(id: string, notion: Client): Promise<BlockWithChildren>{
    const block = await notion.blocks.retrieve({block_id: id})
    let children: BlockWithChildren[]
    // @ts-ignore
    if (block.has_children){
        let childrenPageResponse = await notion.blocks.children.list({ block_id: id })
        // @ts-ignore
        children = await Promise.all(childrenPageResponse.results.map(ch => fetchBlock(ch.id, notion)))
        while (childrenPageResponse.has_more) {
            childrenPageResponse = await notion.blocks.children.list({ block_id: id })
            children.push(...await Promise.all(childrenPageResponse.results.map(ch => fetchBlock(ch.id, notion))))
        }
    } else children = []
    // @ts-ignore
    return { block, children }
}