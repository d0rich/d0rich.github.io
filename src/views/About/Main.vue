<template>
  <div>
    <Terminal enter-word="watch about" >
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
    <!-- <page-block :block="data.overall"></page-block> -->
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
//import PageBlock from '@/components/PageBlock'
import {AboutMe, Text} from "@/classes";
import pageData from '@/data/about/aboutMe'

export default {
name: "AboutMain",
  components:{
    Terminal, //PageBlock
  },
  data(){
    return {
      text: new Text('Упс, страница обо мне ещё в разработке :(',
          'Oops, it seems about me is still in development :('),
      data: new AboutMe(pageData)
    }
  },
  async created(){
    this.turnPageLoad(false)
  },
  metaInfo() {
    return {
      title: new Text('Обо мне', 'About me').text
    }
  }
}
</script>

<style scoped>

</style>
