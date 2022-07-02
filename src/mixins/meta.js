import Vue from 'vue'

export const metaMixin = Vue.extend({
    methods: {
        createMetaInfo({ title = '', description = '', image = '', keywords = [],
                           ogTitle = title, ogDescription = description, ogPath = '' } = {}){
            const basicKeywords = ['developer', 'informational technologies', 'IT']
            const meta = [
                { key: 'keywords', name: 'keywords', content: [...basicKeywords, ...keywords].join(', ') },
                { key: 'og:title', property: 'og:title', content: ogTitle },
                { key: 'og:url', property: 'og:url', content: this.$static.metadata.siteUrl + ogPath}
            ]
            if (description) {
                meta.push({ key: 'description' , name: 'description', content: description })
            }
            if (ogDescription) {
                meta.push({ key: 'og:description', property: 'og:description', content: ogDescription })
            }
            if (image) {
                meta.push(
                    {key: 'og:image', property: 'og:image', content: this.$static.metadata.siteUrl + image},
                    {key: 'vk:image', property: 'vk:image', content: this.$static.metadata.siteUrl + image}
                )
            }
            return {
                title: title,
                meta
            }
        }
    }
})
