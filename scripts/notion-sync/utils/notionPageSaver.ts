import {RichTextItemResponse, PageObjectResponse, BlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";
import {MarkdownCompiler} from "./markdownCompiler";
import {BlockWithChildren, PageWithContent} from "../types";
import * as fse from 'fs-extra'
import slugify from "slugify";
import axios from "axios";

type NamingStrategy = 'blogPost' | 'storyEvent'

export class NotionPageSaver {
    private readonly pathToFolder: string
    private readonly namingStrategy: NamingStrategy

    constructor(pathToFolder: string, namingStrategy: NamingStrategy) {
        this.pathToFolder = pathToFolder
        this.namingStrategy = namingStrategy
    }

    private createFileName(page: PageWithContent): string {
        if (this.namingStrategy === 'blogPost') {
            if (!page.meta.properties.date)
                throw new Error(`Post has no date property. ID: ${page.meta.id}`)
            if (page.meta.properties.date.type !== 'date')
                throw new Error(`Post has invalid data type for date property. ID: ${page.meta.id}`)
            if (!page.meta.properties.date.date?.start)
                throw new Error(`Post has empty date. ID: ${page.meta.id}`)
            if (!page.meta.properties.title)
                throw new Error(`Post has no title property. ID: ${page.meta.id}`)
            if (page.meta.properties.title.type !== 'title')
                throw new Error(`Post has invalid data type for title property. ID: ${page.meta.id}`)
            const date = page.meta.properties.date.date
            const title = page.meta.properties.title.title
            return `${date.start}-${slugify(this.richTextToPlainText(title), {lower: true})}`
        } else throw new Error(`"${this.namingStrategy}" naming strategy is not implemented`)
    }

    async save(page: PageWithContent){
        const slug = this.createFileName(page)
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

    extractProperties(meta: PageObjectResponse,
                      saveCoverCallback: (url: string) => string = (url: string) => './cover.png'): Object {
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
                case 'checkbox':
                    resultProps[propName] = prop.checkbox
                    break
            }
        }
        if (meta.cover) {
            if (meta.cover.type === 'file'){
                resultProps.image = saveCoverCallback(meta.cover.file.url)
            } else if (meta.cover.type === 'external') {
                resultProps.image = saveCoverCallback(meta.cover.external.url)
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
        compiler.addProperties(this.extractProperties(page.meta, (url: string) => {
            return saveFileCallback(url, 'cover')
        }))

        const blockToMd = (blockWithChildren: BlockWithChildren) => {
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
                    url = saveFileCallback(block.image.external.url, name || block.id)
                } else if (block.image.type === 'file'){
                    url = saveFileCallback(block.image.file.url, name || block.id)
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
            compiler.increaseIntend()
            for (let child of blockWithChildren.children)
                blockToMd(child)
            compiler.decreaseIntend()
        }
        for (let blockWithChildren of page.content) {
            compiler.resetIntend()
            blockToMd(blockWithChildren)
        }
        return compiler.compile()
    }
}