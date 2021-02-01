<template>
  <li>
    <router-link class="link" :to="route.route">{{route.title.text}}</router-link>
    <ul v-if="route.children" >
      <footer-route v-for="(child, index) in route.children" :key="index" :route="child" />
    </ul>
  </li>
</template>

<script>
export default {
name: "FooterRoute",
  props: [ 'route' ]
}
</script>

<style scoped>

</style>
