<template>
  <div id="loader">
      <div id="visual">
          <img :src="IMG" id="loaderImage">
          <div id="animation">
              <div id="row1">
                  <div id="figure1"><div></div></div>
                  <div id="figure2"><div></div></div>
                  <div id="figure3"><div></div></div>
              </div>
              <div id="row2">
                  <div id="row2-column1">
                      <div id="figure4"><div></div></div>
                      <div id="figure7"><div></div></div>
                  </div>
                  <div id="row2-column2">
                      <div id="figure5"><div></div></div>
                      <div id="row2-column2-row2">
                          <div id="row2-column2-row2-column1">
                              <div id="figure6"><div></div></div>
                              <div id="row2-column2-row2-column1-row2">
                                  <div id="figure8"><div></div></div>
                                  <div id="figure9"><div></div></div>
                              </div>
                          </div>
                          <div id="figure10"><div></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="loader-text">
          <span>
              {{Text}}
              <font>.</font>
              <font>.</font>
              <font>.</font>
          </span>

      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            Text: null,
            IMG: null,
            Texts:[
                "Вычисляем вас по IP",
                'Оптимизируем ваш бизнес',
                'Настраиваем рекламу',
                'Проверяем историю браузера',
                'Бежим на сервер за информацией'
            ],
            IMGs:[
                require('@/assets/img/LoaderMan1.svg'),
                require('@/assets/img/LoaderMan2.svg'),
                require('@/assets/img/LoaderMan3.svg')
            ]
        }
    },
    created(){
        function arrayRandElement(arr) {
            const rand = Math.floor(Math.random() * arr.length);
            return arr[rand];
        }
        this.Text = arrayRandElement(this.Texts);
        this.IMG = arrayRandElement(this.IMGs);
    }

})
</script>

<style scoped>
#loader{
    width:100%;
    height:700px;
    overflow: hidden;
    position: relative;
    
}
#loaderImage{
    position:relative;
    height: 700px;
    margin-left: -30%;
    margin-top: -30%;
    z-index: 2;
}
#visual{
    height: 300px;
    width: 300px;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
}
#animation{
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 225px;
    width: 225px;
    margin-top: 75px;
    margin-left: 75px;
    z-index: 3;
}
#loader-text{
    position: relative;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    font-size: 20pt;
    color: var(--color3);
    z-index: 3;
    border-radius: 20px;
    padding: 5px;
    background-color: var(--color4);
}
#loader-text font:nth-of-type(1){
    animation: dot1 1s infinite;
}
#loader-text font:nth-of-type(2){
    animation: dot2 1s infinite;
}
#loader-text font:nth-of-type(3){
    animation: dot3 1s infinite;
}
@keyframes dot1{
    0%{opacity: 0}
    66%{opacity: 0}
    67%{opacity: 1}
    100%{opacity: 1}
}
@keyframes dot2{
    0%{opacity: 1}
    33%{opacity: 1}
    34%{opacity: 0}
    99%{opacity: 0}
    100%{opacity: 1}
}
@keyframes dot3{
    0%{opacity: 0}
    33%{opacity: 0}
    34%{opacity: 1}
    66%{opacity: 1}
    67%{opacity: 0}
    100%{opacity: 0}
}
#figure1 div,#figure2 div,#figure3 div,#figure4 div,#figure5 div,#figure6 div,#figure7 div,#figure8 div,#figure9 div,#figure10 div{
    border: 8px solid var(--color1);
    border-radius: 10px;
    width:calc(100% - 20px);
    height:calc(100% - 20px);
}
@keyframes f1{
    0%{
        transform: translateX(-300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
    30%{
        transform: translateX(-300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    40%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    60%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    70%{
        transform: translateX(-300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f2{
    0%{
        transform: translateY(-300px);
        opacity: 0;
        animation-timing-function: linear;
    }
    25%{
        transform: translateY(-300px);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    35%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    90%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    100%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    
}
@keyframes f3{
    0%{
        transform: translateX(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
    45%{
        transform: translateX(300px);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    55%{
        transform: translateX(0px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    80%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    90%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f4{
    0%{
        transform: translateY(300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
    30%{
        transform: translateY(300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    40%{
        transform: translateY(0px) scaleY(1);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    85%{
        transform: translateY(0px) scaleY(1);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    95%{
        transform: translateY(-300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateY(-300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f5{
    0%{
        transform: translateX(300px) scaleX(0.33);
        opacity: 0;
        animation-timing-function: linear;
    }
    25%{
        transform: translateX(300px) scaleX(0.33);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    35%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    55%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    65%{
        transform: translateX(300px) scaleX(0.33);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateX(300px) scaleX(0.33);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f6{
    0%{
        transform: translateX(-300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
    10%{
        transform: translateX(-300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    20%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    85%{
        transform: translateX(0px) scaleX(1);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    95%{
        transform: translateX(300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateX(300px) scaleX(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f7{
    0%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: linear;
    }
    40%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    50%{
        transform: translateX(0px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    70%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    80%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f8{
    0%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: linear;
    }
    20%{
        transform: translateX(-300px);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    30%{
        transform: translateX(0px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    65%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    75%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f9{
    0%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
    15%{
        transform: translateY(300px);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    25%{
        transform: translateY(0px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    80%{
        transform: translateX(0px);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    90%{
        transform: translateX(300px);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateX(300px);
        opacity: 0;
        animation-timing-function: linear;
    }
}
@keyframes f10{
    0%{
        transform: translateY(300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    10%{
        transform: translateY(0px) scaleY(1);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    70%{
        transform: translateY(0px) scaleY(1);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    80%{
        transform: translateY(300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: ease-in;
    }
    100%{
        transform: translateY(300px) scaleY(0.5);
        opacity: 0;
        animation-timing-function: linear;
    }
}
#row1{
    display:flex;
    flex-direction: row;
    height: 25%;
    width: 100%;
}
#figure1{
    width: 50%;
    height: 100%;
    animation: f1 2s infinite;
}
#figure2{
    width: 25%;
    height: 100%;
    animation: f2 2s infinite;
}
#figure3{
    width: 25%;
    height: 100%;
    animation: f3 2s infinite;
}
#row2{
    display:flex;
    flex-direction: row;
    height: 75%;
    width: 100%;
}
#row2-column1{
    display:flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
}
#figure4{
    width: 100%;
    height: 66.66%;
    animation: f4 2s infinite;
}
#figure7{
    width: 100%;
    height: 33.33%;
    animation: f7 2s infinite;
}
#row2-column2{
    display:flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
}
#figure5{
    width:100%;
    height: 33.33%;
    animation: f5 2s infinite;
}
#row2-column2-row2{
    display: flex;
    flex-direction: row;
    width:100%;
    height: 66.66%;
}
#row2-column2-row2-column1{
    display: flex;
    flex-direction: column;
    height:100%;
    width: 66.66%;
}
#figure6{
    width:100%;
    height: 50%;
    animation: f6 2s infinite;
}
#row2-column2-row2-column1-row2{
    display: flex;
    flex-direction: row;
    width:100%;
    height: 50%;
}
#figure8{
    width:50%;
    height: 100%;
    animation: f8 2s infinite;
}
#figure9{
    width:50%;
    height: 100%;
    animation: f9 2s infinite;
}
#figure10{
    height: 100%;
    width: 33.33%;
    animation: f10 2s infinite;
}
</style>