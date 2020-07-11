<template>
  <div id="app">
    <CoverElements 
    :ThemeIndex="sendedThemeIndex" :lan="lan" :prof="prof" 
    v-on:theme-toggle="ChangeTheme()" v-on:lan-toggle="ChangeLan()" v-on:prof-toggle="ChangeProf()" />
    <div class="content">
      <transition name="slide-fade" mode="out-in">
        <router-view 
          :ThemeIndex="sendedThemeIndex" :lan="lan" :prof="prof" 
          v-on:theme-toggle="ChangeTheme()" v-on:lan-toggle="ChangeLan()" v-on:prof-toggle="ChangeProf()" />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
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
      sendedThemeIndex: null,
      lan: null,
      prof: null
    }
  },
  watch:{
    $route(){
      if(this.$route.params.lan)
        {
          this.lan = this.$route.params.lan;
          localStorage.lan = this.lan
        }

      if(this.$route.params.prof)
        {
          this.prof = this.$route.params.prof;
          localStorage.prof = this.$route.params.prof;
        }
      //axios
      //  .get('https://api.2ip.ua/geo.json?ip=')
      //  .then(response => console.log(response))
    },

  },
  methods:{
    ChangeTheme(){
      if(this.ThemeIndex() == 0)
      {localStorage.ThemeIndex = 1;}
      else 
      {localStorage.ThemeIndex = 0;}
      this.SetTheme();
    },
    ChangeLan(){
      if(this.$route.params.lan == 'ru')
      {
        localStorage.lan = 'en';
      }
      else
      {
        localStorage.lan = 'ru';
      }
      this.$route.params.lan = localStorage.lan;
      this.lan = this.$route.params.lan;
      this.$router.push(this.$route);
    },
    ChangeProf(){
      if(this.$route.params.prof == 'programmer')
      {
        localStorage.prof = 'videomaker';
      }
      else
      {
        localStorage.prof = 'programmer';
      }
      this.$route.params.prof = localStorage.prof;
      this.prof = this.$route.params.prof;
      this.$router.push(this.$route);
    },
    SetTheme(){
      const body: HTMLElement = document.body;
      const themes: string[] = ["commonTheme", "darkTheme"];
      themes.forEach(element => {
        body.classList.remove(element);
      });
      if (this.ThemeIndex() == 0)
      {
        body.classList.add(themes[0]);
      }
      else
      {
        body.classList.add(themes[1]);
      }
      this.sendedThemeIndex = this.ThemeIndex();
    },
    ThemeIndex(){
      if (localStorage.ThemeIndex == null)
        {localStorage.ThemeIndex = 0;}
      return localStorage.ThemeIndex;
    }
  },
  created(){
      this.SetTheme();
      this.lan = this.$route.params.lan;
      this.prof = this.$route.params.prof;
  }
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
.commonTheme{
  --color1: #b32652;
  --color2: #141940;
  --color3: #d88c68;
  --color4: #021859;
  --color5: #0B9ED9;
  transition: ease 0.3s;
}
.darkTheme{
  --color1: #0B9ED9;
  --color2: #212121;
  --color3: #0B9ED9;
  --color4: #2e2e2e;
  --color5: #0B9ED9;
  transition: ease 0.3s;
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
  margin:auto;
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
</style>
<!-- Переходы -->
<style>
.long-fade-enter-active {
  transition: all 0.5s;
}
.long-fade-leave-active {
  transition: all 0.5s;
}
.long-fade-leave-to{
  opacity: 0;
}
.long-fade-enter{
  opacity: 0;
}

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