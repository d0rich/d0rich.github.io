<template>
    <div>
        <div class="ErrorMessage">
            <span>{{ErrorText}}</span>
        </div>
        <div class="ErrorIMG">
            <img :src="require('@/assets/img/error404.svg')" />
        </div>
        <div class="backToHome">
            <router-link :to="{name:'Home' , params:{ lan: lan, prof: prof}}">
                <span @click="ScrollToTop()">{{BackText}}</span>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Error404",
    props: ['lan', 'prof'],
    computed:{
        BackText(){
            if (this.lan == 'ru')
                return 'Вернуться на главную страницу...'
            else
                return 'Back to home page...'
        },
        ErrorText(){
            if (this.lan == 'ru')
                return 'Ошибка404 - страница не найдена'
            else
                return 'Error404 - page not found'
        }
    }
    
})
</script>
<style scoped>
.ErrorMessage{
    padding:15px;
    font-size: xx-large;
    color: var(--color1);
}
.ErrorIMG{
    width:100%;
}
.ErrorIMG img{
    width:100%;
}
.backToHome{
  user-select: none;
  margin-right: 5%;
  font-size: 17pt;
  text-align: right;
}
.backToHome span {
  border-radius: 10px;
  padding: 5px;
  color:var(--color3);
  transition: 0.2s;
  line-height: 40pt;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color1);
}
.backToHome span:hover {
    color: var(--color4);
    background-color: var(--color3);
}
</style>