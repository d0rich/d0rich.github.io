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
            begin: new Text(TimeNote.firestoreDateToString(note.period.begin, 'ru-ru'),
                TimeNote.firestoreDateToString(note.period.begin, 'en-en')),
            end: new Text(TimeNote.firestoreDateToString(note.period.end, 'ru-ru'),
                TimeNote.firestoreDateToString(note.period.end, 'en-en'))
        }
        this.description = Text.fromObj(note.description)
    }

    static firestoreDateToString(date = { _seconds: 0, _milliseconds: 0 },
                                 lang = ''){
        return new Date(date._seconds * 1000)
            .toLocaleDateString(lang, { month: 'short', year: 'numeric' })
    }
}
