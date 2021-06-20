import {Text} from "@/classes";

export default {
    phone: new Text('Телефон','Phone'),
    email: new Text('Email', 'Email'),
    address: new Text('Адрес', 'Address'),
    social: new Text('Социальные сети','Social'),
    skills: {
        title: new Text('Навыки', 'Skills'),
        subscription: new Text('Я постоянно улучшаю свои умения и изучаю новые технологии, чтобы выполнять свою работу эффективнее.',
            'I am constantly exercising my skills and learning new technologies to do my job more efficiently.')
    },
    experience: {
        title: new Text('Опыт работы', 'Experience'),
        subscription: new Text('Я сотрудничаю с другими специалистами и компаниями, ' +
            'чтобы создавать восхитительные цифровые продукты, которые решают проблемы пользователей.',
            'I partner with other professionals and companies to create amazing digital products that solve user problems.')
    },
    education: {
        title: new Text('Образование', 'Education'),
        subscription: new Text('Всю свою жизнь я свято верил, что образование важно. Я каждый день стараюсь узнать что-то новое.',
            'All my life I have been driven by my strong belief that education is important. ' +
            'I try to learn something new every single day.')
    }
}
