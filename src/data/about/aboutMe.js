import {fake} from "@/data/fake"
import {ImageModel, PageBlock} from "@/classes";

const fakeBlock = new PageBlock({
    title: fake.text.twoWords,
    text: fake.text.big,
    sideImage: new ImageModel(),
    bgImage: new ImageModel(),
    images: [new ImageModel()],
    videos: ['']
})

export default {
    overall: fakeBlock,
    specialization: fakeBlock,
    technologies: fakeBlock,
    hobbies: fakeBlock
}
