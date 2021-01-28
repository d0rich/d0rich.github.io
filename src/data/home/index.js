import {JSField, JSObject, Text} from "@/classes";
import my_photo from '@/assets/home/dorich.jpg'


import pic1 from './pic1.svg'
export default {
    h1: new Text('Привет мир!', 'Hello world!'),
    pic1: pic1,
    p1: {
        t1: new Text('Привет, меня зовут Николай Дорофеев.', 'Hello, my name is Nikolay Dorofeev.'),
        t2: new Text('Я ', 'I am '),
        t3: new Text('JavaScript разработчик', 'JavaScript developer'),
        t4: new Text('И это мой личный сайт.', 'And this is my own site.')
    },
    p2: {
        t1: new Text('На данном сайте вы можете ознакомиться с моим '),
        t2: new Text('портфолио'),
        t3: new Text(', узнать побольше информации '),
        t4: new Text('обо мне'),
        t5: new Text(' и моих умениях, почитать мой '),
        t6: new Text('блог'),
        t7: new Text(', может увидите что-то интересное :).')
    },
    my_photo: my_photo,
    obj1: new JSObject([
        new JSField( { key: new Text('Имя', 'Name'), value: new Text('Николай', 'Nikolay') } ),
        new JSField( { key: new Text('Фамилия', 'Surname'), value: new Text('Дорофеев', 'Dorofeev') } ),
        new JSField( { key: new Text('Возраст', 'Age'), value: new Text('20', '20') } ),
        new JSField( { key: new Text('Статус', 'Status'), value: new Text('Студент', 'Student') } )
    ], new Text('Личность', 'Person')),
    obj2: new JSObject([
        new JSField( { key: new Text('Имя', 'Name'), value: new Text('Николай', 'Nikolay') } ),
        new JSField( { key: new Text('Фамилия', 'Surname'), value: new Text('Дорофеев', 'Dorofeev') } ),
        new JSField( { key: new Text('Возраст', 'Age'), value: new Text('20', '20') } ),
        new JSField( { key: new Text('Статус', 'Status'), value: new Text('Студент', 'Student') } )
    ], new Text('Личность', 'Person'))
}
