<template>
  <div>
    <Terminal enter-word="watch portfolio">
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
    <EditProjectModal>Создать проект</EditProjectModal>
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
      text: new Text('Упс, портфолио ещё в разработке :(',
                     'Oops, it seems portfolio is still in development :(')
    }
  }
}
</script>

<style scoped>

</style>
