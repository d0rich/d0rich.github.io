import axios from "axios"
import store from '@/store'
import {Text} from "@/classes/text";
import ph from '@/assets/img-placeholder.svg'

const imageExample = {
    src: null,
    phSrc: ph,
    alt: new Text(),
    path: ''
}

export class ImageModel{
    constructor(image = imageExample) {
        this.alt = Text.fromObj(image.alt)
        this.path = image.path
        this.src = image.src
        this.phSrc = image.phSrc
    }

    async getSrc(){
        this.src = (await axios.get(`${store.state.apiUrl}/dbx/files/get/link?path=${this.path}`)).data
    }

    static async fetchFromPath(path, alt){
        const res = (await axios.get(`${store.state.apiUrl}/dbx/files/images/get/links?path=${path}`)).data
        return new ImageModel({ src: res.src, phSrc: res.phSrc, alt, path  })
    }
}
