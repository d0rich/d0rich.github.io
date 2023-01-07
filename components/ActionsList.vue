<template>
  <TransitionGroup name="actions" tag="div">
    <WrappersShape v-for="action, index in displayedActions" :key="action.to"
        class="w-full transform -my-8"
        :filter-class="filterClass"
        :class="{
          [action.class ?? '']: true,
          'origin-left': side === 'right',
          'origin-right': side === 'left'
        }"
        :style="{
          ...action.style,
          '--tw-rotate': `${ side === 'left' ? 12 - index * 18 : -12 + index * 18}deg`
        }"
        :shape-class="{
          'dark:bg-neutral-900': true,
          [action.shapeClass ?? '']: true
        }"
        :shape-style="{
          ...action.shapeStyle,
          ...(side === 'right' ? shapeStyles.right : shapeStyles.left)
        }">
        <div class="px-3 py-2" 
             :class="{
              'flex justify-end': side === 'right'
             }">
          <DBtn :to="action.to" tag="button"
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
  to?: string,
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
    },
    filterClass: {
      type: [ String, Object as () => Record<string, boolean> ],
      default: ''
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
      actions.value = props.actions.filter(() => true)
    })
    onBeforeUnmount(() => {
      actions.value = props.actions.filter(() => false)
    })
    return {
      displayedActions: actions,
      shapeStyles
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
  --tw-rotate: -90deg !important;
  @apply opacity-0;
}
.actions-leave-to {
  --tw-rotate: 90deg !important;
  @apply opacity-0;
}
</style>