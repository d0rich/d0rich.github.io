<template>
    <div class="video">
      <div>
          <div>
            <iframe :src=Link allow="fullscreen" allowfullscreen></iframe>
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "VideoFrame",
    props: ['Link']
    
})
</script>

<style scoped>
.video div{
  padding-top: 0;
  height:0;
  padding-bottom:56.25%;
  position:relative;
}
.video div div{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  border-radius: 10px;
  border-style: solid;
  border-color: var(--color1);
  border-width: 3px;
  background-color: var(--color1);
  overflow: hidden;
}
iframe{
  position:absolute;
  border-style: hidden;
  left:0;
  top:0;
  width:100%;
  height: 100%;
}
</style>