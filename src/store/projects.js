import axios from "axios";

export const projects = {
    state: () => ({

    }),
    getters:{

    },
    mutations:{

    },
    actions:{
        async getAllTags({rootState}){
            const result = await axios.get(`${rootState.apiUrl}/projects/tags/get/all`)
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
