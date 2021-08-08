import axios from "axios";
import {ImageModel } from "@/classes/imageModel";
import {Text} from "@/classes/text";

export const news = {
    state: () => ({

    }),
    getters:{

    },
    mutations:{

    },
    actions:{
        async getNewsFeed(state,{page = 1, onPage = 6, tags = []}){
            let res =
                await axios.get(`/news/get/all?page=${page}&onPage=${onPage}&tags=${tags.join(',')}`)
            let projectsData = res.data.projects
            let projects = projectsData.map(project => {
                return {
                    id: project.id,
                    stringId: project.stringId,
                    date: new Date(project.date),
                    title: Text.fromArr(project.title),
                    image: new ImageModel({
                        src: project.imgUrl[0],
                        phSrc: project.imgUrl[1],
                        alt: Text.fromArr(project.title)
                    }),
                    tags: project.tagId_tags.map(tag => {
                        return {id: tag.id, text: tag.text}
                    })
                }
            })
            return { pages: res.data.pages, projects }
        },
        async checkNewsStringId(state, {stringId, id}){
            const result = await axios.get(`/news/check/stringId/${stringId}`)
            return !!result.data && result.data.id !== id
        },

    }
}
