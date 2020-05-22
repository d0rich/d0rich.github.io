<template>
  <div class="footer">
    <div class="hor"></div>
    <footer> 
        <div v-if="this.$route.path==='/prices'">
          <p class="Authors">Arts designed by:</p>
          <ul>
            <li><a href="http://www.freepik.com">Freepik</a></li>
            <li><a href="http://www.freepik.com">slidesgo / Freepik</a></li>
            <li><a href="http://www.freepik.com">pikisuperstar / Freepik</a></li>
            <li><a href="https://www.freepik.com">katemangostar / Freepik</a></li>
            <li><a href="https://www.freepik.com">slidesgo / Freepik</a></li>
            <li><a href="https://www.freepik.com">tudiogstock / Freepik</a></li>
          </ul>
        </div>
        <p>Developed by Dorich production with Dorich production's support for Dorich production.</p>
        <p>©All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>
.footer{
  position:relative;
  bottom: 0px;
}
a{
  color:var(--color5);
}
ul{
  margin-top:0;
}
.Authors{
  margin-bottom: 3px;
}

.hor{
  margin-top: 100px;
  width:100%;
  height: 5px;
  background-color: var(--color3);
}
footer{
  padding: 10px;
  color: var(--color3);
  font-size: 8pt;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0px;
}

</style>