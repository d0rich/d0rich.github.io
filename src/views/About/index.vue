<template>
  <div class="about">
    <div class="btns">
      <v-btn class="mx-3" exact text :to="{name: routesNames.ABOUT_MAIN_PAGE}" >
        {{text.main.text}}
      </v-btn>
      <v-btn class="mx-3" text :to="{name: routesNames.RESUME_CONTROLLER}" >
        {{text.resume.text}}
      </v-btn>
    </div>

    <transition name="glitch-transition" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>
<script>
import {Text} from "@/classes";
import {routesNames} from "@/data/constants";

export default {
  name: "About",
  components:{
  },
  data(){
    return {
      routesNames,
      text: {
        main: new Text('Основное', 'Overall'),
        resume: new Text('Резюме', 'Resume')
      }
    }
  }
}
</script>

<style scoped>
.btns{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
