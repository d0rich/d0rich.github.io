<template>
  <v-btn icon @click="switchTheme">
    <v-icon>
      {{ $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  methods: {
    switchTheme(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>

</style>