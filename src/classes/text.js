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
}
