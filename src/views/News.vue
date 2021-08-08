<template>
  <div>
    <Terminal enter-word="watch blog">
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
    <news-editor>
      Создать новость
    </news-editor>
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
import {Text} from "@/classes";
import NewsEditor from "@/components/news/NewsEditor";
export default {
name: "News",
  components:{
    Terminal, NewsEditor
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
