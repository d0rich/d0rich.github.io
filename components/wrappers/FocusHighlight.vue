<template>
  <div class="d-focus-hl">
    <div v-if="variant === 'negative-tile'" class="d-focus-hl__hl--negative-tile" />
    <slot />
  </div>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Highlight',
  props: {
    variant: {
      type: String as () => 'negative-tile',
      default: 'negative-tile'
    }
  }
})

</script>

<!-- negative-tile -->
<style>
.d-focus-hl{
  @apply relative;
}

.d-focus-hl > .d-focus-hl__hl--negative-tile {
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  content: '';
  opacity: 0;
  @apply absolute backdrop-invert transition-all;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-tile, *:focus .d-focus-hl__hl--negative-tile{
  opacity: 1;
  animation: hl--negative-tile-animation linear 1s infinite;
}

.d-focus-hl:hover > .d-focus-hl__hl--negative-tile{
  width: 110%;
  height: 130%;
  top: -15%;
  left: -5%;
}

*:focus .d-focus-hl__hl--negative-tile{
  width: 140% !important;
  height: 200% !important;
  top: -50% !important;
  left: -20% !important;
}

@keyframes hl--negative-tile-animation {
  0, 100% {
    transform: skew(0deg) rotate(12deg);
  }
  50% {
    transform: skew(-40deg) rotate(-28deg);
  }
}
</style>