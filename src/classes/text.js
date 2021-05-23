import store from '@/store'

export class Text{
    constructor(ru, en) {
        this.ru = ru
        this.en = en
    }
    getText(lang){
        if(lang === 'ru') return this.ru
        else return this.en
    }

    get text(){
        return this.getText(store.state.lang)
    }

    static fromObj(text = {ru: '', en: ''}){
        return new Text(text.ru, text.en)
    }

    static fromArr(text = ['', '']){
        return new Text(text[0], text[1])
    }
}
