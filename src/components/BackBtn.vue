<template>
  <nav>
  <v-btn color="primary" @click="$router.back()">
    <v-icon>
      mdi-chevron-left
    </v-icon>
    <slot>
      Back
    </slot>
  </v-btn>
  </nav>
</template>

<script>
export default {
  name: "BackBtn"
}
</script>

<style scoped>

</style>