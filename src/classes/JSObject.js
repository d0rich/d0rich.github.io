import {JSField} from "@/classes"

export class JSObject{
    fields = []
    constructor(fields = [], name) {
        this.name = name
        for (const f of fields){
            this.addField(f)
        }
    }

    addField(field = new JSField()){
        this.fields.push(field)
    }
}
