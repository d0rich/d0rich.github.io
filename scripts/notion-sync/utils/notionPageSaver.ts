import {RichTextItemResponse} from "@notionhq/client/build/src/api-endpoints";
import {MarkdownCompiler} from "./markdownCompiler";

export class NotionPageSaver {
    compiler = new MarkdownCompiler()

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