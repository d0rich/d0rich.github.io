<template>
  <div class="about">
    <Terminal enter-word="watch blog" >
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
  name: "About",
  components:{
    Terminal
  },
  data(){
    return {
      text: new Text('Упс, страница обо мне ещё в разработке :(',
          'Oops, it seems about me is still in development :(')
    }
  }
}
</script>

<style scoped>

</style>
