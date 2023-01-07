<template>
  <div class="-mt-20">
    <section id="home-intro-section">
      <div class="absolute top-11 left-0 right-0 m-auto w-fit">
        <Persona :persona="mainPersona" class="h-96 w-96 sharp-shadow ss-br-5 ss-red-600" />
        <ActionsList :actions="actions" side="left"
                     @action-focus="mainPersona = $event" 
                     @action-unfocus="mainPersona = 'main-idle'" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { PersonaName } from '~~/components/Persona.vue';
import { ActionItem } from '~~/components/ActionsList.vue';

export default defineComponent({
  name: 'HomePage',
  setup(){
    const mainPersona = ref<PersonaName>('main-idle')
    const { showHeader } = useLayoutState()
    const actions: ActionItem<PersonaName>[] = [
      {
        title: 'Portfolio', to: '/portfolio', emit: 'arachnitect',
        class: 'rotate-45',
        shapeClass: 'dark:bg-neutral-900'
      },
      {
        title: 'Blog', to: '/blog', emit: 'yoda',
        class: 'rotate-12',
        shapeClass: 'dark:bg-neutral-900'
      },
      {
        title: 'Resume', to: '/resume', emit: 'tyrion',
        class: '-rotate-6',
        shapeClass: 'dark:bg-neutral-900'
      }
    ]
    onMounted(() => {
      showHeader.value = false
    })
    onBeforeRouteLeave(() => {
      showHeader.value = true
    })
    return {
      mainPersona,
      actions
    }
  }

})

</script>

<style>
#home-intro-section{
  width: 100vw;
  height: 100vh;
  @apply bg-green-700 relative;
}
</style>

