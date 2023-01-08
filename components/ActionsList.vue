<template>
  <WrappersShape 
            shape-class="dark:bg-neutral-900"
            :shape-style="{
              clipPath: 'polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)'
            }">
    <TransitionGroup name="actions" tag="ul" class="p-10 relative">
      <li v-for="action in actions" :key="action.title">
        <DBtn :to="action.to" tag="button" highlight="list-item"
              @click="$emit('actionChoose', action.emit)">
          {{ action.title }}
        </DBtn>
        
      </li>
    </TransitionGroup>
  </WrappersShape>
</template>

<script lang="ts">

export type ActionListItem<TEmit = any> = {
  title: string,
  to?: string,
  emit?: TEmit
}

export default defineComponent({
  name: 'ActionsList',
  emits: ['actionChoose'],
  props: {
    actions: Array as () => ActionListItem[],
    default: []
  },
  setup(){
    
  }
})

</script>

<style>

</style>