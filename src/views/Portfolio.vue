<template>
  <div>
    <Terminal v-if="inDev" enter-word="watch portfolio">
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
    <EditProjectModal class="align-self-start">Создать проект</EditProjectModal>
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
import EditProjectModal from "@/components/projects/EditProjectModal";
import {Text} from "@/classes";
export default {
name: "Portfolio",
  components:{
    Terminal, EditProjectModal
  },
  data(){
    return {
      inDev: false,
      text: new Text('Упс, портфолио ещё в разработке :(',
                     'Oops, it seems portfolio is still in development :('),
      projects: []
    }
  },
  created() {
    this.projects
  }
}
</script>

<style scoped>

</style>
