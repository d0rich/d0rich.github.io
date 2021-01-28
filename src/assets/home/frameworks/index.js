//import dorich from './dorich.jpg'
import js from './javascript.svg'
import mongo from './mongodb.svg'
import nodejs from './nodejs.svg'
import postgre from './postgresql.svg'
import vue from './vuejs.svg'

import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.png'
import bgsql from './bgsql.png'
import bgnosql from './bgnosql.png'
export default [
    {img: nodejs, bg: bg3, onSmall: true, smallNumber: 3, number: 1},
    {img: vue, bg: bg2, onSmall: true, smallNumber: 1, number: 2},
    {img: js, bg: bg1, onSmall: true, smallNumber: 2, number: 3},
    {img: mongo, bg: bgnosql, onSmall: false, number: 4},
    {img: postgre, bg: bgsql, onSmall: false, number: 5},

]
