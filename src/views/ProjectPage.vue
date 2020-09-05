<template>
  <div>
    <transition :duration=200 name="fade" mode="out-in">
    <Loader v-if="OnLoad" />
    <div v-if="!OnLoad">
      <div class="ProTitle">
          <router-link :to="{name:'Projects' , params:{ lan: $route.params.lan, prof: ProjectData.prof}}">
            <span id="Heading" class="ActiveShow" @click="ScrollToTop()">{{PageData.Header}}</span>
          </router-link>
          <span> -> </span>
          <span>{{ProjectData.name}}</span>
        </div>
      <SmallProjectPattern v-if="!ProjectData.Big" :ProjectData=ProjectData />
      <BigProjectPattern v-if="ProjectData.Big" :ProjectData=ProjectData />

      <div class="collaborators" v-if="ProjectData.Collaborators">
        <p>{{PageData.Collaborators}}</p>
        <ul>
          <li v-for="person in ProjectData.Collaborators" :key="person.link">
            <a :href="person.link">
              <div class="personRow">
                <img :src="ImgLink(person.img)" />
                <span>{{`${person.role} - ${person.name}`}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="back">
        <router-link :to="{name:'Projects' , params:{ lan: $route.params.lan, prof: ProjectData.prof}}">
          <span class="ActiveShow" @click="ScrollToTop()">{{PageData.Back}}</span>
        </router-link>
      </div>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import SmallProjectPattern from '@/components/SmallProjectPattern.vue'
import BigProjectPattern from '@/components/BigProjectPattern.vue'
import Loader from '@/components/Loader.vue'


export default Vue.extend({
    name:"VideoProject",
    components:{
        SmallProjectPattern,
        BigProjectPattern,
        Loader
    },
    data: function(){
        return{
          OnLoad: true,
          ProjectData: null,
          lan: null
        }
    },
    computed:{
      PageData(){
        if(this.lan == 'ru'){
          return {
            Header: 'Мои проекты',
            Collaborators: 'Также участвовали в проекте:',
            Back: 'Назад к проектам...'
          }
        }
        else{
          return {
            Header: 'My projects',
            Collaborators: 'Collaborators:',
            Back: 'Back to projects...'
          }
        }
      }
    },
    methods:{
      FetchData(){
        this.OnLoad=true;
        axios
        .get(this.$data.ServerLink +'/get-project?language=' + this.$route.params.lan + '&projectID='+this.$route.params.id)
        .then(response => {
          if (response.data.status=="error")
          console.log(response.data.message);
          else{
            if(response.data.status=="not found")
              this.$router.push({name:'Error404', params:{ lan:this.$route.params.lan }});
            else
              this.ProjectData = response.data;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(()=>{this.OnLoad=false;})
        this.lan = this.$route.params.lan;
      }
    },
    watch:{
      $route() {this.FetchData();}
    },
    created(){
      this.FetchData();
    }
    
})
</script>

<style>
.ProTitle{
  user-select: none;
  margin-left: 30px;
  font-size: 20pt;
  text-align: left;
}
#Heading{
  border-radius: 10px;
  padding: 5px;
  color:var(--color1);
  transition: 0.2s;
  line-height: 40pt;
}
#Heading:hover, .back span:hover {
  cursor: pointer;
  background-color: var(--color3);
  color: var(--color2);
}
.ProTitle span:nth-of-type(1){
  color: var(--color1);
}
.ProTitle span:nth-of-type(2){
  color: var(--color3);
}
.back{
  user-select: none;
  margin-right: 5%;
  font-size: 17pt;
  text-align: right;
}
.back span {
  border-radius: 10px;
  padding: 5px;
  color:var(--color3);
  transition: 0.2s;
  line-height: 40pt;
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

.collaborators{
  color: var(--color3);
  margin-left: 5px;
}
.collaborators ul{
  list-style-type: none;
}
.collaborators .personRow{
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 10px;
}
.collaborators img{
  width: 30px;
  margin-right: 15px;
}
.collaborators a{
  margin: auto 0;
  text-decoration: underline;
  color: var(--color5)
}
</style>
