import axios from "axios";
import {Text} from "@/classes/text";

export const resume = {
    state: () => ({
        resumeCollection: []
    }),
    getters:{

    },
    mutations:{
        setResumeCollection(state, resumeCollection){
            state.resumeCollection = resumeCollection.map(resume => {
                return {
                    id: resume.id,
                    spec: Text.fromObj(resume?.spec)
                }
            })
        }
    },
    actions:{
        async getAllResume({commit}){
            const response = await axios.get(`/resume/get/all`)
            commit('setResumeCollection', response.data)
        },
        async getResumeById(state, resumeId){
            const response = await axios.get(`/resume/get/byId/${resumeId}`)
            console.log(response.data)
            return {
                id: response.data.id,
                header: response.data.header,
                spec: response.data.spec,
                intro: response.data.intro,
                phone: response.data.phone,
                email: response.data.email,
                address: response.data.address,
                social: response.data.social,
                photo: response.data.photo,
                skills: response.data.skills,
                experience: response.data.experience,
                education: response.data.education
            }
        },
        async setResume({rootGetters}, resume){
            const response = await axios.post(`/resume/set`, resume, rootGetters.authHeaders)
            return response.data
        },
        // Social
        async getSocial(state, socialId){
            const response = await axios.get(`/resume/socials/get/byId/${socialId}`)
            return response.data
        },
        async getAllSocials(){
            const response = await axios.get(`/resume/socials/get/all`)
            return response.data.map(s => {
                return {
                    id: s.id,
                    title: Text.fromObj(s.title)
                }
            })
        },
        async checkSocialId(state, socialId){
            const response = await axios.get(`/resume/socials/checkId/${socialId}`)
            return response.data
        },
        async setSocial({rootGetters}, social){
            const response = await axios.post('/resume/socials/set', {
                    id: social.id,
                    title: social.title,
                    link: social.link,
                    icon: social.icon
                }, rootGetters.authHeaders)
            return response.data
        },
        // Skills
        async getSkillsNote(state, skillId){
            const response = await axios.get(`/resume/skills/get/byId/${skillId}`)
            return response.data
        },
        async getAllSkillsNotes(){
            const response = await axios.get(`/resume/skills/get/all`)
            return response.data.map(s => {
                return {
                    id: s.id,
                    title: Text.fromObj(s.title)
                }
            })
        },
        async checkSkillId(state, skillId){
            const response = await axios.get(`/resume/skills/checkId/${skillId}`)
            return response.data
        },
        async setSkillsNote({rootGetters}, skillsNote){
            const response = await axios.post('/resume/skills/set', skillsNote, rootGetters.authHeaders)
            return response.data
        },

    }
}
