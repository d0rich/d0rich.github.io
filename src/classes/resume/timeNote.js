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
        if (this.period.begin.en === "Invalid Date")
            this.period = {
                begin: new Text('Ожидается', 'Expecting'),
                end: new Text('Скоро', 'Soon')
            }
        if (TimeNote.firestoreDateToJsDate(note.period.end) > new Date())
            this.period.end = new Text('Сейчас', 'Now')
        this.description = Text.fromObj(note.description)
    }

    static firestoreDateToJsDate(date = { _seconds: 0, _milliseconds: 0 }){
        return new Date(date._seconds * 1000)
    }
    static firestoreDateToString(date = { _seconds: 0, _milliseconds: 0 },
                                 lang = ''){
        return TimeNote.firestoreDateToJsDate(date)
            .toLocaleDateString(lang, { month: 'short', year: 'numeric' })
    }
}
