<template>
  <div>
    <transition name="glitch-transition" mode="out-in">
      <router-view style="width: 100%" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "NewsController"
}
</script>

<style scoped>

</style>
