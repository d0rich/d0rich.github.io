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
        }
    }
}
