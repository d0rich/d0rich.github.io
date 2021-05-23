<template>
  <div>
    <EnterBlock2 class="text-center">
      <span style="font-size: 1.7rem;" class="mx-3">{{data.block1.p1.t1.text}}</span>
      <span style="font-size: 1.7rem;" class="ma-3">{{data.block1.p1.t2.text}}
        <span style="font-size: 2.3rem; font-weight: bold">{{data.block1.p1.t3.text}}<span class="cursor--active">_</span></span>
      </span>
      <span style="font-size: 1.7rem;" class="mx-3">{{data.block1.p1.t4.text}}</span>
    </EnterBlock2>
    <section class="block2 mt-16">
      <v-lazy :options="{threshold: 0.7}" min-width="300" min-height="200px" transition="glitch-transition">
        <Terminal reveal enter-word="hello world" @revealed="show.block2info = true">
          <h1 class="align-self-start cursor-on-hover">{{data.block2.terminal.h1.text}}<span class="cursor">_</span></h1>
          <p class="align-self-start cursor-on-hover">
            {{data.block2.terminal.t1.text}}
            <router-link class="link" :to="{name: 'PortfolioIndex'}">{{data.block2.terminal.t2.text}}</router-link>{{data.block2.terminal.t3.text}}
            <router-link class="link" :to="{name: 'AboutIndex'}">{{data.block2.terminal.t4.text}}</router-link>{{data.block2.terminal.t5.text}}
            <router-link class="link" :to="{name: 'Blog'}">{{data.block2.terminal.t6.text}}</router-link>{{data.block2.terminal.t7.text}}<span class="cursor">_</span>
          </p>
        </Terminal>
      </v-lazy>

      <v-lazy v-model="show.block2info" min-width="300" min-height="500px" :options="{threshold: 1}" transition="glitch-transition">
        <div class="block2__info">
          <div class="info-row">
            <img :src="data.block2.my_photo" alt="d0rich" class="border-light--accent my-photo" />
            <div class="block2__info__text">
              <h1>{{data.block2.h1.text}}</h1>
              <p v-for="(text, index) in data.block2.p1.text.split('\n')" :key="index" >{{text}}</p>
              <v-btn :to="{name: 'About'}" color="primary">{{btns.myInfo.text}}</v-btn>
            </div>
          </div>

          <div class="js-objects">
            <JSObjectWindow class="mb-3 mx-3"
                            v-for="(object, index) in data.block2.objects"
                            :key="index"
                            :object="object" />
          </div>
        </div>
      </v-lazy>

    </section>


  </div>
</template>

<script>
import homepage from '@/data/home'
import Terminal from "@/components/Terminal"
import JSObjectWindow from "@/components/JSObjectWindow";
import EnterBlock2 from "@/components/home/EnterBlock2";
import {Text} from "@/classes";

export default {
  name: 'Home',
  components: {
    Terminal, EnterBlock2, JSObjectWindow
  },
  data(){
    return{
      data: homepage,
      btns: {
        myInfo: new Text('Узнать больше', 'More info')
      },
      show: {
        block2info: false
      }
    }
  },
  metaInfo() {
    return {
      title: new Text('Главная', 'Home').text
    }
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
  margin: 2rem 0;
  transition: opacity .5s ease;
  .info-row{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 2rem;
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
    flex-wrap: wrap;
    justify-content: center;
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
