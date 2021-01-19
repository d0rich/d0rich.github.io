import {Text} from "@/classes";

import pic1 from './pic1.svg'

export default {
    h1: new Text('Привет мир!', 'Hello world!'),
    pic1: pic1,
    p1: new Text('Приветствую вас на моём личном сайте-портфолио. ' +
            'Меня зовут Николай Дорофеев и я являюсь fullstack web-разработчиком.'),
    p2: {
        t1: new Text('На данном сайте вы можете ознакомиться с моим '),
        t2: new Text('портфолио'),
        t3: new Text(', узнать побольше информации '),
        t4: new Text('обо мне'),
        t5: new Text(' и моих умениях, почитать мой '),
        t6: new Text('блог'),
        t7: new Text(', может увидите что-то интересное :).')
    }
}
