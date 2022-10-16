import {defineComponent} from "@vue/composition-api";

// TODO: Delete meta mixin and implement as imported function
export const metaMixin = defineComponent({
    methods: {
        // @ts-ignore
        createMetaInfo({   title = '',
                           // @ts-ignore
                           description = '',
                           image = '',
                           keywords = [],
                           ogTitle = title,
                           ogDescription = description,
                           ogPath = '' } = {}): any{
            const basicKeywords = ['developer', 'informational technologies', 'IT']
            const meta = [
                { key: 'keywords', name: 'keywords', content: [...basicKeywords, ...keywords].join(', ') },
                { key: 'og:title', property: 'og:title', content: ogTitle },
                // @ts-ignore
                { key: 'og:url', property: 'og:url', content: this.$static.metadata.siteUrl + ogPath}
            ]
            if (description) {
                meta.push({ key: 'description' , name: 'description', content: description })
            }
            if (ogDescription) {
                meta.push({ key: 'og:description', property: 'og:description', content: ogDescription })
            }
            if (image) {
                // @ts-ignore
                const imageSrc = image.src || image
                meta.push(
                    // @ts-ignore
                    {key: 'og:image', property: 'og:image', content: this.$static.metadata.siteUrl + imageSrc},
                    // @ts-ignore
                    {key: 'vk:image', property: 'vk:image', content: this.$static.metadata.siteUrl + imageSrc}
                )
            }
            return {
                title: title,
                meta
            }
        }
    }
})
