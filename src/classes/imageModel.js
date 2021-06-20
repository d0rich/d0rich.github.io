import {Text} from "@/classes/text";
import ph from '@/assets/img-placeholder.svg'

const imageExample = {
    src: null,
    phSrc: ph,
    alt: {ru: '', en: ''}
}

export class ImageModel{
    constructor(image = imageExample) {
        this.alt = Text.fromObj(image.alt)
        this.src = image.src
        this.phSrc = image.phSrc
    }
}
