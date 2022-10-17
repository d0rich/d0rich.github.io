import {RichTextItemResponse, PageObjectResponse, PropertyItemPropertyItemListResponse,
    RichTextPropertyItemObjectResponse} from "@notionhq/client/build/src/api-endpoints";
import {MarkdownCompiler} from "./markdownCompiler";

export class NotionPageSaver {
    compiler = new MarkdownCompiler()

    extractProperties(meta: PageObjectResponse): Object {
        const props = meta.properties
        const resultProps: any = {}
        for (let propName in props) {
            const prop = props[propName]
            switch (prop.type) {
                case 'rich_text':
                    resultProps[propName] = prop.rich_text.map(t => t.plain_text).join('')
                    break
                case 'date':
                    resultProps[propName] = prop.date?.start
                    break
                case 'multi_select':
                    resultProps[propName] = prop.multi_select.map(item => item.name)
                    break
                case 'title':
                    resultProps[propName] = prop.title.map(t => t.plain_text).join('')
                    break
                case 'select':
                    resultProps[propName] = prop.select?.name
                    break
                case 'number':
                    resultProps[propName] = prop.number
                    break
            }
        }
        return resultProps
    }

    richTextToMd(richText: RichTextItemResponse[]): string{
        const content: string[] = richText.map(item => {
            let text = item.plain_text
            if (item.annotations.code) text = '\`' + text + '\`'
            if (item.annotations.bold) text = `**${text}**`
            if (item.annotations.italic) text = `*${text}*`
            if (item.href) text = `[${text}(${item.href})]`
            return text
        })
        return content.join('')
    }
}