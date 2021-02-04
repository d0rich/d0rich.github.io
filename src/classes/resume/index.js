export * from './social'
export * from './skillsSection'
export * from './timeNote'

import {Text} from "@/classes";
import {SkillsSection} from "@/classes/resume/skillsSection";
import {Social} from "@/classes/resume/social";
import {TimeNote} from "@/classes/resume/timeNote";

const noNotesNote = new TimeNote({
    title: new Text('Нет записей','No notes'),
    place: new Text(),
    period: {
        begin: new Text('Скоро','Soon'),
        end: new Text('Немного терпения','A little patience')
    },
    description: new Text('В ближайшее время тут появится запись.',
        'The first note will appear there vey soon.') })

const resumeExample = {
    photo: '',
    header: new Text(),
    intro: new Text(),
    phone: new Text(),
    email: new Text(),
    address: new Text(),
    social: [new Social()],
    skills: [new SkillsSection()],
    experience: [new TimeNote()],
    education: [new TimeNote()],
}

export class Resume{
    constructor(resume = resumeExample) {
        this.photo = resume.photo
        this.header = Text.fromObj(resume.header)
        this.intro = Text.fromObj(resume.intro)
        this.phone = Text.fromObj(resume.phone)
        this.email = Text.fromObj(resume.email)
        this.address = Text.fromObj(resume.address)
        this.social = resume.social
        this.skills = resume.skills
        this.experience = resume.experience
        this.education = resume.education

        if (this.experience.length === 0){
            this.experience.push(noNotesNote)
        }
        if (this.education.length === 0){
            this.education.push(noNotesNote)
        }
    }
}
