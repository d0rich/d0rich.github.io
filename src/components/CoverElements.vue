<template>
  <div class="CoverElements">
    <header class="colors head">
      <div class="logo">
        <div id="logo">
          <img :src="ImgLink(NavPanelData.LogoD)" id="logoimg" />
          <div class="triangle" id="triangle1"></div>
          <div class="triangle" id="triangle2"></div>
          <div class="glitch" id="glitch1"></div>
          <div class="glitch" id="glitch2"></div>
          <div class="glitch" id="glitch3"></div>
          <div id="square"></div>
        </div>
        <div>
          <span>
            <font>orich</font>
            <font>prod.</font>
          </span>
        </div>
      </div>
    </header>

    <div id="NavPanel">
      <div class="Scroll">
        <ul>
          <li v-for="(i, index) in NavPanelData.Sections" v-bind:key="index">
              <router-link :to="i.link">
                <nav>{{i.name}}</nav>
              </router-link>
          </li>
        </ul>

        <div class="SocialLinks">
          <div v-for="(i, index) in NavPanelData.Social" v-bind:key="index" class="SocialLink">
            <a :href=i.link>
              <div>
                <img :src="ImgLink(i.imglink)" />
                <span>{{i.nick}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="MenuButton" @click="ShowNavPanel">
      <div class="Body"></div>
      <div class="Body"></div>
      <div class="Line"></div>
      <div class="Line"></div>
      <div class="Line"></div>
    </div>
    <div id="block"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  name:"CoverElements",
  props:['Data'],
  methods: {
    ShowNavPanel(){
      if (document.getElementById("NavPanel").classList.contains("Show"))
      {
        document.getElementById("NavPanel").classList.remove("Show");
        document.getElementById("MenuButton").classList.remove("Active");
        document.getElementById("block").classList.remove("blocked");
      }
      else{
        document.getElementById("NavPanel").classList.add("Show");
        document.getElementById("MenuButton").classList.add("Active");
        document.getElementById("block").classList.add("blocked");
      }
    },
  },
  data(){
    return{
      NavPanelData: null,
    }
  },
  beforeMount:
    function(){
      axios
        .get(this.$data.ServerLink +'/getNavPanelData?language=ru')
        .then(response => {
          this.NavPanelData = response.data;
        })
        .catch(error => {
          console.log(error);
        })
  },
  updated:
    function(){
      const triangle1: HTMLElement = document.querySelector('#triangle1');
      const triangle2: HTMLElement = document.querySelector('#triangle2');
      const glitch1: HTMLElement = document.querySelector('#glitch1');
      const glitch2: HTMLElement = document.querySelector('#glitch2');
      const glitch3: HTMLElement = document.querySelector('#glitch3');
      const square: HTMLElement = document.querySelector('#square');
      const logo: HTMLElement = document.querySelector('#logo');
      const LogoBorder = function() {
          return {
              top: logo.getBoundingClientRect().top,
              left: logo.getBoundingClientRect().left,
              right: logo.getBoundingClientRect().right,
              bottom: logo.getBoundingClientRect().bottom
          }
      }
      const Scale = function(progress) {
          square.style.transform = 'scale(' + progress + ')';
      }
      const SetTri1Size = function(size) {
          triangle1.style.transform = 'scale(' + (45.5 - size * 23) / 45.5 + ')';
          triangle1.style.top = LogoBorder().top + "px";
      }
      const SetTri2Size = function(size) {
          triangle2.style.transform = 'scale(' + (45.5 - size * 23) / 45.5 + ')';
      }
      const Translate = function(elem, dx, dy) {
          elem.style.top = LogoBorder().top + dy + "px";
          elem.style.left = LogoBorder().left + dx + "px";
      }

      const animate = function(timing, draw, duration) {

          const start = performance.now();

          requestAnimationFrame(function animate(time) {
              // timeFraction изменяется от 0 до 1
              let timeFraction = (time - start) / duration;
              if (timeFraction > 1) timeFraction = 1;

              // вычисление текущего состояния анимации
              const progress = timing(timeFraction);

              draw(progress); // отрисовать её

              if (timeFraction < 1) {
                  requestAnimationFrame(animate);
              }

          });
      }
      const glitchVis = function(glitch, chance, fun) {
          if (fun(Math.random()) > chance / 100) {
              glitch.style.backgroundColor = 'transparent';
          } else {
              glitch.style.backgroundColor = 'var(--color3)';
          }

          if (fun(Math.random()) > chance / 100) {
              glitch.style.transform = 'scale(1.5)';
          } else {
              glitch.style.transform = 'scale(1)' + ' translate(' + (Math.round(fun(Math.random()) * 10) - 5) + 'px,' + (Math.round(fun(Math.random()) * 10) - 5) + 'px)';
          }
      }
      const sqrt = function(t) { return Math.sqrt(t); }
      const t1 = function(t) { return t; }
      const t2 = function(t) { return t * t; }
      const t3 = function(t) { return t * t * t; }
      SetTri1Size(0);
      setTimeout(function(){animate(sqrt, Scale, 500);}, 1000)
      setTimeout(function() {
          triangle1.style.borderTop = '45.5px solid var(--color1)';
          triangle2.style.borderBottom = '45.5px solid var(--color1)';
          square.style.backgroundColor = 'transparent';
          document.getElementById('logoimg').style.opacity = '1';
          glitch1.style.opacity = '1';
          glitch2.style.opacity = '1';
          glitch3.style.opacity = '1';
      }, 1500)
      setTimeout(() => {
          animate(t3, SetTri1Size, 500);
          animate(t3, SetTri2Size, 500);
      }, 1500)
      setInterval(function() {
          glitchVis(glitch1, 45, t3);
          glitchVis(glitch2, 70, t2);
          glitchVis(glitch3, 80, t1);
          Translate(glitch1, 12, 15);
          Translate(glitch2, 32, 25);
          Translate(glitch3, 22, 33);
      }, 400)

  },
  

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*----Полоска с лого наверху----*/
.head {
  left:0px;
  background-color: var(--color4);
  height: 55px;
  width: 100%;
  color: var(--color1);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
}
.head div{
  display: flex;
}

.logo{
  padding:5px;
}

.head div:nth-of-type(1) img{
  width:45px;
  height: 45px;
  user-select: none;
  z-index:0;
  opacity: 0;
}
.triangle{
  position: absolute;
  z-index: 5;
}
#square{
  width: 45px;
  height: 45px;
  background-color: var(--color1);
  position: absolute;
  transform: scale(0);
  z-index: 6;
}
#triangle1{
  width: 0;
  height: 0;
  border-top: 45.5px solid transparent;
  border-left: 45.5px solid transparent;
  top:0;
  transform-origin: top right;

}
#triangle2{
  width: 0;
  height: 0;
  border-bottom: 45.5px solid transparent;
  border-right: 45.5px solid transparent;
  transform-origin: bottom left;
}
.glitch{
  z-index:3;
  opacity: 0;
  background-color: var(--color3);
  position: absolute;
}
#glitch1{
  width:5px;
  height: 5px;
}
#glitch2{
  width:10px;
  height:5px;
}
#glitch3{
  width:15px;
  height: 7px;
}
.head div:nth-of-type(2) span{
  user-select: none;
  line-height: 55px;
}
.head div:nth-of-type(2) span font:nth-of-type(1){
  font-size: 20pt;
  color: var(--color5);
}
.head div:nth-of-type(2) span font:nth-of-type(2){
  color: var(--color4);
  animation: brick-color 2s infinite;
}
@keyframes brick-color {
  0% {background-color: var(--color3);}
  65% {background-color: var(--color3);}
  66% {background-color: var(--color4);}
  99% {background-color: var(--color4);}
  100% {background-color: var(--color3);}
}

/*----Кнопка для вызова навигационной панели----*/
#MenuButton{
  position: fixed;
  right:65px;
  top:45%;
  z-index: 10;
  animation: wiggle 10s ease-in-out infinite;
}
#MenuButton:hover{
  cursor:pointer;
}
#MenuButton.Active .Body:nth-of-type(1) {
  background-color:var(--color4);
}
#MenuButton.Active .Body:nth-of-type(2) {
  background-color:var(--color5);
}

#MenuButton.Active .Line {
  background-color: var(--color5);
}
#MenuButton.Active .Line:nth-last-of-type(1) {
  top:23px;
  transform: rotate(135deg);
}
#MenuButton.Active .Line:nth-last-of-type(2) {
  top:23px;
  transform: rotate(45deg);
}
#MenuButton.Active .Line:nth-last-of-type(3) {
  top:23px;
  transform: rotate(-45deg);
}
#MenuButton div{
  user-select: none;
  position: absolute;
}
.Body:nth-of-type(1) {
  background-color:var(--color2);
  border-radius: 50%;
  border-width: 5px;
  z-index: 1;
  height: 42px;
  width: 42px;
  top:4px;
  left:4px;
  transition: ease 0.2s;
}
.Body:nth-of-type(2) {
  background-color:var(--color1);
  border-radius: 50%;
  border-width: 5px;
  z-index: 0;
  height: 50px;
  width: 50px;
  transition: ease 0.2s;
}

.Line {
  width: 26px;
  height:4px;
  border-radius: 2px;
  background-color: var(--color1);
  z-index: 2;
  left: 12px;
  transition: ease 0.2s;
}
.Line:nth-last-of-type(1){
  top:14px;
}
.Line:nth-last-of-type(2){
  top:23px;
}
.Line:nth-last-of-type(3){
  top: 32px;
}

@keyframes wiggle{
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(10px, 5px);
  }
  50% {
    transform: translate(0px, -8px);
  }
  75% {
    transform: translate(-5px, -4px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

/*----Конец кнопки для вызова навигационной панели----*/


/*----Навигационная панель----*/
#NavPanel{
  background-color: var(--color4);
  width: 50%;
  max-width:300px;
  height: 100%;
  position: fixed;
  right: -50%;
  z-index: 9;
  overflow-x: hidden;
  transition: right ease-in 0.2s;
}

.Scroll{
    height:90%;
    min-height: 550px;
    position: relative;
}
#NavPanel.Show{
  right: 0;
}
#NavPanel ul li nav{
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width:medium;
  border-color: var(--color5);
  background-color: var(--color1);
  color: var(--color5);
  user-select: none;
}
#NavPanel ul{
  list-style-type: none;
  padding: 0 10px 0 10px;
}
#NavPanel ul li nav:hover{
  border-color: var(--color1);
  background-color: var(--color5);
  color: var(--color1);
  cursor: pointer;
  user-select: none;
}

#NavPanel ul li:nth-of-type(1){
  margin-top:60px;
}
#NavPanel .SocialLinks{
  margin-left: 5px;
  bottom: 15px;
  position: absolute;
  display: flex;
  flex-direction: column;
}
#NavPanel div div div{
  display: flex;
  flex-direction: row;
  position: relative;
}
#NavPanel div div div img{
  height: 30px;
  width:30px;
  margin: 5px;
}
#NavPanel div div div span{
  margin:auto 0 auto 0;
  color: var(--color5);
}
/*----Конец Навигационной панели----*/
#block{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  right:-100%;
  top:0;
  z-index: 8;
  transition: ease-in 0.4s;
}
#block.blocked{
  right:0px;
}
</style>