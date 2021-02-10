<template>
  <div class="img--wPh">
    <img class="img--wPh__bg" :src="phSrc" alt="">
    <img class="img--wPh__img" :src="src" alt="">
  </div>
</template>

<script>
export default {
name: "ImgWithPh",
  props: {
    src: {
      required: true
    },
    phSrc: {
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.img--wPh{
  position: relative;
  padding: 0;
  overflow: hidden;

  img{
    width: 100%;
  }

}
.img--wPh__bg{
    width: available;
    margin-bottom: -7px;
 }
.img--wPh__img{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
