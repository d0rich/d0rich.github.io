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
        async getAllResume({commit, rootGetters}){
            const response = await axios.get(`/resume/get/all`, rootGetters.authHeaders)
            commit('setResumeCollection', response.data)
        },
        async getResumeById({rootGetters}, resumeId){
            const response = await axios.get(`/resume/get/byId/${resumeId}`, rootGetters.authHeaders)
            return {
                id: response.data.id,
                show: response.data.show,
                header: response.data.header || {ru: '', en: ''},
                spec: response.data.spec || {ru: '', en: ''},
                intro: response.data.intro || {ru: '', en: ''},
                phone: response.data.phone,
                email: response.data.email,
                address: response.data.address || {ru: '', en: ''},
                social: response.data.social,
                photo: response.data.photo || {alt: {en:'', ru:''}, src:'', phSrc:''},
                skills: response.data.skills,
                experience: response.data.experience,
                education: response.data.education
            }
        },
        async checkResumeId(state, resumeId){
            try{
                const response = await axios.get(`/resume/checkId/${resumeId}`)
                return response.data
            }
            catch (e) {
                return false
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
            try{
                const response = await axios.get(`/resume/socials/checkId/${socialId}`)
                return response.data
            }
            catch (e) {
                return false
            }
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
            try{
                const response = await axios.get(`/resume/skills/checkId/${skillId}`)
                return response.data
            }
            catch (e) {
                return false
            }
        },
        async setSkillsNote({rootGetters}, skillsNote){
            const response = await axios.post('/resume/skills/set', skillsNote, rootGetters.authHeaders)
            return response.data
        },
        // Time Notes
        async getTimeNote(state, timeNoteId){
            const response = await axios.get(`/resume/timeNotes/get/byId/${timeNoteId}`)
            return response.data
        },
        async getAllEduTimeNotes(){
            const response = await axios.get(`/resume/timeNotes/get/all/education`)
            return response.data.map(s => {
                return {
                    id: s.id,
                    title: Text.fromObj(s.title)
                }
            })
        },
        async getAllExpTimeNotes(){
            const response = await axios.get(`/resume/timeNotes/get/all/experience`)
            return response.data.map(s => {
                return {
                    id: s.id,
                    title: Text.fromObj(s.title)
                }
            })
        },
        async checkTimeNoteId(state, timeNoteId){
            try{
                const response = await axios.get(`/resume/timeNotes/checkId/${timeNoteId}`)
                return response.data
            }
            catch (e) {
                return false
            }
        },
        async setTimeNote({rootGetters}, skillsNote){
            const response = await axios.post('/resume/timeNotes/set', skillsNote, rootGetters.authHeaders)
            return response.data
        },
    }
}
