<template>
    <div :class="{Img:true, FullScreen: Full}">
        <div :class="{blocker:true, blocked:Full}"  @click="ChangeSize()"></div>
        <img :src="src" @click="ChangeSize()" />
        <svg v-if="!Full" width="1em" height="1em" color=white @click="ChangeSize()" viewBox="0 0 16 16" class="arrows" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.464 10.536a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd" d="M5.964 10a.5.5 0 0 1 0 .707l-4.146 4.147a.5.5 0 0 1-.707-.708L5.257 10a.5.5 0 0 1 .707 0zm8.854-8.854a.5.5 0 0 1 0 .708L10.672 6a.5.5 0 0 1-.708-.707l4.147-4.147a.5.5 0 0 1 .707 0z"/>
            <path fill-rule="evenodd" d="M10.5 1.5A.5.5 0 0 1 11 1h3.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2h-3a.5.5 0 0 1-.5-.5zm4 9a.5.5 0 0 0-.5.5v3h-3a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5z"/>
            <path fill-rule="evenodd" d="M10 9.964a.5.5 0 0 0 0 .708l4.146 4.146a.5.5 0 0 0 .708-.707l-4.147-4.147a.5.5 0 0 0-.707 0zM1.182 1.146a.5.5 0 0 0 0 .708L5.328 6a.5.5 0 0 0 .708-.707L1.889 1.146a.5.5 0 0 0-.707 0z"/>
            <path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 0 0 5 1H1.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 1 0V2h3a.5.5 0 0 0 .5-.5z"/>
        </svg>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name:"ImgWithFullScreen",
    props:['src'],
    data(){
        return{
            Full: false
        }
    },
    methods:{
        ChangeSize(){
            this.Full= !this.Full;
        }
    }

})
</script>

<style scoped>
.Img{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: -20px;
}
.Img img {
  margin: auto;
  width: 100%;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color3);
  background-color: var(--color3);
  cursor: pointer;
  transition: ease 0.5s;
}

.Img.FullScreen{
    top:55px;
    left: 0;
    position: fixed;
    z-index: 50;
    height: calc(100% - 55px);
    width: 100%;
    transition: ease 0.5s;
}
@media screen and (orientation: landscape) {
    .Img.FullScreen img{
        display:block;
        margin: auto;
        position: relative;
        top: 5vh;
        z-index: 50;
        width:auto;
        height: calc(80vh - 55px);
        transition: ease 0.5s;
    }
}
@media screen and (orientation: portrait ) {
    .Img.FullScreen img{
        display:block;
        margin: auto;
        position: relative;
        top: calc(50vh - 40vw - 55px);
        z-index: 50;
        width: 80vw;
        transition: ease 0.5s;
    }
}
.arrows{
    position: relative;
    z-index: 1;
    top: -25px;
    left: calc(100% - 25px);
}
.blocker{
    position: fixed;
    z-index: 49;
    height: 100vh;
    width:100vw;
    top:0vh;
    left:-100vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: ease 0.2s;
}
.blocker.blocked{
    height: 100vh;
    width:100vw;
    top:0vh;
    left:0vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: ease 0.2s;
}
</style>
