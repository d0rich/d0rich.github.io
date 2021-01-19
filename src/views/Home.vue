<template>
  <div>
    <Terminal reveal enter-word="hello world">
      <h1 class="align-self-start cursor-on-hover">{{data.h1.text}}<span class="cursor">_</span></h1>
      <p class="align-self-start cursor-on-hover">
        {{data.p1.text}}<span class="cursor">_</span>
      </p>
      <p class="align-self-start cursor-on-hover">
        {{data.p2.t1.text}}
        <router-link class="link" :to="{name: 'Portfolio'}">{{data.p2.t2.text}}</router-link>{{data.p2.t3.text}}
        <router-link class="link" :to="{name: 'About'}">{{data.p2.t4.text}}</router-link>{{data.p2.t5.text}}
        <router-link class="link" :to="{name: 'Blog'}">{{data.p2.t6.text}}</router-link>{{data.p2.t7.text}}<span class="cursor">_</span>
      </p>
    </Terminal>

    <div style="width: 100%; height: 300vh"></div>
  </div>
</template>

<script>
import homepage from '@/data/home'
import Terminal from "@/components/Terminal";

export default {
  name: 'Home',
  components: {
    Terminal
  },
  data(){
    return{
      data: homepage
    }
  },
  metaInfo: {
    title: 'Dorich',
    titleTemplate: null
  }
}
</script>
<style scoped lang="scss">
@import "../styles/font.css";
</style>
