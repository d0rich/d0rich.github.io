<template>
    <v-app-bar
        app
        class="header"
        v-resize="onResize"
    >
      <nav class="header-line">
        <v-btn active-class="cursor-active-box" text :to="navigation.news.route">
          <span class="cursor--on-active">{{ navigation.news.text }}</span>
        </v-btn>

				<v-btn active-class="cursor-active-box" text :to="navigation.portfolio.route">
					<span class="cursor--on-active">{{navigation.portfolio.text}}</span>
				</v-btn>

        <g-link v-ripple :to="navigation.home.route" class="btn-main" :class="{'cursor-active-box': $route.fullPath === '/'}">
          <span class="cursor--on-active">{{navigation.home.text}}</span>
        </g-link>

				<v-btn active-class="cursor-active-box" text :to="navigation.resume.route">
					<span class="cursor--on-active">{{ navigation.resume.text }}</span>
				</v-btn>

				<v-btn active-class="cursor-active-box" text :to="navigation.lifeline.route">
					<span class="cursor--on-active">{{navigation.lifeline.text}}</span>
				</v-btn>
        <theme-switcher style="display: none" />
      </nav>
      <div class="header-bg">
        <div class="square1" :class="{active: squaresOn}" :style="{width: `${squareWidth}px`, height: `${squareWidth}px`}"></div>
        <div class="square2" :class="{active: squaresOn}" :style="{width: `${squareWidth*5/6}px`, height: `${squareWidth*5/6}px`}"></div>
      </div>
    </v-app-bar>
</template>

<script>
import {navigation} from '~/router/'
import ThemeSwitcher from "../ThemeSwitcher";
export default {
name: "Header",
  components: {
    ThemeSwitcher
  },
  data(){
    return{
      squareWidth: 100,
      squaresOn: false,
      navigation: navigation
    }
  },
	computed:{
		routeNow(){
			return this.$route.name
		}
	},
  methods:{
   onResize(){
     const newWidth = window.innerWidth * 7/8 / 5 / Math.sqrt(2)
     this.squareWidth = newWidth > 100 ? 100 : newWidth
   }
  },
  mounted() {
    this.squaresOn = true
  }
}
</script>

<style scoped lang="scss">
.header{
  overflow: hidden;
  width: 100%;
}
.header-line{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.header-bg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.btn-main{
  color: white;
  font-size: 2rem;
  padding: 0 0.3rem ;
  transition: background-color 0.1s ease;
  border-radius: 5px;
  &:hover{
    background-color: rgba(255,255,255,.1);
  }
}
.square1{
  position: absolute;
  background-color: var(--v-primary-base);
  margin-left: -16px;
  z-index: -2;
  transform: rotate(45deg) scale(0);
  transition: transform 1s ease 1s;
  &.active{
    transform: rotate(45deg) scale(5);
  }
}
.square2{
  position: absolute;
  background-color: var(--v-secondary-darken1);
  margin-left: -16px;
  z-index: -1;
  transform: rotate(45deg) scale(0);
  transition: transform 1s ease 1.3s;
  &.active{
    transform: rotate(45deg) scale(5);
  }
}

.theme--light{
  .square2{
    background-color: #f5f5f5;
  }
  .btn-main{
    color: #000000de;
    &:hover{
      background-color: rgba(0,0,0,.1);
    }
  }
}
</style>
