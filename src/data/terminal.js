import {Text} from "@/classes";

export default {
    terminal: new Text('Терминал', 'Terminal'),
    startText:[
        {
            text: new Text('Dorich сайт [Версия 1.0.19012021]', 'Dorich site [Version 1.0.19012021]'),
            show: false
        },
        {
            text: new Text(`(c) Разработчик Николай Дорофеев (d0rich), ${new Date().getFullYear()}. Все права защищены.`,
                            `(c) Developer Nikolay Dorofeev (d0rich), ${new Date().getFullYear()}. All rights reserved.`),
            show: false
        },
        {
            text: new Text(' ', ' '),
            show: false
        }
    ]
}
