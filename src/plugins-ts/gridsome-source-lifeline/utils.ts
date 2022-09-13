const slugify = require('slugify')

export function textToId(text: string): string{
    return slugify(text, {
        remove: /[*+~.()'"!:@]/g,
        lower: true
    })
}

export function addMonths(date = new Date(), months = 0) {
    const newDate = new Date(date)
    newDate.setMonth(date.getMonth() + months)
    return newDate
}
export function weeksBetween(d1: Date, d2: Date) {
    return Math.round(((+d2) - (+d1)) / (7 * 24 * 60 * 60 * 1000));
}
export function formatDate(date: Date){
    const dateInternal = new Date(date)
    return dateInternal.toLocaleDateString('en-GB')
}