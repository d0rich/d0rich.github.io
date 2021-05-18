import {SkillsSection, Social, TimeNote} from "@/classes";
import {fake} from "@/data/fake"



export default {
    photo: fake.img,
    header: fake.text.twoWords,
    intro: fake.text.middle,
    phone: fake.text.word,
    email: fake.text.word,
    address: fake.text.small,
    social: [
        new Social({link: '#', icon: 'mdi-telegram', title: fake.text.word}),
        new Social({link: '#', icon: 'mdi-telegram', title: fake.text.word}),
        new Social({link: '#', icon: 'mdi-telegram', title: fake.text.word})
    ],
    skills: [
            new SkillsSection( {title: fake.text.twoWords,
                skills: [fake.text.small.en]}),
            new SkillsSection( {title: fake.text.twoWords,
                skills: [fake.text.small.en]}),
            new SkillsSection( {title: fake.text.twoWords,
                skills: [fake.text.small.en]})
        ],
    experience: [
        new TimeNote({
            title: fake.text.twoWords,
            place: fake.text.twoWords,
            period: {
                begin: fake.text.twoWords,
                end: fake.text.twoWords
            },
            description: fake.text.middle }),
        new TimeNote({
            title: fake.text.twoWords,
            place: fake.text.twoWords,
            period: {
                begin: fake.text.twoWords,
                end: fake.text.twoWords
            },
            description: fake.text.middle }),
    ],
    education: [
        new TimeNote({
            title: fake.text.twoWords,
            place: fake.text.twoWords,
            period: {
                begin: fake.text.twoWords,
                end: fake.text.twoWords
            },
            description: fake.text.middle }),
        new TimeNote({
            title: fake.text.twoWords,
            place: fake.text.twoWords,
            period: {
                begin: fake.text.twoWords,
                end: fake.text.twoWords
            },
            description: fake.text.middle }),
    ],

}
