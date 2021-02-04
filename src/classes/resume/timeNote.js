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
            begin: Text.fromObj(note.period.begin),
            end: Text.fromObj(note.period.end)
        }
        this.description = Text.fromObj(note.description)
    }

}
