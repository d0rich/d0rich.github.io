import { stringify } from 'yaml'

export class MarkdownCompiler{
    private content: string[] = []
    private numberedListCache = {
        lastNumber: 0,
        inProgress: false
    }
    private intend: number = 0
    private readonly intendSymbol = '  '

    private addBlock(...content: string[]) {
        this.content.push('',
            ...content.map(t => this.intendSymbol.repeat(this.intend) + t),
            '')
    }

    private addLines(...content: string[]) {
        this.content.push(...content.map(t => this.intendSymbol.repeat(this.intend) + t))
    }

    increaseIntend(steps: number = 1){
        if (steps <= 0) throw new Error('Number of steps should be at least 1')
        if (!Number.isInteger(steps)) throw new Error('Number of steps should be integer')
        this.intend += steps
        return this
    }

    decreaseIntend(steps: number = 1){
        if (steps <= 0) throw new Error('Number of steps should be at least 1')
        if (!Number.isInteger(steps)) throw new Error('Number of steps should be integer')
        if (this.intend - steps <= 0) return this.resetIntend()
        this.intend -= steps
        return this
    }

    resetIntend(){
        this.intend = 0
        return this
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
            `${this.intendSymbol}![${title}](${url})`,
            '',
            `${this.intendSymbol}<figcaption>${title}</figcaption>`,
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