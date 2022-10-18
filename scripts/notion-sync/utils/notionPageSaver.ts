import {RichTextItemResponse, PageObjectResponse} from "@notionhq/client/build/src/api-endpoints";
import {MarkdownCompiler} from "./markdownCompiler";
import {PageWithContent} from "../types";
import * as fse from 'fs-extra'
import slugify from "slugify";

export class NotionPageSaver {
    private readonly pathToFolder: string

    constructor(pathToFolder: string) {
        this.pathToFolder = pathToFolder
    }

    save(page: PageWithContent){
        const slug = slugify(page.meta.id)
        const markdown = this.compileMarkdown(page)
        fse.mkdirpSync(`${this.pathToFolder}/${slug}`)
        fse.writeFileSync(`${this.pathToFolder}/${slug}/index.md`, markdown, { encoding: 'utf-8' })
    }

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

    compileMarkdown(page: PageWithContent){
        const compiler = new MarkdownCompiler()
        compiler.addProperties(this.extractProperties(page.meta))
        for (let blockWithChldren of page.content) {
            const block = blockWithChldren.block
            if (block.type === 'paragraph') {
                compiler.addParagraph(this.richTextToMd(block.paragraph.rich_text))
            } else if (block.type === 'heading_1') {
                compiler.addHeading1(this.richTextToMd(block.heading_1.rich_text))
            } else if (block.type === 'heading_2') {
                compiler.addHeading2(this.richTextToMd(block.heading_2.rich_text))
            } else if (block.type === 'heading_3') {
                compiler.addHeading3(this.richTextToMd(block.heading_3.rich_text))
            }
        }
        return compiler.compile()
    }
}