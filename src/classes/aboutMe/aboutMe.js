//import {Text} from "@/classes";
import {PageBlock} from "@/classes/pageBlock";

const pageExample = {
    overall: new PageBlock(),
    specialization: new PageBlock(),
    technologies: new PageBlock(),
    hobbies: new PageBlock()
}

export class AboutMe{
    constructor(page = pageExample) {
        this.overall = new PageBlock(page.overall)
        this.specialization = new PageBlock(page.specialization)
        this.technologies = new PageBlock(page.technologies)
        this.hobbies = new PageBlock(page.hobbies)
    }
}
