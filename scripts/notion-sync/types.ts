import {BlockObjectResponse, PageObjectResponse} from "@notionhq/client/build/src/api-endpoints";

export type BlockWithChildren = {
    block: BlockObjectResponse
    children: BlockObjectResponse[]
}

export type PageWithContent = {
    meta: PageObjectResponse
    content: BlockWithChildren[]
}