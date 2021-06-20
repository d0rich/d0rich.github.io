import {Text} from "@/classes";

export class TimeNote{
    constructor(note = {
        title: new Text(),
        place: new Text(),
        period: {
            begin: new Text(),
            end: new Text()
        },
        description: new Text()
    }) {
        this.title = Text.fromObj(note.title)
        this.place = Text.fromObj(note.place)
        this.period = {
            begin: new Text(new Date(note.period.begin).toLocaleDateString('ru-ru', { month: 'short', year: 'numeric' }),
                new Date(note.period.begin).toLocaleDateString('en-en', { month: 'short', year: 'numeric' })),
            end: new Text(new Date(note.period.end).toLocaleDateString('ru-ru', { month: 'short', year: 'numeric' }),
                new Date(note.period.end).toLocaleDateString('en-en', { month: 'short', year: 'numeric' })),
        }
        this.description = Text.fromObj(note.description)
    }

}
