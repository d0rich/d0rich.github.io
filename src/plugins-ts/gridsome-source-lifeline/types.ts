export type LifelineEvent = {
    id: string
    title: string
    date: Date
    tags: { title: string }[]
    story_filter_tag: string
    story_topic_tag: string
    story_icon: string
    image: string
    content: string
    postPath: string | null
}

export type LifelineMonth = {
    id: number
    number: number
    numberInYear: number
    year: number
    yearOfLife: number
    date: Date
    events: Partial<LifelineEvent>[]
}