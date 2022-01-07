<template>
  <layout>
    <h1 class="mt-7">My Resume</h1>
    <div class="hr"></div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>
    <nav class="resume-container">
      <resume-card v-for="resume in $page.allResume.edges" :key="resume.node.id"
                   :resume="resume.node"/>
    </nav>
  </layout>
</template>

<page-query>
query ResumeInfo{
  allResume: allResume (sortBy: "title", order: ASC){
    edges{
      node{
        id
        path
        title
        image
      }
    }
  }
}
</page-query>

<script>
import ResumeCard from "../components/ResumeCard";
import {Router} from "../router";
export default {
  name: "Resume",
  components: { ResumeCard },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'resume', href: Router.allResume(), disabled: true},
      ]
    }
  },
  metaInfo() {
    return {
      title: 'Resume'
    }
  },
}
</script>

<style scoped>
.resume-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 80vw;
  align-items: start;
  justify-items: center;
}
@media screen and (max-width: 1080px) {
  .resume-container{
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 640px) {
  .resume-container{
    grid-template-columns: 1fr;
  }
}
</style>