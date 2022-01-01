<template>
  <section ref="enterBlock" class="content">
    <div v-resize="onResize" class="block">
      <div v-for="(block, index) in blocks" :key="index"
           class="block__column">
        <div class="column__bg" :style="{backgroundImage: `url('${block.bg}'`}" />
        <div class="column__substrate--bg" />
        <div class="column__content">
          <img :src="block.img" :alt="index">
        </div>
        <div class="column__substrate" />
        <div class="column__overlay--primary" :class="{disabled: !block.overlay.primary}" />
        <div class="column__overlay--dark theme--dark" :class="{disabled: !block.overlay.dark}" />
      </div>
    </div>
    <div class="content__slot">
      <slot />
      <div class="content__btn--down" @click="scroll">
        <v-icon class="arrow">mdi-chevron-down</v-icon>
      </div>
    </div>
  </section>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "EnterBlock2",
  data(){
    return{
      images: [
				{img: '/img/home/enter/nodejs.svg', bg: '/img/home/enter/bg3.png', onSmall: true, smallNumber: 3, number: 1,
					overlay: {primary: true, dark: true} },
				{img: '/img/home/enter/vuejs.svg', bg: '/img/home/enter/bg2.jpg', onSmall: true, smallNumber: 1, number: 2,
					overlay: {primary: true, dark: true} },
				{img: '/img/home/enter/javascript.svg', bg: '/img/home/enter/bg1.jpg', onSmall: true, smallNumber: 2, number: 3,
					overlay: {primary: true, dark: true} },
				{img: '/img/home/enter/mongodb.svg', bg: '/img/home/enter/bgnosql.png', onSmall: false, number: 4,
					overlay: {primary: true, dark: true} },
				{img: '/img/home/enter/postgresql.svg', bg: '/img/home/enter/bgsql.png', onSmall: false, number: 5,
					overlay: {primary: true, dark: true} },
			],
      windowWidth: 1000
    }
  },
  methods:{
    onResize(){
      let isSmall = window.innerWidth < 960
      this.windowWidth = window.innerWidth
    },
    scroll(){
      let offset = 0
      if (this.headerOn){
        if(this.isSmall) offset = 56
        else offset = 64
      }
      window.scrollTo({
        top: this.$refs.enterBlock.getBoundingClientRect().bottom + window.pageYOffset - offset,
        behavior: "smooth"
      })
    }
  },
  computed:{
    isSmall(){
      return this.windowWidth < 960
    },
		blocks(){
			const blocks = []
			this.images.forEach(block => {
				if (!this.isSmall || block.onSmall)
					blocks.push(block)
			})
			blocks.sort((a, b) =>{
				if(!this.isSmall){
					if (a.number < b.number) {
						return -1;
					}
					if (a.number > b.number) {
						return 1;
					}
				}
				else {
					if (a.smallNumber < b.smallNumber) {
						return -1;
					}
					if (a.smallNumber > b.smallNumber) {
						return 1;
					}
				}
				return 0;
			})
			return blocks
		},
    ...mapGetters(["headerOn"])
  },
  async mounted() {
    await this.timeout(1000)
    for (let block of this.images){
      await this.timeout(200)
      block.overlay.dark = false
      await this.timeout(200)
      block.overlay.primary = false
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  position: relative;
  width: 100vw;
}
.block{
  display: flex;
  justify-content: center;
}
.column__substrate{
  background: black;
  filter: opacity(60%) ;
}
.content__slot{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block__column{
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  overflow: hidden;
}
.column__substrate, .column__bg,
.column__content, .column__overlay--primary,
.column__overlay--dark, .column__substrate--bg, .content__slot{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.column__substrate--bg{
  background: white;
  filter: opacity(30%) ;
}
.column__bg{
  background-position: left;
  background-attachment: fixed;
  background-size: cover;
  filter: saturate(30%);
}
.column__content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 90%;
  }
}
.column__overlay--primary{
  background: var(--v-primary-base);
  top: unset;
  bottom: 0;
  transition: height 1.3s ease-in;

  &.disabled{
    height: 0%;
  }
}
.column__overlay--dark{
  top: unset;
  bottom: 0;
  background: #121212;
  transition: height 1.3s ease-in;

  &.disabled{
    height: 0%;
  }
}
.content__btn--down{
  margin-top: 30px;
  border: solid 3px white;
  border-radius: 1000px;
  width: 60px;
  height: 60px;
  background: rgba(18, 18, 18, .2);
  transition: all .1s ease;
  .arrow{
    font-size: 45px;
    transition: all .1s ease;
    animation: arrow--up-down 1s ease infinite;
  }
}
.content__btn--down:hover{
  cursor: pointer;
  background: rgba(18, 18, 18, .8);
  border-color: var(--v-primary-lighten2);
  .arrow{
    color: var(--v-primary-lighten2);
  }
}
@keyframes arrow--up-down {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  40%{
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}
@media screen and (max-width: 960px){
  .block__column{
    height: calc(100vh - 56px);
  }
}
</style>
