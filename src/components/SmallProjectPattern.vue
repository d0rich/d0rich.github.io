<template>
    <div class="VideoPattern ProjectPattern">
        <VideoFrame :Link="ProjectData.video.link" :proportion="ProjectData.video.W/ProjectData.video.H" />
        <div class="hashtags"><span>{{HashTags(ProjectData.HashTags)}}</span></div>
        <div class="hashtags"><span>{{DateToString(ProjectData.date)}}</span></div>
        <div class="description">
          <span v-html="ProjectData.description"></span>
        </div>
        <div class="ScreenShots" >
          <ImgWithFullScreen v-for="(screen, index) in ProjectData.screens" :key="index" :src="ImgLink(screen)" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoFrame from '@/components/VideoFrame.vue'
import ImgWithFullScreen from '@/components/ImgWithFullScreen.vue'

export default Vue.extend({
    name:'SmallProjectInfo',
    components: {
        VideoFrame,
        ImgWithFullScreen
    },
    props:['ProjectData']
})
</script>

<style scoped>
.ScreenShots{
  display: -webkit-flex; 
  -webkit-flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
}
.Img{
  width: 150px;
}
.video{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width:80%;
}
.hashtags{
  color:var(--color3);
  font-size: 10pt;
}
.ProjectPattern .hashtags{
  text-align: left;
  width:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  font-size: 14pt;
}
.description{
  width:80%;
  margin: 15px auto 30px;
  color: var(--color3);
  border-style: solid;
  border-width: 4px;
  border-radius: 20px;
  border-color: var(--color1);
  background-color: var(--color4);
  padding: 10px;
}

</style>
