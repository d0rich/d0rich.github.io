<template>
	<v-app class="main-scroll" v-resize="onResize">
		<Header v-if="headerOn" />
		<BottomNavigation v-else />
		<v-main>
			<transition name="glitch-transition" mode="out-in">
				<div class="page pa-2">
					<slot />
				</div>
			</transition>
		</v-main>
		<Footer />
	</v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import '~/assets/fonts/JetBrainsMono/fontface.css'
import '~/assets/styles/font.scss'
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import BottomNavigation from "~/components/layout/BottomNavigation";
import {mapGetters, mapMutations} from 'vuex'

export default {
	name: 'App',

	components: {
		Header, BottomNavigation,
		Footer,
	},

	data: () => ({
		//
	}),
	computed:{
		...mapGetters(['headerOn']),
	},
	methods:{
		...mapMutations(['getWindowWidth']),
		onResize(){
			this.getWindowWidth(window.innerWidth)
		}
	},
	metaInfo() {
		return {
			title: this.title,
			titleTemplate: '%s | Dorich - JavaScript Developer',
			htmlAttrs: {
				lang: this.lang,
			},
			meta: [
				{ vmid: 'description' , name: 'description',
					content: 'I am Nikolay Dorofeev, a young JavaScript developer from Tomsk (Russia). ' +
						'I already know a lot of technologies for creating visual interfaces, ' +
						'servers, working with databases. ' +
						'I will create web applications for business or join a development team.' },
				{
					vmid: 'keywords', name: 'keywords',
					content: 'JavaScript developer, web applications for business, ' +
						'developer in Tomsk, frontend, backend, fullstack'
				},
				{ vmid: 'og:title', property: 'og:title', content: 'Dorich - JavaScript Developer' },
				{ vmid: 'og:description', property: 'og:description',
					content: 'I am Nikolay Dorofeev, a young JavaScript developer from Tomsk (Russia). ' +
						'I already know a lot of technologies for creating visual interfaces, ' +
						'servers, working with databases. ' +
						'I will create web applications for business or join a development team.'},
				{ vmid: 'og:site_name', property: 'og:site_name', content: 'Dorich Dev'},
				{ vmid: 'og:type', property: 'og:type', content: 'website'},
				{ vmid: 'og:image', property: 'og:image', content: '/og/og-image.jpg'},
				{ vmid: 'vk:image', property: 'vk:image', content: '/og/vk-image.jpg'},
				{ vmid: 'robots', name: 'robots', content: 'index,follow'}
			]
		}

	}
};
</script>

<style>
@import "../assets/styles/linkFormatter.css";
@import "../assets/styles/cursor.css";
@import "../assets/styles/scroll.scss";
@import "../assets/styles/borderLight.css";
#app{
	font-family: 'JetBrains Mono', Roboto, sans-serif;
	overflow: hidden;
}
.page{
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1080px;
	margin: auto;
}
.loading-container{
	pointer-events: none;
	position: fixed;
	z-index: 12000;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
}
.v-image__image--preload{
	filter: none;
}
@media screen and (max-width: 640px) {
	html{
		font-size: 13px;
	}
	#app{
		padding-bottom: 54px;
	}
}
</style>

