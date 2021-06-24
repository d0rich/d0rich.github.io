export * from './social'
export * from './skillsSection'
export * from './timeNote'

import {Text} from "@/classes";
import {ImageModel} from "@/classes/imageModel";
import {SkillsSection} from "@/classes/resume/skillsSection";
import {Social} from "@/classes/resume/social";
import {TimeNote} from "@/classes/resume/timeNote";

const noNotesNote = new TimeNote({
    title: new Text('Нет записей','No notes'),
    place: new Text(),
    period: {
        begin: new Date(),
        end: new Date()
    },
    description: new Text('В ближайшее время тут появится запись.',
        'The first note will appear there vey soon.') })

const resumeExample = {
    spec: new Text(),
    show: false,
    photo: new ImageModel(),
    header: new Text(),
    intro: new Text(),
    phone: '',
    email: '',
    address: new Text(),
    social: [new Social()],
    skills: [new SkillsSection()],
    experience: [new TimeNote()],
    education: [new TimeNote()],
}

export class Resume{
    constructor(resume = resumeExample) {
        this.spec = Text.fromObj(resume.spec)
        this.show = !!resume.show
        this.photo = new ImageModel(resume.photo)
        this.header = Text.fromObj(resume.header)
        this.intro = Text.fromObj(resume.intro)
        this.phone = resume.phone
        this.email = resume.email
        this.address = Text.fromObj(resume.address)
        this.social = resume.social?.map(s => new Social(s))
        this.skills = resume.skills?.map(skill => new SkillsSection(skill))
        this.experience = resume.experience?.map(exp => new TimeNote(exp))
        this.education = resume.education?.map(ed => new TimeNote(ed))
        if (!this.experience?.length){
            this.experience = []
            this.experience.push(noNotesNote)
        }
        if (!this.education?.length){
            this.education = []
            this.education.push(noNotesNote)
        }
    }
}
