<template>
  <div id="app">
    <CoverElements/>
    <div class="content">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CoverElements from './components/CoverElements.vue'
import Footer from './components/Footer.vue'

export default Vue.extend({
  name:"App",
  components:{
    CoverElements,
    Footer,
  },
  data(){
    return{
    }
  },
  
})
</script>
<style>
::-webkit-scrollbar {
    width: 8px;
    height: 16px;
}
::-webkit-scrollbar-corner {
  background:var(--color2); 
}
::-webkit-scrollbar-thumb {
    background-color: var(--color1);
    border-radius:8px;
}
::-webkit-scrollbar-thumb:hover{
  background-color: var(--color3);
}
::-webkit-scrollbar-track {
    border: 1.5px solid var(--color1);
    border-radius: 8px;
    background-color: var(--color2);
}
a{
  text-decoration: none;
  user-select: none;
}
/*----Переменные с цветами----*/
.colors{
  --color1: #b32652;
  --color2: #141940;
  --color3: #d88c68;
  --color4: #021859;
  --color5: #0B9ED9;
}

/*----Основное тело----*/
@font-face {
  font-family: 'Comfortaa';
  src: url('./assets/fonts/Comfortaa-VariableFont_wght.ttf');
}
#app{
  overflow:hidden;
}
body{
  background-color: var(--color2);
  font-family: 'Comfortaa';
  font-weight: bold;
  margin:0;
}
.content{
  max-width: 600px;
  margin-top: 55px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
}
.CoverElements{
  top:0;
  position: absolute;
}
/* Переходы */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-enter{
  transform: translateX(-100px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.1s;
}
.fade-leave-active {
  transition: all 0.1s;
}
.fade-leave-to{
  opacity: 0;
}
.fade-enter{
  opacity: 0;
}

</style>