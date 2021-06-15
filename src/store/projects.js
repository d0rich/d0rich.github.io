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
        async getProjects({rootState},{page = 1, onPage = 6, tags = []}){
            let res =
                await axios.get(`${rootState.apiUrl}/projects/get/all?page=${page}&onPage=${onPage}&tags=${tags.join(',')}`)
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
        async getAllTags({rootState}){
            const result = await axios.get(`${rootState.apiUrl}/projects/tags/get/all`)
            return result.data.map(tag => ({ id: tag.id, text: tag.text }))
        },

        async getTagsForFilters({rootState}){
            const result = await axios.get(`${rootState.apiUrl}/projects/tags/get/forFilters`)
            return result.data.map(tag => ({ id: tag.id, text: tag.text }))
        },

        async createTag({rootState, rootGetters}, tag){
            try {
                const result = await axios.post(`${rootState.apiUrl}/projects/tags/create`, {text:tag}, rootGetters.authHeaders)
                return result.data
            }
            catch (e) {return e}
        },
        async getAllTechnologies({rootState}){
            const result = await axios.get(`${rootState.apiUrl}/projects/technologies/get/all`)
            return result.data.map(tech => ({ id: tech.id, name: tech.name, url: tech.url, version: '' }))
        },
        async checkStringId({rootState}, {stringId, id}){
            const result = await axios.get(`${rootState.apiUrl}/projects/check/stringId/${stringId}`)
            return !!result.data && result.data.id !== id
        },
        async editTechnology({rootState, rootGetters}, technology){
            try {
                const result = await axios.post(`${rootState.apiUrl}/projects/technologies/edit`, technology, rootGetters.authHeaders)
                result.data.version = ''
                return result.data
            }
            catch (e) {return e}
        }
    }
}
