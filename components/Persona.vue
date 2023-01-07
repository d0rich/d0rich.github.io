<template>
  <div>
    <Transition name="persona" mode="out-in">
      <img v-if="persona === 'main-idle'" src="~/assets/img/personas/MainBW.webp" />
      <img v-else-if="persona === 'main-action'" src="~/assets/img/personas/ActionBW.webp" />
      <img v-else-if="persona === 'main-profi'" src="~/assets/img/personas/ProfiBW.webp" />
      <img v-else-if="persona === 'arachnitect'" src="~/assets/img/personas/ArachnitectBW.webp" />
      <img v-else-if="persona === 'tyrion'" src="~/assets/img/personas/TyrionBW.webp" />
      <img v-else-if="persona === 'yoda'" src="~/assets/img/personas/YodaBW.webp" />
    </Transition>
  </div>
</template>

<script lang="ts">

export type PersonaName = 'main-idle' | 'main-action' | 'main-profi' | 'tyrion' | 'yoda' | 'arachnitect'

export default defineComponent({
  name: 'Persona',
  props: {
    persona: {
      type: String as () => PersonaName,
      required: true
    }
  },
  setup(props){

  }
})

</script>

<style scoped>

img{
  @apply w-full h-full;
}

.persona-enter-active,
.persona-leave-active {
  @apply transition-all;
}

.persona-enter-from {
  @apply opacity-0 -translate-x-10;
}
.persona-leave-to {
  @apply opacity-0 translate-x-10;
}

</style>