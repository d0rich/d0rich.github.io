import Vue from 'vue'
const slugify = require('slugify')

export const idMixin = Vue.extend({
    methods: {
        textToId(text){
            return slugify(text, {
                remove: /[*+~.()'"!:@]/g,
                lower: true
            })
        }
    }
})
