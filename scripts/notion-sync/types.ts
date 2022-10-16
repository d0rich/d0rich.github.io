import {BlockObjectResponse, GetPageResponse} from "@notionhq/client/build/src/api-endpoints";

export type BlockWithChildren = {
    block: BlockObjectResponse
    children: BlockObjectResponse[]
}

export type PageWithContent = {
    meta: GetPageResponse
    content: BlockWithChildren[]
}