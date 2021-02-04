import {Text} from "@/classes";

const socialExample = {
    title: new Text(),
    link: '',
    icon: ''
}
export class Social{
    constructor(social = socialExample) {
        this.title = Text.fromObj(social.title)
        this.link = social.link
        this.icon = social.icon
    }
}
