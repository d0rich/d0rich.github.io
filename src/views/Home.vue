<template>
  <div>
    <EnterBlock2 class="text-center">
      <span style="font-size: 1.7rem;" class="mx-3">{{data.p1.t1.text}}</span>
      <span style="font-size: 1.7rem;" class="ma-3">{{data.p1.t2.text}}
        <span style="font-size: 2.3rem; font-weight: bold">{{data.p1.t3.text}}<span class="cursor">_</span></span>
      </span>
      <span style="font-size: 1.7rem;" class="mx-3">{{data.p1.t4.text}}</span>
    </EnterBlock2>
    <v-lazy :options="{threshold: .7}">
      <div class="block2 mt-16">
        <v-lazy :options="{threshold: .7}">
          <Terminal reveal enter-word="hello world">
            <h1 class="align-self-start cursor-on-hover">{{data.h1.text}}<span class="cursor">_</span></h1>
            <p class="align-self-start cursor-on-hover">
              {{data.p2.t1.text}}
              <router-link class="link" :to="{name: 'Portfolio'}">{{data.p2.t2.text}}</router-link>{{data.p2.t3.text}}
              <router-link class="link" :to="{name: 'About'}">{{data.p2.t4.text}}</router-link>{{data.p2.t5.text}}
              <router-link class="link" :to="{name: 'Blog'}">{{data.p2.t6.text}}</router-link>{{data.p2.t7.text}}<span class="cursor">_</span>
            </p>
          </Terminal>
        </v-lazy>

        <div class="block2__info">
          <div class="info-row">
            <img :src="data.my_photo" alt="d0rich" class="border-light--accent my-photo" />
            <div class="block2__info__text">
              <h1>Заголовок</h1>
              <p>С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>
            </div>
          </div>

          <div class="js-objects">
            <JSObjectWindow class="mb-3 mx-3" :object="data.obj1" />
            <JSObjectWindow class="mb-3 mx-3" :object="data.obj2" />
            <JSObjectWindow class="mb-3 mx-3" :object="data.obj1" />
          </div>
        </div>
      </div>


    </v-lazy>

  </div>
</template>

<script>
import homepage from '@/data/home'
import Terminal from "@/components/Terminal"
import JSObjectWindow from "@/components/JSObjectWindow";
import EnterBlock2 from "@/components/home/EnterBlock2";

export default {
  name: 'Home',
  components: {
    Terminal, EnterBlock2, JSObjectWindow
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
.block2{
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block2__info{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem 0;

  .info-row{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 700px;
  }

  .my-photo{
    width: 15rem;
    margin: 0 10px 10px 0;
  }
  .block2__info__text{
    margin: 0 1rem;
  }
  .js-objects{
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 1100px){
  .block2__info{
    .js-objects{
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 700px;
    }
  }
}
@media screen and (max-width: 550px){
  .block2__info{

    .info-row{
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
