<template>
  <div>
    <transition :duration="200" name="fade" mode="out-in">
      <Loader v-if="OnLoad" />

      <div v-if="!OnLoad">
        <div class="content1">
          <div class="photo">
            <div>PHOTO</div>
          </div>
          <div class="description">
            <p>{{HomePageData.Text1}}</p>
          </div>
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
import { CustomVue } from "vuex";

export default Vue.extend({
  name: "Home",
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
      this.FetchData();
    }
  },
  mounted() {
    this.FetchData();
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
            else this.HomePageData = response.data;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.OnLoad = false;
          setTimeout(() => {
            this.SetDotsInfo();
            this.SetDots(this.DotsData.target, this.DotsData.screenlist);
            this.AddListener(this.DotsData, this.SetDots);
          }, 400);
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
      let pos = windowPosition.top - screensPosition.top / 2,
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
.description {
  margin: 7px;
  max-width: 63%;
  margin-top: 50px;
  padding: 10px;
  border-radius: 20px;
  border-width: 5px;
  border-color: var(--color3);
  border-style: solid;
  background-color: var(--color4);
}
.description p {
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