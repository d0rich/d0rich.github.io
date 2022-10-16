import {RichTextItemResponse} from "@notionhq/client/build/src/api-endpoints";

export class MdSaver {
    private content: string[] = []

    addHeading1(text: string){
        this.content.push('', `# ${text}`, '')
    }

    addHeading2(text: string){
        this.content.push('', `## ${text}`, '')
    }

    addHeading3(text: string){
        this.content.push('', `### ${text}`, '')
    }

    addHeading4(text: string){
        this.content.push('', `#### ${text}`, '')
    }

    addParagraph(text: string){
        this.content.push('', text, '')
    }

    addBlockquote(text: string){
        this.content.push('', ...text.split('\n').map(t => `> ${t}`), '')
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

    compile(): string {
        return this.content.join('\n')
    }
}