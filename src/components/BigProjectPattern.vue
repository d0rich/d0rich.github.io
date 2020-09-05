<template>
    <div class="BigProjectPattern ProjectPattern">
      <div class="MainVideo" v-for="(i, index) in ProjectData.video" :key="'VideoFrame'+index">
        <VideoFrame :Link=i.Link :proportion="i.W/i.H" />
      </div>
        <img class="HeadImg" v-for="(i, index) in ProjectData.FirstImg" :key="'FirstImg'+index" :src=ImgLink(ProjectData.FirstImg) />
        <div class="hashtags"><span>{{HashTags(ProjectData.HashTags)}}</span></div>
        <div class="hashtags"><span>{{DateToString(ProjectData.date)}}</span></div>
        <div class="description">
          <span v-html="ProjectData.description" />
        </div>
        <div v-for="(i, index) in ProjectData.Tiles" :key="'Tile'+index" class="Tile">
          <div class="TextPart">
            <span style="margin: auto" v-html="i.subdescription" />
          </div>
          <div class="ImgPart">
              <div v-for="(k, index) in i.mainimg" :key="'MainImg'+index" class="MainImg" >
                <ImgWithFullScreen :src=ImgLink(k) />
              </div>
              <div class="TileVideo" v-for="(k, index) in i.video" :key="'Video'+index" >
                <VideoFrame :Link="k.Link" :proportion="k.W/k.H" />
              </div>
              <div v-if="i.subimg.length !== 0" class="SecondaryImg">
                <div class="SecImg" v-for="(k, index) in i.subimg" :key="'img'+index">
                  <ImgWithFullScreen  :src=ImgLink(k) />
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoFrame from '@/components/VideoFrame.vue'
import ImgWithFullScreen from '@/components/ImgWithFullScreen.vue'

export default Vue.extend({
    name:'BigProjectInfo',
    components: {
        VideoFrame,
        ImgWithFullScreen
    },
    props:['ProjectData']
})
</script>
<style>
.Tile .TextPart a{
  text-decoration: underline;
}
</style>
<style scoped>

.TileVideo{
  margin-bottom: 10px
}
.TileVideo video{
  margin-bottom: -50%;
  width: 200%;
  transform-origin: left top;
  transform: scale(0.5, 0.5);
}
.MainVideo{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width:80%;
}
.HeadImg{
  width: 85%;
  border: 5px solid var(--color3);
  border-radius: 20px;
  margin: 15px calc((100% - 85%) / 2);
}
.hashtags{
  text-align: left;
  color:var(--color3);
  width:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  font-size: 10pt;
}
.description{
  width:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 30px;
  color: var(--color3);
  border-style: solid;
  border-width: 4px;
  border-radius: 20px;
  border-color: var(--color1);
  background-color: var(--color4);
  padding: 10px;
}
.FirstImg{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border-style: solid;
  background-color: var(--color1);
  border-color: var(--color1);
  border-width: 3px;
}
.Tile{
  max-width:90%;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 20px;
  border-style: solid;
  background-color: var(--color4);
  border-color: var(--color1);
  border-width: 3px;
  padding:5px;
  display: flex;
  overflow: hidden;
}
.Tile:nth-last-of-type(1){
    margin-bottom:30px;
}
.Tile:nth-of-type(2n+1){
  flex-direction: row;
}
.Tile:nth-of-type(2n){
  flex-direction: row-reverse;
}
.Tile .TextPart{
  color:var(--color3);
  text-align: center;
}
.Tile .ImgPart{
  max-width: 40%;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
.ImgPart{
  width: 40%;
}
.MainImg{
  width:95%;

}
.Tile .ImgPart img, .Tile.ImgPart div{
  margin: 5px;
}
.SecondaryImg {
  display: -webkit-flex; 
  -webkit-flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
}
.SecondaryImg .SecImg{
  width: 45%;
}
.BigProjectPattern .Tile .TextPart{
  width: 55%;
  padding: 5px;
}
/* Конец классов для большого проекта */
</style>
