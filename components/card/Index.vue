<template>
  <WrapperShape class="card__vars" :shape-class="{
      'card__bg--homepage-story': mode === 'homepage-story',
      'card__bg': mode === 'default'
    }">
    <div class="card__content">
      <slot />
    </div>
  </WrapperShape>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Card',
  props: {
    mode: {
      type: String as () => 'homepage-story' | 'default',
      default: 'default'
    }
  },
  setup(){
  }
})
</script>

<style>
.card__vars {
  --card-clip-path: polygon(2em 0, 0% 100%, 100% calc(100% - 5em), 100% 4em);
  --card-padding: 4.5em .5em 5.5em 2.5em;
}
.card__content {
  padding: var(--card-padding);
  @apply text-black sm:text-lg;
}

.card__content p {
  @apply mb-2;
}

.card__bg--homepage-story {
  background: 
    url('~/assets/img/character/idle-shape-yellow-400.svg') fixed,
    rgb(255 255 255 / var(--tw-bg-opacity));
  background-position-x: calc(60vw - 50vh);
  background-position-y: -25vh;
  background-size: auto 150vh;
  background-repeat: no-repeat;
  clip-path: var(--card-clip-path);
}

.card__bg {
  clip-path: var(--card-clip-path);
  @apply bg-white;
}

</style>