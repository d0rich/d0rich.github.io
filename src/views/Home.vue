<template>
  <div>
    <transition :duration=200 name="fade" mode="out-in">
    <Loader v-if="OnLoad" />
    
    <div v-if="!OnLoad">
      <div class="content1">
        <div class="photo">
          <div>PHOTO</div>
        </div>
        <div class="description">
          <p>
            {{HomePageData.Text1}}
          </p>
        </div>
      </div>

      <div class="videopresentation_h">
        <span>{{HomePageData.Header1}}</span>
      </div>

      <VideoFrame :Link=HomePageData.PresLink />

      <div class="PresNavigation">
        <div>
          <div class="NavDots">
            <div v-for="(screen, index) in HomePageData.Screenshots" :key="index"></div>
          </div>
        </div>
        <div class="content2">
          <div v-for="(screen, index) in HomePageData.Screenshots" :key="index" class="Screen">
            <div class="ScreenDes">
              <span>{{screen.description}}</span>
            </div>
            <div class="ScreenRight">
              <div class="TimeCode">
                <div>
                  <span>{{screen.timecode}}</span>
                </div>
              </div>
              <div class="Screenshot">
                <img :src="ImgLink(screen.screenlink)">
              </div>
            </div>
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
import VideoFrame from '@/components/VideoFrame.vue'
import Loader from '@/components/Loader.vue'

export default Vue.extend({
  name: 'Home',
  data(){
    return{
      OnLoad: true,
      HomePageData: {
        language: '',
        Text1: '',
        Header1: '',
        PresLink: '',
        Screenshots: [{
          description: '',
          timecode: '',
          screenlink: ''
        }]
      },
    }
  },
  components: {
    VideoFrame,
    Loader
  },
  mounted:
    function(){
      axios
        .get(this.$data.ServerLink +'/getHomePageData?language=ru')
        .then(response => {
          this.HomePageData = response.data;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(()=>{this.OnLoad=false;})
  },
  updated:
    function(){
        const target = document.querySelector('.NavDots');
        const screenlist = document.querySelector('.PresNavigation');
        const screens = document.querySelectorAll('.Screen');
        const dots = document.querySelectorAll('.NavDots div');
        const TopBottom=function(elem){
          return{
            top: window.pageYOffset + elem.getBoundingClientRect().top,
            bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
          }
        }
      const DotsVisible = function(target, screenlist){
        const screensPosition = TopBottom(screenlist),
          windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          },
          length = screens.length - 1;
          let pos = windowPosition.top - screensPosition.top/2,
          WronglyActiveScreen, WronglyActiveDot, ActiveID;

          screens.forEach((screen, i) => {
            if (TopBottom(screen).top<TopBottom(target).top+(length+1)*10 && TopBottom(screen).bottom>TopBottom(target).top+(length+1)*10)
            ActiveID = i;
          });

          if (pos<30)
          {
            pos=30;
            ActiveID=0;
          }


          else if (pos>screensPosition.bottom- screensPosition.top -(length+1)*20-30)
          {
            pos=screensPosition.bottom- screensPosition.top -(length+1)*20-30;
            ActiveID=length;
          }

          screens.forEach((screen, i) => {
            if (i!=ActiveID && screen.classList.contains('Showing'))
            {
              WronglyActiveScreen = screen;
              WronglyActiveDot = dots[i];
            }
          });

          if (ActiveID != undefined)
          {
            screens[ActiveID].classList.add('Showing')
            dots[ActiveID].classList.add('ShowDot');
            if (WronglyActiveScreen != undefined)
            WronglyActiveScreen.classList.remove('Showing');
            if (WronglyActiveDot != undefined)
            WronglyActiveDot.classList.remove('ShowDot');
          }

          target.style.top=pos+"px";
      }

      const GoCheck = function(){DotsVisible (target, screenlist);}
      GoCheck();
      window.addEventListener('scroll', function() {
        GoCheck();
      });
    }
})
</script>

<style scoped>

.content1{
  min-height:300px;
  display: flex;
}
.photo{
  margin:7px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color1);
  border-style: solid;
  justify-content: center;
  background-color: var(--color4);
  width:30%;
  margin-bottom: 50px;
  height: 66%;
  color: var(--color1);
}
.photo div{
  line-height:200px;
  margin-left: 20%;
}
.description {
  margin:7px;
  max-width: 63%;
  margin-top:50px;
  padding: 10px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color3);
  border-style: solid;
  background-color: var(--color4);
}
.description p{
  color: var(--color3)
}
.videopresentation_h{
  margin-top:50px;
  display: flex;
  justify-content: center;
}
.videopresentation_h span{
  color: var(--color1);
  font-size: 15pt;
}
.video{
  margin-top: 20px;
  width:80%;
  margin-left: 10%;
}
.PresNavigation{
  padding:10px;
  display: flex;
}
.NavDots{
  position:relative;
  width:30px;
  padding:15px;
  margin-right: 10px;
}
.NavDots div{
  border-radius: 50%;
  background-color: var(--color1);
  height: 10px;
  width:10px;
  margin:5px;
  transform: scale(1);
  transition: ease 0.2s;
}
.NavDots .ShowDot{
  transform: scale(1.25);
  background-color: var(--color3);
}
.content2{
  display: flex;
  flex-direction: column;
}
.Screen{
  display: flex;
  color:var(--color1);
  margin-top: 20px;
  border-radius: 20px;
  background-color: var(--color4);
  padding:10px;
  border-style: solid;;
  border-color: var(--color3);
  border-width: 0px;
  transition: ease 0.2s;
}
.Showing{
  background-color: var(--color5);
  border-width: 2px;
}
.ScreenDes{
  background-color: var(--color5);
  border-radius: 20px;
  padding:10px;
  margin-right: 10px;
  max-width: 60%;
}
.ScreenRight{
  display: flex;
  flex-direction: column;
}
.TimeCode{
  padding:7px;
}
.TimeCode div{
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color3);
  color: var(--color3);
  text-align: center;
}
.Screenshot img{
  max-width: 100%;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color3);
  background-color: var(--color3);
}

</style>