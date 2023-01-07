<template>
  <TransitionGroup name="actions">
    <WrappersShape v-for="action in displayedActions" :key="action.to"
        class="absolute bottom-1/2 w-1/2"
        :class="{
          [action.class ?? '']: true,
          'origin-left': side === 'right',
          'origin-right': side === 'left'
        }"
        :shape-class="action.shapeClass"
        :shape-style="action.shapeStyle">
        <div class="px-3 py-2" 
             :class="{
              'flex justify-end': side === 'right'
             }">
          <DBtn :to="action.to"
                @mouseenter="$emit('actionFocus', action.emit)" 
                @touchstart="$emit('actionFocus', action.emit)" 
                @focusin="$emit('actionFocus', action.emit)" 
                @mouseleave="$emit('actionUnfocus', action.emit)"
                @touchend="$emit('actionUnfocus', action.emit)"
                @focusout="$emit('actionUnfocus', action.emit)">
            {{ action.title }}
          </DBtn>
        </div>
    </WrappersShape>
  </TransitionGroup>
</template>

<script lang="ts">
import { CSSProperties } from 'vue';

export type ActionItem<TEmit = any> = {
  title: string,
  to: string,
  emit?: TEmit,
  class?: string,
  style?: CSSProperties,
  shapeClass?: string,
  shapeStyle?: CSSProperties
}

export default defineComponent({
  name: 'ActionsList',
  emits: ['actionFocus', 'actionUnfocus'],
  props: {
    actions: {
      type: Array as () => ActionItem[],
      default: []
    },
    side: {
      type: String as () => 'right' | 'left',
      default: 'left'
    }
  },
  setup(props){
    const shapeStyles: Record<string, CSSProperties> = {
      left: {
        clipPath: 'polygon(10px 0, 0 100%, 100% 40%)'
      },
      right: {
        clipPath: 'polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)'
      }
    }
    const actions = ref<ActionItem[]>([])
    onMounted(() => {
      actions.value = props.actions
        .map(action => ({
          ...action,
          shapeStyle: {
            ...(props.side === 'left' ? shapeStyles.left : shapeStyles.right),
            ...(action.shapeStyle ?? {})
          }
        }))
    })
    onBeforeUnmount(() => {
      actions.value = props.actions.filter(() => false)
    })
    return {
      displayedActions: actions
    }
  }
})
</script>

<style>
.actions-enter-active,
.actions-leave-active {
  @apply transition-all;
}
.actions-enter-from {
  @apply opacity-0 -rotate-90;
}
.actions-leave-to {
  @apply opacity-0 rotate-90;
}
</style>