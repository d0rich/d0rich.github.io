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
        async getNewsFeed(state,{page = 1, onPage = 6}){
            let res =
                await axios.get(`/news/get/all?page=${page}&onPage=${onPage}}`)
            let newsData = res.data.news
            let newsFeed = newsData.map(news => {
                return {
                    id: news.id,
                    stringId: news.stringId,
                    createdAt: new Date(news.createdAt),
                    title: Text.fromArr(news.title),
                    image: new ImageModel({
                        src: news.image[0],
                        phSrc: news.image[1],
                        alt: Text.fromArr(news.title)
                    }),
                    contentShort: Text.fromArr(news.contentShort)
                }
            })
            return { pages: res.data.pages, news: newsFeed }
        },
        async checkNewsStringId(state, {stringId, id}){
            const result = await axios.get(`/news/check/stringId/${stringId}`)
            return !!result.data && result.data.id !== id
        },

    }
}
