<template>
  <div class="btn">
    <div class="btn-hihlighter" />
    <slot />
  </div>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Highlight'
})

</script>

<style>
.btn{
  @apply font-semibold relative -rotate-6 uppercase;
}

.btn > .btn-hihlighter {
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  content: '';
  opacity: 0;
  @apply absolute backdrop-invert transition-all;
}

.btn:hover > .btn-hihlighter, .btn:focus .btn-hihlighter{
  width: 110%;
  height: 130%;
  top: -15%;
  left: -5%;
  opacity: 1;
  animation: hl-rotate linear 1s infinite;
}

.btn:focus .btn-hihlighter{
  width: 140%;
  height: 200%;
  top: -50%;
  left: -20%;
  opacity: 1;
  animation: hl-rotate linear 1s infinite;
}

@keyframes hl-rotate {
  0, 100% {
    transform: skew(0deg) rotate(12deg);
  }
  50% {
    transform: skew(-40deg) rotate(-28deg);
  }
}
</style>