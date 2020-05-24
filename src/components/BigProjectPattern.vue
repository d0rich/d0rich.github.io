<template>
    <div class="BigProjectPattern ProjectPattern">
      <div class="MainVideo" v-for="(i, index) in ProjectData.videolink" :key="'VideoFrame'+index">
        <VideoFrame :Link=ProjectData.videolink  />
      </div>
        <img v-for="(i, index) in ProjectData.FirstImg" :key="'FirstImg'+index" :src=ImgLink(ProjectData.FirstImg) />
        <div class="hashtags"><span>{{ProjectData.HashTags}}</span></div>
        <div class="description">
          <p>{{ProjectData.description}}</p>
        </div>
        <div v-for="(i, index) in ProjectData.Tiles" :key="'Tile'+index" class="Tile">
          <div class="TextPart">
            {{i.subdescription}}
          </div>
          <div class="ImgPart">
              <img v-for="(k, index) in i.mainimg" :key="'MainImg'+index" :src=ImgLink(k) class="MainImg" />
              <div class="TileVideo" v-for="(k, index) in i.video" :key="'Video'+index" >
                <VideoFrame :Link="k" />
              </div>
              <div class="SecondaryImg">
                  <img v-for="(k, index) in i.subimg" :key="'img'+index" :src=ImgLink(k) />
              </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoFrame from '@/components/VideoFrame.vue'

export default Vue.extend({
    name:'BigProjectInfo',
    components: {
        VideoFrame
    },
    props:['ProjectData']
})
</script>

<style scoped>
.TileVideo{
  margin-bottom: -100%;
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
.MainImg{
  max-width:100%;
  height:auto;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color1);
  background-color: var(--color1);
}
.Tile .ImgPart img, .Tile.ImgPart div{
  margin: 5px;
}
.SecondaryImg {
  display: block;
}
.SecondaryImg img{
  margin:5px;
  max-width: 35%;
  height:auto;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--color3);
  background-color: var(--color3);
}
.BigProjectPattern .Tile .TextPart{
  width: 55%;
  padding: 5px;
}
/* Конец классов для большого проекта */
</style>