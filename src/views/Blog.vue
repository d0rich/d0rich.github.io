<template>
  <div>
    <Terminal enter-word="watch blog">
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
import {Text} from "@/classes";
export default {
name: "Blog",
  components:{
    Terminal
  },
  data(){
    return {
      text: new Text('Упс, блог ещё в разработке :(',
          'Oops, it seems blog is still in development :(')
    }
  },
  async created(){
    this.turnPageLoad(false)
  }
}
</script>

<style scoped>

</style>
