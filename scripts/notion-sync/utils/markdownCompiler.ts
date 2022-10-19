import { stringify } from 'yaml'

export class MarkdownCompiler{
    private content: string[] = []
    private numberedListCache = {
        lastNumber: 0,
        inProgress: false
    }

    private addBlock(...content: string[]) {
        this.content.push('', ...content, '')
    }

    private addLines(...content: string[]) {
        this.content.push(...content)
    }

    resetNumberedListCache(){
        this.numberedListCache.inProgress = false
        return this
    }

    addProperties(properties: any) {
        if (!this.content.length) {
            this.content.push('---', stringify(properties), '---', '')
        } else
            throw new Error('Properties should be added in the beginning of Markdown document.')
    }

    addHeading1(text: string){
        this.resetNumberedListCache()
        this.addBlock(`# ${text}`)
    }

    addHeading2(text: string){
        this.resetNumberedListCache()
        this.addBlock(`## ${text}`)
    }

    addHeading3(text: string){
        this.resetNumberedListCache()
        this.addBlock(`### ${text}`)
    }

    addHeading4(text: string){
        this.resetNumberedListCache()
        this.addBlock(`#### ${text}`)
    }

    addParagraph(text: string){
        this.resetNumberedListCache()
        this.addBlock(text)
    }

    addImage(url: string, title: string = ''){
        this.resetNumberedListCache()
        this.addBlock('<figure style="text-align: center">',
            '',
            `![${title}](${url})`,
            '',
            `<figcaption>${title}</figcaption>`,
            '</figure>')
    }

    addCodeSnippet(code: string, syntax: string = '') {
        this.resetNumberedListCache()
        this.addBlock(`\`\`\`${syntax}`, code, '\`\`\`')
    }

    addBlockquote(text: string){
        this.resetNumberedListCache()
        this.addBlock(...text.split('\n').map(t => `> ${t}`))
    }

    addBulletedListItem(text: string){
        this.resetNumberedListCache()
        this.addLines(`- ${text}`)
    }

    addNumberedListItem(text: string){
        if (this.numberedListCache.inProgress)
            this.numberedListCache.lastNumber += 1
        else
            this.numberedListCache.lastNumber = 1
        this.addLines(`${this.numberedListCache.lastNumber}. ${text}`)
        this.numberedListCache.inProgress = true
    }

    compile(): string {
        return this.content.join('\n')
    }
}