<template>
    <div class="video">
      <div class="video-subdiv" :style="{'padding-bottom': Proportion+'%'}">
          <div class="video-subsubdiv" >
            <iframe :src=Link allow="fullscreen" allowfullscreen></iframe>
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "VideoFrame",
    props: {
      Link: String,
      proportion: Number
    },
    computed:{
      Proportion(){
        if(this.proportion == undefined || this.proportion == null || isNaN(parseInt(String(this.proportion))))
          return String(9/16*100);
        else
          return String(1/this.proportion*100);
      }
    }
    
})
</script>

<style scoped>
.video-subdiv{
  padding-top: 0;
  height:0;
  position:relative;
}
.video-subsubdiv{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color1);
  border-width: 3px;
  background-color: var(--color1);
  overflow: hidden;
}
.video iframe{
  position:absolute;
  border-style: hidden;
  left:0;
  top:0;
  width:100%;
  height: 100%;
}
</style>