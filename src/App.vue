<template>
	<layout>
		<router-view  class="page px-4" />
	</layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      titleTemplate: '%s | Dorich - JavaScript Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { key: 'description' , name: 'description',
          content: this.$static.metadata.siteDescription },
        {
          key: 'keywords', name: 'keywords',
          content: 'JavaScript developer, web developer, ' +
              'developer in Tomsk, frontend, backend, fullstack'
        },
        { key: 'og:title', property: 'og:title', content: 'Dorich - JavaScript Developer' },
        { key: 'og:description', property: 'og:description',
          content: this.$static.metadata.siteDescription},
        { key: 'og:site_name', property: 'og:site_name', content: 'Dorich - JS Developer'},
        { key: 'og:type', property: 'og:type', content: 'website'},
        { key: 'og:image', property: 'og:image', content: this.$static.metadata.siteUrl + '/img/og/og-image.jpg'},
        { key: 'vk:image', property: 'vk:image', content: this.$static.metadata.siteUrl + '/img/og/vk-image.jpg'},
        { key: 'robots', name: 'robots', content: 'index,follow'}
      ]
    }

  }
}
</script>
<style>
.page{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1080px;
	margin: auto;
}
</style>
