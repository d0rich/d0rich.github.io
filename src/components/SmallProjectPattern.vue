<template>
    <div class="VideoPattern ProjectPattern">
        <VideoFrame :Link="ProjectData.videolink" />
        <div class="hashtags"><span>{{ProjectData.HashTags}}</span></div>
        <div class="description">
          <p>{{ProjectData.description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoFrame from '@/components/VideoFrame.vue'

export default Vue.extend({
    name:'SmallProjectInfo',
    components: {
        VideoFrame
    },
    props:['ProjectData']
})
</script>

<style scoped>
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

</style>