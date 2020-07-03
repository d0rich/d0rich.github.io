<template>
    <div>
        <div class="ErrorMessage">
            <span>Error404 - page not found</span>
        </div>
        <div class="ErrorIMG">
            <img :src="require('@/assets/img/error404.svg')" />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Error404"
    
})
</script>
<style scoped>
.ErrorMessage{
    font-size: xx-large;
    color: var(--color1);
}
.ErrorIMG{
    width:100%;
}
.ErrorIMG img{
    width:100%;
}
</style>