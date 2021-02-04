import {SkillsSection, Social, Text, TimeNote} from "@/classes";
import my_photo from '@/assets/home/dorich.jpg'

export default {
    photo: my_photo,
    header: new Text('Николай Дорофеев', 'Nikolay Dorofeev'),
    intro: new Text('Я JavaScript разработчик из Томска (Россия). ' +
        'На данный момент я обучаюсь на 3-ем курсе в Томском Политехническом Университете на направлении  ' +
        '"Информационные системы и технологии в бизнесе и промышленности". ' +
        'Я ищу удалённую работу, которую можно совмещать с учёбой, чтобы улучшать собственные навыки JS разработки и создавать классные продукты.',
        'I am a JavaScript developer from Tomsk (Russia).' +
        'At the moment I am studying at the 3rd year at the Tomsk Polytechnic University ' +
        'in the direction of "Information systems and technologies in business and industry". ' +
        'I\'m looking for remote work that can be combined with study to improve my own JS development skills and create awesome products.'),
    phone: new Text('+7-999-495-29-01', '+7-999-495-29-01'),
    email: new Text('d.orich@yandex.com', 'd.orich@yandex.com'),
    address: new Text('Россия, Томская обл., г. Томск 634061 ', 'Russia, Tomsk Oblast, Tomsk 634061'),
    social: [
        new Social({link: 'https://t.me/d0rich', icon: 'mdi-telegram', title: new Text('телеграм', 'telegram')}),
        new Social({link: 'https://vk.com/d0rich', icon: 'mdi-vk', title: new Text('вк', 'vk')}),
        new Social({link: 'https://github.com/d0rich', icon: 'mdi-github', title: new Text('github', 'github')})
    ],
    skills: [
            new SkillsSection( {title: new Text('Фронтенд Разработка','Frontend Development'),
                skills: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Vue.js', 'VueX', 'Vuetify.js', 'Bootstrap']}),
            new SkillsSection( {title: new Text('Бэкенд Разработка','Backend Development'),
                skills: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']}),
            new SkillsSection( {title: new Text('Инструменты','Instruments'),
                skills: ['WebStorm', 'DataGrip', 'Figma', 'Notion', 'Jira', 'Google docs']})
        ],
    experience: [],
    education: [
        new TimeNote({
            title: new Text('Информационные системы и технологии','Information systems and technologies'),
            place: new Text('Томский Политехнический Университет', 'Tomsk Polytechnic University'),
            period: {
                begin: new Text('Сентябрь, 2018','Sept, 2018'),
                end: new Text('Июль, 2022', 'Jul, 2022')
            },
            description: new Text('Бакалавр в сфере Информационных систем и технологий в бизнесе и промышленности. ' +
                'Сейчас обучаюсь на 3-ем курсе, имею только 5 по профильным предметам.',
                'BС in Information Systems and Technology in Business and Industry. ' +
                'Now I am studying in the 3rd year, I have only A in profile subjects.') }),
        new TimeNote({
            title: new Text('Vue.js фронтенд разработчик','Vue.js frontend developer'),
            place: new Text('Академия Умный мир', 'Smart world academy'),
            period: {
                begin: new Text('Октябрь, 2020','Oct, 2020'),
                end: new Text('Декабрь, 2020', 'Dec, 2020')
            },
            description: new Text('Освоил разработку продукта в команде с менеджером, аналитиками, бэкенд разработчиками, другими фронтенд разработчиками. ' +
                'Улучшил навыки разработки web клиентов с Vue.js и VueX. ',
                'Mastered product development in a team with a manager, analysts, backend developers, and other frontend developers. ' +
                'Improved skills in developing web clients with Vue.js and VueX. ') })
    ],

}
