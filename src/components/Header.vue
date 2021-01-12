<template>
    <v-app-bar
        app
        class="header"
        v-resize="onResize"
    >
      <div class="header-line">
        <v-btn text :to="{ name: 'About' }">
          <span>About</span>
          <span style="opacity: 0" :class="{cursor: routeNow === 'About'}">_</span>
        </v-btn>
        <v-btn text :to="{ name: 'Blog' }">
          <span>Blog</span>
          <span style="opacity: 0" :class="{cursor: routeNow === 'Blog'}">_</span>
        </v-btn>
        <router-link :to="{name: 'Home'}" class="btn-main" >
          <span>Dorich</span>
          <span style="opacity: 0" :class="{cursor: routeNow === 'Home'}">_</span>
        </router-link>
        <v-btn text :to="{ name: 'Portfolio' }">
          <span>Portfolio</span>
          <span style="opacity: 0" :class="{cursor: routeNow === 'Portfolio'}">_</span>
        </v-btn>
      </div>
      <div class="header-bg">
        <div class="square1" :class="{active: squaresOn}" :style="{width: `${squareWidth}px`, height: `${squareWidth}px`}"></div>
        <div class="square2" :class="{active: squaresOn}" :style="{width: `${squareWidth*5/6}px`, height: `${squareWidth*5/6}px`}"></div>
      </div>
    </v-app-bar>
</template>

<script>
export default {
name: "Header",
  data(){
    return{
      squareWidth: 100,
      squaresOn: false
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
@import '../styles/cursor.css';
@import '../styles/linkFormatter.css';
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
  z-index: -1;
  transform: rotate(45deg) scale(0);
  transition: transform 1s ease 1.3s;
  &.active{
    transform: rotate(45deg) scale(5);
  }
}
</style>
