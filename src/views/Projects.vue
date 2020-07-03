<template>
    <!-- Начало заголовка -->
  <div>
    <transition :duration=200 name="fade" mode="out-in">
    <Loader v-if="OnLoad" />
    <div v-if="!OnLoad">
      <div>
        <div class="ProTitle">
          <span id="Heading">Мои проекты</span>
        </div>
      </div>
      <!-- Конец заголовка -->
      <!-- Начало списка проектов -->
        <div>
          <div v-for="(i, index) in ProjectsData" :key="index" class="prevue">
            <div class="main">
              <img class="MainImg" :src=ImgLink(i.MainImg) />
              <span class="hashtags">{{i.HashTags}}</span>
              <span class="ProjectName">{{i.name}}</span>
              <router-link :to="{name: 'ProjectPage' , params:{id:i.id , lan: i.language }}">
                <nav class="ProLink" @click="ScrollToTop()" :id=i.id>Подробнее...</nav>
              </router-link>
            </div>
            <div class="screens">
              <img v-for="(img, index) in i.mainscreens" :key="index" :src=ImgLink(img) />
            </div>
          </div>
        </div>
    <!-- Конец списка проектов -->
      </div>
      </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Loader from '@/components/Loader.vue'

export default Vue.extend({
    name: "Projects",
    components: {
      Loader
    },
    data: function(){
        return{        
          OnLoad:true,
            ProjectsData: null
        }

    },
    watch:{
      $route() {this.FetchData();}
    },
    mounted(){
      this.FetchData();
    },
    methods:{
      FetchData(){
        this.OnLoad=true;
        axios
        .get(this.$data.ServerLink +'/getProjects?language='+this.$route.params.lan)
        .then(response => {
          if (response.data.status=="error")
          console.log(response.data.message);
          else
          this.ProjectsData = response.data;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(()=>{this.OnLoad=false;})
      }
  } 
})
</script>

<style scoped>
.ProTitle{
  user-select: none;
  margin-left: 30px;
  font-size: 20pt;
  text-align: left;
}
.ProTitle span:nth-of-type(1){
  border-radius: 10px;
  padding: 5px;
  color:var(--color1);
  transition: 0.2s;
  line-height: 40pt;
}
.ProTitle span:nth-of-type(1):hover{
  cursor: pointer;
  background-color: var(--color3);
}
.ProTitle span:nth-of-type(2){
  color: var(--color1);
}
.ProTitle span:nth-of-type(3){
  color: var(--color3);
}

.ActiveShow{
  border-width: 3px;
  border-style: solid;
  border-color: var(--color1);
}
@keyframes hColor{
  0% {background-color: transparent;}
  20% {background-color: var(--color3);}
  40% {background-color: transparent;}
}
/* Начало описания превью окон */
.prevue{
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  border-radius: 20px;
  border-style: none;
  border-width: 5px;
  background-color: var(--color4);
}
.prevue:nth-of-type(2n+1){
  flex-direction: row;
  border-color: var(--color1);
}
.prevue:nth-of-type(2n){
  flex-direction: row-reverse;
  border-color: var(--color3);
}
.main{
  display: flex;
  flex-direction: column;
  padding:5px;
  width:60%;
  margin: 5px;
}
.MainImg{
  width:100%;
  height:auto;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color1);
  background-color: var(--color1);
}
.hashtags{
  margin-top: 10px;
  color:var(--color3);
  font-size: 10pt;
}
.ProjectName{
  color: var(--color1);
  border-radius: 10px;
  font-size: 15pt;
  background-color: var(--color4);
  padding: 5px;
}
.ProLink{
  text-align: center;
  margin: 10px 0 10px 0;
  padding: 5px;
  border-radius: 10px;
  border-style: solid;
  border-width:medium;
  border-color: var(--color5);
  color: var(--color5);
}
.ProLink:hover{
  user-select: none;
  border-color: var(--color1);
  color: var(--color1);
  cursor: pointer;
}
.screens{
  display: flex;
  flex-direction: column;
  max-width:35%;
  margin:10px;
}
.screens img{
  margin:5px;
  max-width:100%;
  height:auto;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color3);
  background-color: var(--color3);
}

</style>