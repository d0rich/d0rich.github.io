<template>
  <div>
    <transition :duration="200" name="fade" mode="out-in">
      <Loader v-if="OnLoad" />

      <div v-if="!OnLoad">
        <div class="content1">
          <div class="photo">
            <div>PHOTO</div>
          </div>
          <div class="description1">
            <p>{{Intro.p1}}</p>
            <p>{{Intro.p2}}</p>
            <ul>
              <li>
                <p>{{Intro.p3}}</p>
                <div class="languageToggler"> 
                  <div class="toggleBody">
                    <div v-bind:class="{togglePoint:true, toggleRight: LanToggleRight, toggleLeft: !LanToggleRight}"  
                      v-on:click="$emit('lan-toggle')">
                    </div>
                    <div class="toggleText">
                      <span>{{LanName}}</span>
                      </div>
                  </div>
                </div>
              </li>
              <li>
                <p>{{Intro.p4}}</p>
                <div class="themeToggler"> 
                  <div class="toggleBody">
                    <div v-bind:class="{togglePoint:true, toggleRight: ThemeToggleRight, toggleLeft: !ThemeToggleRight}"  
                      v-on:click="$emit('theme-toggle')">
                    </div>
                    <div class="toggleText">
                      <span>{{ThemeName}}</span>
                      </div>
                  </div>
                </div>
              </li>
              <li>
                <p>{{Intro.p5}}</p>
                <div class="profToggler"> 
                  <div class="toggleBody">
                    <div v-bind:class="{togglePoint:true, toggleRight: ProfToggleRight, toggleLeft: !ProfToggleRight}"  
                      v-on:click="$emit('prof-toggle')">
                    </div>
                    <div class="toggleText">
                      <span>{{ProfName}}</span>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
            <p>{{Intro.p6}}</p>
            <p>{{Intro.p7}}</p>
            <p>{{Intro.p8}}</p>
          </div>
        </div>

        <div class="description2">
          <p>{{HomePageData.Text1}}</p>
        </div>

        <div class="videopresentation_h">
          <span>{{HomePageData.Header1}}</span>
        </div>

        <VideoFrame :Link="HomePageData.PresLink" />

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
                  <img :src="ImgLink(screen.screenlink)" />
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
import Vue from "vue";
import axios from "axios";
import VideoFrame from "@/components/VideoFrame.vue";
import Loader from "@/components/Loader.vue";

export default Vue.extend({
  name: "Home",
  props:['ThemeIndex', 'lan', 'prof'],
  data() {
    return {
      OnLoad: true,
      HomePageData: {
        language: "",
        Text1: "",
        Header1: "",
        PresLink: "",
        Screenshots: [
          {
            description: "",
            timecode: "",
            screenlink: ""
          }
        ]
      },
      DotsData: {
        target: null,
        screenlist: null,
        screens: null,
        dots: null
      }
    };
  },
  components: {
    VideoFrame,
    Loader
  },
  watch: {
    $route() {
      this.DestroyListener(this.DotsData, this.SetDots);
      this.FetchData();
    }
  },
  computed: {
    ThemeToggleRight(){
      if (this.ThemeIndex == 1)
      return true;
      else
      return false;
    },
    LanToggleRight(){
      if ( this.lan == 'en' )
      return true;
      else
      return false;
    },
    ProfToggleRight(){
      if ( this.prof == 'programmer' )
      return true;
      else
      return false;
    },
    ThemeName(){
      const ruNames: string[] = ['Классич.', 'Тёмная'];
      const enNames: string[] = ['Classic', 'Dark'];
      const index = parseInt(this.ThemeIndex);
      if( this.lan == 'ru' )
        return ruNames[index];
      else return enNames[index];
    },
    LanName(){
      if( this.lan == 'ru' )
        return 'Русский';
      else return 'English';
    },
    ProfName(){
      const ruNames: string[] = ['Видео', 'Программ.'];
      const enNames: string[] = ['Video', 'Programmer'];
      if( this.lan == 'ru' )
      {
        if ( this.prof == 'programmer' )
          return ruNames[1]
        else  
          return ruNames[0]
      }
      else
      {
        if ( this.prof == 'programmer' )
          return enNames[1]
        else  
          return enNames[0]
      }
    },
    Intro(){
      if(this.lan == 'ru')
      return {
        p1: `Приветствую вас на моём личном сайте! Меня зовут Дорофеев Николай. 
              Я являюсь профессионалом в областях создания видео и программирования.
              Подробней об этих вещах вы можете узнать далее на странице.`,
        p2: 'На сайте предусмотрены переключатели языка, цветовой схемы, целевой профессиональной деятельности:',
        p3: 'Здесь вы можете выбрать язык: русский или аглийский.',
        p4: 'Данный переключатель отвечает за цветовую схему. Вы можете выбрать между классическими цветами сайта и тёмной темой.',
        p5: 'И наконец, решите, с какой стороной моего профессионализма вы хотите ознакомиться: видеопроизводство или программирование.',
        p6: 'Переключатели также доступны в боковой панели ====>',
        p7: 'Вам не придётся возвращаться на главную страницу, чтобы что-то переключить!',
        p8: 'Приятного просмотра! (´• ω •`)'
      }
      else return{
        p1: `I welcome you to my personal site! My name is Nikolai Dorofeev.
              I am a professional in the fields of video creation and programming.
              You can learn more about these things later on the page.`,
        p2: 'The site provides switches for language, color scheme, target professional activity:',
        p3: 'Here you can select the language: Russian or English.',
        p4: 'This switch is responsible for the color scheme. You can choose between the classic colors of the site and the dark theme. ',
        p5: 'And finally, decide which side of my professionalism you want to familiarize yourself with: video production or programming.',
        p6: 'Switches are also available in the sidebar ====>',
        p7: 'You don’t have to return to the main page to switch something!',
        p8: 'Enjoy your viewing! (´ • ω • `) '
      }
    }
  },
  mounted() {
    this.FetchData();
  },
  beforeDestroy(){
    this.DestroyListener(this.DotsData, this.SetDots);
  },
  methods: {
    FetchData() {
      this.OnLoad = true;
      axios
        .get(
          this.$data.ServerLink +
            "/get-home-page-data?language=" +
            this.$route.params.lan +
            "&prof=" +
            this.$route.params.prof
        )
        .then(response => {
          if (response.data.status == "error")
            console.log(response.data.message);
          else {
            if (response.data.status == "not found")
              this.$router.push({
                name: "Error404",
                params: { lan: this.$route.params.lan }
              });
            else {
              this.HomePageData = response.data;
              setTimeout(() => {
                this.SetDotsInfo();
                this.SetDots(this.DotsData.target, this.DotsData.screenlist);
                this.AddListener(this.DotsData, this.SetDots);
              }, 400);
            }
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.OnLoad = false;
        });
    },
    TopBottom(elem) {
      return {
        top: window.pageYOffset + elem.getBoundingClientRect().top,
        bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
      };
    },
    SetDotsInfo() {
      this.DotsData.target = document.querySelector(".NavDots");
      this.DotsData.target.height = this.TopBottom(this.DotsData.target).bottom - this.TopBottom(this.DotsData.target).top;
      this.DotsData.screenlist = document.querySelector(".PresNavigation");
      this.DotsData.screens = document.querySelectorAll(".Screen");
      this.DotsData.dots = document.querySelectorAll(".NavDots div");
    },
    SetDots(target, screenlist) {
      const screensPosition = this.TopBottom(screenlist),
        windowPosition = {
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight
        },
        length = this.DotsData.screens.length - 1;
      let pos = windowPosition.top - screensPosition.top + (screen.height - target.height )/2 ,
        WronglyActiveScreen,
        WronglyActiveDot,
        ActiveID;

      this.DotsData.screens.forEach((screen, i) => {
        if (
          this.TopBottom(screen).top <
            this.TopBottom(target).top + (length + 1) * 10 &&
          this.TopBottom(screen).bottom >
            this.TopBottom(target).top + (length + 1) * 10
        )
          ActiveID = i;
      });

      if (pos < 30) {
        pos = 30;
        ActiveID = 0;
      } else if (
        pos >
        screensPosition.bottom - screensPosition.top - (length + 1) * 20 - 30
      ) {
        pos =
          screensPosition.bottom - screensPosition.top - (length + 1) * 20 - 30;
        ActiveID = length;
      }

      this.DotsData.screens.forEach((screen, i) => {
        if (i != ActiveID && screen.classList.contains("Showing")) {
          WronglyActiveScreen = screen;
          WronglyActiveDot = this.DotsData.dots[i];
        }
      });

      if (ActiveID != undefined) {
        this.DotsData.screens[ActiveID].classList.add("Showing");
        this.DotsData.dots[ActiveID].classList.add("ShowDot");
        if (WronglyActiveScreen != undefined)
          WronglyActiveScreen.classList.remove("Showing");
        if (WronglyActiveDot != undefined)
          WronglyActiveDot.classList.remove("ShowDot");
      }

      target.style.top = pos + "px";
    },
    AddListener(DotsData, DotsFunc) {
      window.addEventListener('scroll', function(){DotsFunc(DotsData.target, DotsData.screenlist);});
    },
    DestroyListener(DotsData, DotsFunc) {
      window.removeEventListener('scroll', function(){DotsFunc(DotsData.target, DotsData.screenlist);});
    }
  }
});
</script>

<style scoped>
.content1 {
  min-height: 300px;
  display: flex;
}
.photo {
  margin: 7px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color1);
  border-style: solid;
  justify-content: center;
  background-color: var(--color4);
  width: 30%;
  margin-bottom: 50px;
  height: 66%;
  color: var(--color1);
}
.photo div {
  line-height: 200px;
  margin-left: 20%;
}
.description1 {
  margin: 7px;
  max-width: 63%;
  margin-top: 50px;
  padding: 10px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color3);
  border-style: solid;
  color: var(--color3);
  background-color: var(--color4);
}
.description2 {
  margin: auto;
  max-width: 80%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color1);
  border-style: solid;
  background-color: var(--color4);
  color: var(--color3);
}
.videopresentation_h {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.videopresentation_h span {
  color: var(--color3);
  font-size: 15pt;
}
.video {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}
.PresNavigation {
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.NavDots {
  position: relative;
  width: 30px;
  padding: 15px;
  margin-right: 10px;
}
.NavDots div {
  border-radius: 50%;
  background-color: var(--color1);
  height: 10px;
  width: 10px;
  margin: 5px;
  transform: scale(1);
  transition: ease 0.2s;
}
.NavDots .ShowDot {
  transform: scale(1.5);
  transform-origin: center;
  background-color: var(--color3);
}
.content2 {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.Screen {
  display: flex;
  flex-direction: column-reverse;
  max-height: 350px;
  color: var(--color3);
  margin-top: 20px;
  border-radius: 20px;
  background-color: var(--color2);
  padding: 10px;
  border-style: solid;
  border-color: var(--color3);
  border-width: 0px;
  transition: ease 0.2s;
}
.Showing {
  background-color: var(--color4);
  border-width: 2px;
  border-color: var(--color1);
}
.ScreenDes {
  background-color: var(--color4);
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  overflow-y: auto;
}
.ScreenDes::-webkit-scrollbar-corner {
  background: var(--color5);
}
.ScreenDes::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.ScreenRight {
  display: flex;
  flex-direction: column;
}
.TimeCode {
  padding: 7px;
}
.TimeCode div {
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  color: var(--color3);
  text-align: center;
  font-size: 14pt;
  border-color: var(--color3);
  color: var(--color3);
}
.Screenshot img {
  display: block;
  max-height: 125px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: var(--color3);
  background-color: var(--color3);
}
.Screenshot img {
  border-color: var(--color1);
  color: var(--color1);
}
</style>