export type LifelineEvent = {
    id: string
    title: string
    date: Date
    tags: { title: string }[]
    image: string
    content: string
}

export type LifelineMonth = {
    id: number
    number: number
    numberInYear: number
    year: number
    yearOfLife: number
    events: Partial<LifelineEvent>[]
}