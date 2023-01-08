<template>
  <nav>
    <ActionsList class="w-1/2" :actions="[
      { title: 'Scroll to view', to: '#something' },
      { title: 'Visit page', to: '/portfolio' }
    ]" />
  </nav>
</template>

<script lang="ts">
import { PersonaName } from '~~/components/Persona.vue';
import { ActionListItem } from '~~/components/ActionsList.vue';

export default defineComponent({
  name: 'SectionsNavigation',
  setup(){
    const actions: ActionListItem<PersonaName>[] = [
      { title: 'Portfolio', to: '/portfolio', emit: 'arachnitect' },
      { title: 'Blog', to: '/blog', emit: 'yoda' },
      { title: 'Resume', to: '/resume', emit: 'tyrion' }
    ]
  }
})
</script>

<style>

</style>