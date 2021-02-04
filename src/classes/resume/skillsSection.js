import {Text} from "@/classes";

const sectionExample = {
    title: new Text('', ''),
    skills: ['']
}

export class SkillsSection{
    constructor(skillsSection = sectionExample) {
        this.title = Text.fromObj(skillsSection.title)
        this.skills = skillsSection.skills
    }
}
