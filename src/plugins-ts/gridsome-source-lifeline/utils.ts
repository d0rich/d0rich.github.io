const slugify = require('slugify')

export function textToId(text: string): string{
    return slugify(text, {
        remove: /[*+~.()'"!:@]/g,
        lower: true
    })
}