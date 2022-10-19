import {BlockObjectResponse, PageObjectResponse} from "@notionhq/client/build/src/api-endpoints";

export type BlockWithChildren = {
    block: BlockObjectResponse
    children: BlockWithChildren[]
}

export type PageWithContent = {
    meta: PageObjectResponse
    content: BlockWithChildren[]
}