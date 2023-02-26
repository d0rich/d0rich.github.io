<template>
  <Transition name="header">
    <header v-if="show">
      <Shape 
            :filter-class="`${shadowColor} header__shape-filter`"
            shape-class="bg-neutral-900"
            :shape-style="{
              clipPath: 'polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)'
            }">
        <div class="w-full h-16 flex justify-evenly items-center overflow-visible">
          <DBtn to="/">Dorich</DBtn>
          <DBtn to="/projects">Projects</DBtn>
          <DBtn to="/blog">Blog</DBtn>
          <DBtn to="/resume">Resume</DBtn>
        </div>
      </Shape>
    </header>
  </Transition>
</template>

<script lang="ts">

import Shape from '~~/components/wrapper/Shape.vue';

export default defineComponent({
  name: 'DHeader',
  components: {
    Shape
  },
  setup(){
    const { showHeader } = useLayoutState()
    const route = useRoute()
    return{
      show: showHeader,
      shadowColor: computed(() => {
        if (route.path.startsWith('/blog'))
          return 'ss-cyan-300'
        if (route.path.startsWith('/projects'))
          return 'ss-red-300'
        if (route.path.startsWith('/resume'))
          return 'ss-blue-300'
        return 'ss-neutral-50'
      })
    }
  }
})
</script>

<style>
.header__shape-filter{
  @apply sharp-shadow ss-b-2 ss-r-3;
}

.header-enter-from .d-shape__bg-filter{
  @apply ss-b-5 ss-l-5;
}

.header-enter-to .d-shape__bg-filter{
  @apply ss-b-2 ss-r-3;
}

.header-leave-to .d-shape__bg-filter{
  @apply ss-b-5 ss-r-3;
}

.header-enter-active .d-shape__bg-filter{
  transition: all .5s ease-out;
}

.header-leave-active .d-shape__bg-filter{
  transition: all .5s ease-in;
}

.header-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.header-enter-active{
  transition: all .5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: right;
}

.header-leave-active{
  transition: .5s cubic-bezier(1, 0, 0.2, 0.4);
}

.header-enter-from {
  transform: rotate(-150deg);
  opacity: 0;
}
</style>