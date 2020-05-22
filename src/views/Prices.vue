<template>
  <div>
    <transition :duration=200 name="fade" mode="out-in">
    <Loader v-if="OnLoad" />
    <div v-if="!OnLoad">
      <div id="IntroInf">
        <div class="Parallax">
          <div class="ParallaxGroup">
            <img :src="ImgLink(PricesPageData.Img1.Layer1)" />
            <img :src="ImgLink(PricesPageData.Img1.Layer2)" />
            <img :src="ImgLink(PricesPageData.Img1.Layer3)" />
            <img :src="ImgLink(PricesPageData.Img1.Layer4)" />
          </div>
        </div>
        <div>
          <span>{{PricesPageData.Header1}}</span>
          <p>{{PricesPageData.Text1}}</p>
        </div>
      </div>
      <div id="TextDiv">
        <p>{{PricesPageData.Text2}}</p>
      </div>
      <div id="prices">
        <div class="priceCards">
          <div class="PriceCard nonActive" v-for="PriceCard in PricesPageData.PriceCards" :key="PriceCard.id">
            <img :src="ImgLink(PriceCard.Img)" @click="ShowCard" />
            <span>{{PriceCard.name}}</span>
            <p>{{PriceCard.description}}</p>
            <span>Цена: {{PriceCard.price}}</span>
            <div class="button">Подать заявку.</div>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Loader from '@/components/Loader.vue'
export default Vue.extend({
    name:'Prices',
    components:{
      Loader
    },
    data(){
      return{
        OnLoad:true,
        PricesPageData: {
              language:'',
              Img1:{
                Layer1:'',
                Layer2:'',
                Layer3:'',
                Layer4:'',
              },
              Header1:'',
              Text1:'',
              Text2:'',
              PriceCards:[
                {
                  id:'',
                  name:'',
                  Img:'',
                  price:'',
                  description:''
                }
              ]
            }
      }
    },
    methods:{
      ShowCard(event){
          if (event.target.parentElement.classList.contains('Active') )
            event.target.parentElement.classList.remove('Active');
           else {
             event.target.parentElement.classList.add('Active');
             event.target.parentElement.classList.remove('nonActive');
           }
        event.target.parentElement.classList.add('activate');
        setTimeout(function(){event.target.parentElement.classList.remove('activate')}, 300);
      }
    },
    mounted:
    function(){
      axios
        .get(this.$data.ServerLink +'/getPricesPageData?language=ru')
        .then(response => {
          if (response.data.status=="error")
          console.log(response.data.message);
          else
          this.PricesPageData = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(()=>{this.OnLoad=false;})
  },

})
</script>

<style scoped>
#IntroInf{
  display: flex;
}
.Parallax{
  width:40%;
  perspective: 1px;
  z-index: -1;
}
.ParallaxGroup{
  width:100%;
  position: relative;
  max-width: 175px;
}
.ParallaxGroup img{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.ParallaxGroup img:nth-of-type(2){
  width: 40%;
  animation: wiggle1 30s ease-in-out infinite;
}
.ParallaxGroup img:nth-of-type(3){
  animation: wiggle2 40s ease-in-out infinite;
}
.ParallaxGroup img:nth-of-type(4){
  animation: wiggle3 50s ease-in-out infinite;
}

#IntroInf div:nth-of-type(2){
  margin-left: -7%;
  width:65%;
  padding: 10px;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color1);
  background-color: var(--color4);
}
@keyframes wiggle1{
  0% {transform: translate(0px, 0px);}
  25% {transform: translate(-10px, -5px);}
  50% {transform: translate(0px, 8px);}
  75% {transform: translate(5px, 4px);}
  100% {transform: translate(0px, 0px);}
}
@keyframes wiggle2{
  0% {transform: translate(0px, 0px);}
  25% {transform: translate(20px, -8px);}
  50% {transform: translate(5px, -13px);}
  75% {transform: translate(7px, -5px);}
  100% {transform: translate(0px, 0px);}
}
@keyframes wiggle3{
  0% {transform: translate(0px, 0px);}
  25% {transform: translate(25px, -13px);}
  50% {transform: translate(14px, 16px);}
  75% {transform: translate(8px, 12px);}
  100% {transform: translate(0px, 0px);}
}

#IntroInf div:nth-of-type(2) span{
  color: var(--color1);
  font-size: 15pt;
}
#IntroInf div:nth-of-type(2) p{
  color: var(--color3);
}
#TextDiv{
  width:80%;
  margin: 30px auto 0 auto;
  padding: 10px;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color3);
  background-color: var(--color4);
  color: var(--color3);
}
#prices{
  overflow-x: scroll;
  overflow-y: visible;
  display:-webkit-inline-box;
  margin-top: 30px;
  margin-left: 20px;
  width: 90%;
  border-radius: 20px 20px 12px 12px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color3);
  transform-origin: center;
  transform:scale(1, -1);
}

#prices .priceCards{
  display:-webkit-inline-box;
  transform-origin: center;
  transform:scale(1, -1);
}
.PriceCard{
  overflow: hidden;
  width:220px;
  height: 197px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--color1);
  margin: 10px;
  transition: ease 0.7s;
}
.PriceCard.Active{
  height: 500px;
}
.PriceCard img{
  border-radius: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color5);
  background-color: var(--color4);
  height:max-content;
}
.PriceCard img:hover{
  cursor:pointer;
}
.PriceCard.nonActive img{
  animation: scaling 2s ease-in-out infinite;
}
@keyframes scaling{
  0%{transform: scale(1);}
  50%{transform: scale(1.03);}
  100%{transform: scale(1);}
}
.PriceCard.activate img{
  animation: unscaling 0.3s ease-in-out;
}
@keyframes unscaling{
  0%{transform: scale(1);}
  50%{transform: scale(0.9);}
  100%{transform: scale(1);}
}
.PriceCard span{
  padding:5px;
  margin-top:10px;
  font-size: 15pt;
  color: var(--color5);
  border-radius: 5px;
  background-color: var(--color4);
}
.PriceCard p{
  padding:5px;
  margin-top:10px;
  color: var(--color5);
  border-radius: 5px;
  background-color: var(--color4);
  transition: ease 0.2s;
}
.PriceCard .button{
  font-weight: bold;
  text-align: center;
  padding:5px;
  margin-top:10px;
  color: var(--color4);
  border-style: solid;
  border-color: var(--color4);
  border-radius: 5px;
  background-color: var(--color3);
  user-select: none;
  transition: ease 0.1s;
}
.PriceCard .button:hover{
  cursor: pointer;
  color: var(--color5);
  border-color: var(--color5);
  border-width: 4px;
  background-color: var(--color2);
  transform:scale(1.05);
}
.PriceCard .button:click{
  transform:scale(0.95);
}
</style>