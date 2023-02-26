<template>
  <WrapperShape :shape-class="{
      'card__bg--homepage-story': mode === 'homepage-story',
      'card__bg--homepage-skills': mode === 'homepage-skills',
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
      type: String as () => 'default' | 'homepage-story' | 'homepage-skills',
      default: 'default'
    }
  },
  setup(){
  }
})
</script>

<style>
.card__content {
  padding: var(--shape-card-padding);
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
  clip-path: var(--shape-card);
}

.card__bg--homepage-skills {
  background: 
    url('~/assets/img/character/action-shape-cyan-400.svg') fixed,
    rgb(255 255 255 / var(--tw-bg-opacity));
  background-position: center;
  background-size: auto 100vh;
  background-repeat: no-repeat;
  clip-path: var(--shape-card);
}

.card__bg {
  clip-path: var(--shape-card);
  @apply bg-white;
}

</style>