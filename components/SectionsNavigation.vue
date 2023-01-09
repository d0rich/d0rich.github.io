<template>
  <nav class="relative">
    <div class="flex justify-evenly">
      <WrappersShape v-for="section in sections" :key="section.title" 
            shape-class="dark:bg-neutral-900"
            :shape-style="{
              clipPath: 'polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)'
            }">
        <div class="px-3 py-2">
          <DBtn tag="button" @click="switchPersona(section)">
            {{ section.title }}
          </DBtn>
        </div>  
      </WrappersShape>
    </div>
    <Persona :persona="currentPersona" class="w-96" />
    <ActionsList class="absolute w-1/2 bottom-0 left-1/3"
          :actions="actions" />
  </nav>
</template>

<script lang="ts">
import { PersonaName } from '~~/components/Persona.vue';
import { ActionListItem } from '~~/components/ActionsList.vue';

export default defineComponent({
  name: 'SectionsNavigation',
  setup(){
    const currentPersona = ref<PersonaName>('arachnitect')
    const currentLinks = ref({
      path: '/portfolio',
      section: '#projects'
    })
    const sections = [
      { title: 'Portfolio', path: '/portfolio', section: '#projects', emit: 'arachnitect' as PersonaName },
      { title: 'Blog', path: '/blog', section: '#posts', emit: 'yoda' as PersonaName },
      { title: 'Resume', path: '/resume', section: '#resume', emit: 'tyrion' as PersonaName }
    ]
    return {
      sections,
      currentPersona,
      switchPersona(section: any){
        currentPersona.value = section.emit
        currentLinks.value.path = section.path
        currentLinks.value.section = section.section
      },
      actions: computed<ActionListItem<PersonaName>[]>(() => {
        return [
          { title: 'Scroll to view', to: currentLinks.value.section },
          { title: 'Visit page', to: currentLinks.value.path }
        ]
      })
    }
  }
})
</script>

<style>

</style>