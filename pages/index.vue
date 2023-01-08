<template>
  <div class="-mt-20">
    <section id="home-intro-section">
      <Transition name="main-persona">
        <div class="absolute top-0 left-0 w-fit" v-show="isMainPersonaActive" mode="out-in">
          <Persona :persona="mainPersona" class="h-96 w-96 sharp-shadow ss-br-3 ss-red-600" />
          <ActionsFan :actions="actions" side="right" 
                      class="absolute top-2/3 w-1/2 left-2/3"
                      filter-class="sharp-shadow ss-br-3 ss-neutral-50"
                      @action-choose="handleMainAction"
                      @action-focus="mainPersona = $event" 
                      @action-unfocus="mainPersona = 'main-idle'" />
        </div>
      </Transition>
      <Transition name="main-persona" mode="out-in">
        <SectionsNavigation v-show="!isMainPersonaActive"/>
      </Transition>
    </section>
  </div>
</template>

<script lang="ts">
import { PersonaName } from '~~/components/Persona.vue';
import { ActionFanItem } from '~~/components/ActionsFan.vue';

export default defineComponent({
  name: 'HomePage',
  setup(){
    const mainPersona = ref<PersonaName>('main-idle')
    const isMainPersonaActive = ref(false)
    const { showHeader } = useLayoutState()
    const actions: ActionFanItem<PersonaName>[] = [
      { title: 'About me', to: '#about', emit: 'main-profi' },
      { title: 'More', emit: 'main-action' }
    ]
    onMounted(() => {
      showHeader.value = false
      isMainPersonaActive.value = true
    })
    onBeforeRouteLeave(() => {
      showHeader.value = true
    })
    return {
      mainPersona,
      actions,
      isMainPersonaActive,
      handleMainAction(event: PersonaName) {
        if (event === 'main-action') {
          isMainPersonaActive.value = false
        }
      }
    }
  }

})

</script>

<style>
#home-intro-section{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @apply bg-green-700 relative;
}
</style>

<style scoped>
.main-persona-enter-active,
.main-persona-leave-active {
  @apply transition-all;
}
.main-persona-enter-from {
  transform: perspective(500px) translateZ(-500px) translateX(100px) ;
  @apply opacity-0;
}
.main-persona-leave-to {
  transform: perspective(500px) translateZ(500px) translateX(-100px) ;
  @apply opacity-0;
}
</style>

