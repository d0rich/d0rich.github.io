export class MarkdownCompiler{
    private content: string[] = []

    private addBlock(...content: string[]) {
        this.content.push('', ...content, '')
    }

    addHeading1(text: string){
        this.addBlock(`# ${text}`)
    }

    addHeading2(text: string){
        this.addBlock(`## ${text}`)
    }

    addHeading3(text: string){
        this.addBlock(`### ${text}`)
    }

    addHeading4(text: string){
        this.addBlock(`#### ${text}`)
    }

    addParagraph(text: string){
        this.addBlock(text)
    }

    addBlockquote(text: string){
        this.addBlock(...text.split('\n').map(t => `> ${t}`))
    }

    compile(): string {
        return this.content.join('\n')
    }
}