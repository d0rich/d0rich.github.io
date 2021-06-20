import axios from "axios";
import {ImageModel } from "@/classes/imageModel";
import {Text} from "@/classes/text";

export const projects = {
    state: () => ({

    }),
    getters:{

    },
    mutations:{

    },
    actions:{
        async getProjects(state,{page = 1, onPage = 6, tags = []}){
            let res =
                await axios.get(`/projects/get/all?page=${page}&onPage=${onPage}&tags=${tags.join(',')}`)
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
        async getAllTags(){
            const result = await axios.get(`/projects/tags/get/all`)
            return result.data.map(tag => ({ id: tag.id, text: tag.text }))
        },

        async getTagsForFilters(){
            const result = await axios.get(`/projects/tags/get/forFilters`)
            return result.data.map(tag => ({ id: tag.id, text: tag.text }))
        },

        async createTag({rootGetters}, tag){
            try {
                const result = await axios.post(`/projects/tags/create`, {text:tag}, rootGetters.authHeaders)
                return result.data
            }
            catch (e) {return e}
        },
        async getAllTechnologies(){
            const result = await axios.get(`/projects/technologies/get/all`)
            return result.data.map(tech => ({ id: tech.id, name: tech.name, url: tech.url, version: '' }))
        },
        async checkStringId(state, {stringId, id}){
            const result = await axios.get(`/projects/check/stringId/${stringId}`)
            return !!result.data && result.data.id !== id
        },
        async editTechnology({rootGetters}, technology){
            try {
                const result = await axios.post(`/projects/technologies/edit`, technology, rootGetters.authHeaders)
                result.data.version = ''
                return result.data
            }
            catch (e) {return e}
        }
    }
}
