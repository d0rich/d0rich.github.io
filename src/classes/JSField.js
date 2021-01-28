import {Text} from "@/classes/text"

export class JSField{
    constructor(field = {key: new Text(), value: new Text()}) {
        this.key = field.key
        this.value = field.value
    }

}
