<template>
  <div class="-mt-20">
    <section id="home-intro-section">
      <div class="absolute top-0 left-0 w-fit">
        <Persona :persona="mainPersona" class="h-96 w-96 sharp-shadow ss-br-3 ss-red-600" />
        <ActionsList :actions="actions" side="right" 
                     class="absolute top-2/3 w-1/2 left-2/3"
                     filter-class="sharp-shadow ss-br-3 ss-neutral-50"
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
      { title: 'About me', to: '#about', emit: 'main-profi' },
      { title: 'More', emit: 'main-action' }
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

