import {RichTextItemResponse, PageObjectResponse} from "@notionhq/client/build/src/api-endpoints";
import {MarkdownCompiler} from "./markdownCompiler";
import {PageWithContent} from "../types";
import * as fse from 'fs-extra'
import slugify from "slugify";
import axios from "axios";

export class NotionPageSaver {
    private readonly pathToFolder: string

    constructor(pathToFolder: string) {
        this.pathToFolder = pathToFolder
    }

    async save(page: PageWithContent){
        const slug = slugify(page.meta.id)
        const downloadPromises: Promise<any>[] = []
        fse.mkdirpSync(`${this.pathToFolder}/${slug}`)
        const markdown = this.compileMarkdown(page, (url: string, name: string) => {
            const extention = url.split('?')[0].split('.').reverse()[0]
            const download = async () => {
                const fileResponse = await axios.get(url, {responseType: 'arraybuffer'})
                fse.writeFileSync(`${this.pathToFolder}/${slug}/${slugify(name)}.${extention}`, fileResponse.data)
            }
            downloadPromises.push(download())
            return `./${slugify(name)}.${extention}`
        })
        fse.writeFileSync(`${this.pathToFolder}/${slug}/index.md`, markdown, { encoding: 'utf-8' })
        await Promise.all(downloadPromises)
    }

    extractProperties(meta: PageObjectResponse): Object {
        const props = meta.properties
        const resultProps: any = {}
        for (let propName in props) {
            const prop = props[propName]
            switch (prop.type) {
                case 'rich_text':
                    resultProps[propName] = this.richTextToPlainText(prop.rich_text)
                    break
                case 'date':
                    resultProps[propName] = prop.date?.start
                    break
                case 'multi_select':
                    resultProps[propName] = prop.multi_select.map(item => item.name)
                    break
                case 'title':
                    resultProps[propName] = this.richTextToPlainText(prop.title)
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
            if (item.href) text = `[${text}](${item.href})`
            return text
        })
        return content.join('')
    }

    richTextToPlainText(richText: RichTextItemResponse[]): string {
        return richText.map(t => t.plain_text).join('')
    }

    compileMarkdown(page: PageWithContent,
                    saveFileCallback: (url: string, name: string) => string = (url, name) => ''){
        const compiler = new MarkdownCompiler()
        compiler.addProperties(this.extractProperties(page.meta))
        for (let blockWithChildren of page.content) {
            const block = blockWithChildren.block
            if (block.type === 'paragraph') {
                compiler.addParagraph(this.richTextToMd(block.paragraph.rich_text))
            } else if (block.type === 'heading_1') {
                compiler.addHeading1(this.richTextToMd(block.heading_1.rich_text))
            } else if (block.type === 'heading_2') {
                compiler.addHeading2(this.richTextToMd(block.heading_2.rich_text))
            } else if (block.type === 'heading_3') {
                compiler.addHeading3(this.richTextToMd(block.heading_3.rich_text))
            } else if (block.type === 'image') {
                let url: string | null = null
                let name = this.richTextToPlainText(block.image.caption)
                if (block.image.type === 'external'){
                    url = saveFileCallback(block.image.external.url, name)
                } else if (block.image.type === 'file'){
                    url = saveFileCallback(block.image.file.url, name)
                }
                if (url) compiler.addImage(url, name)
            } else if (block.type === 'code'){
                compiler.addCodeSnippet(this.richTextToPlainText(block.code.rich_text), block.code.language)
            } else if (block.type === 'quote'){
                compiler.addBlockquote(this.richTextToMd(block.quote.rich_text))
            } else if (block.type === 'bulleted_list_item'){
                compiler.addBulletedListItem(this.richTextToMd(block.bulleted_list_item.rich_text))
            } else if (block.type === 'numbered_list_item'){
                compiler.addNumberedListItem(this.richTextToMd(block.numbered_list_item.rich_text))
            }
        }
        return compiler.compile()
    }
}