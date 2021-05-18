import {Text} from "@/classes/text";
import {ImageModel} from "@/classes/imageModel";

const blockExample = {
    title: new Text(),
    text: new Text(),
    sideImage: new ImageModel(),
    bgImage: new ImageModel(),
    images: [new ImageModel()],
    videos: ['']
}

export class PageBlock{
    images = [new ImageModel()]
    videos = ['']
    constructor(block = blockExample) {
        this.title = Text.fromObj(block.title)
        this.text = Text.fromObj(block.text)
        if (block.sideImage)
            this.sideImage = new ImageModel(block.sideImage)
        if (block.bgImage)
            this.bgImage = new ImageModel(block.bgImage)
        this.images = []
        block.images?.forEach(image => {
            this.images.push(new ImageModel(image))
        })
        this.videos = []
        block.videos?.forEach(video => {
            this.videos.push(video)
        })
    }
}
