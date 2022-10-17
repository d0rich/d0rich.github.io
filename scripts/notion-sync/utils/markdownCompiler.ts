export class MarkdownCompiler{
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

    compile(): string {
        return this.content.join('\n')
    }
}