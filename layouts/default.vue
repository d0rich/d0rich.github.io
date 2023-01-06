<template>
  <div id="default-layout">
    <div class="fixed w-full z-50" >
      <DHeader class="mx-auto max-w-xl" />
    </div>
    <main class="pt-20">
      <slot />
    </main>
    <div id="default-layout__transition-wrapper">
      <div id="default-layout__transition-bar" />
    </div>
  </div>
</template>

<script lang="ts">

import DHeader from './components/DHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    DHeader
  }
})
</script>

<style>
#default-layout{
  @apply w-full h-full overflow-x-hidden z-40;
  --page-transition-length: .4s;
}
</style>

<style>
.section-leave-active{
  transition: all var(--page-transition-length);
  /* @apply absolute; */
}

.section-enter-active{
  transition: all var(--page-transition-length);
}
.section-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.section-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

#default-layout__transition-wrapper{
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  @apply fixed sharp-shadow ss-neutral-50 ss-bl-3 hidden;
}

#default-layout__transition-bar{
  background-image: url('~/assets/img/page-transition-pattern.svg');
  background-size: 80px;
  background-attachment: fixed;
  clip-path: polygon(-120% 0, -100% 0, 0 100%, -20% 100%);
  @apply bg-green-500 w-full h-full top-0 ;
}

#default-layout:has(.section-enter-active, .section-leave-active) #default-layout__transition-wrapper {
  display: block;
}

/* bar */
#default-layout:has(.section-enter-active, .section-leave-active) #default-layout__transition-bar{
  transition: all var(--page-transition-length) linear;
}

#default-layout:has(.section-leave-from) #default-layout__transition-bar{
  clip-path: polygon(-120% 0, -100% 0, 0 100%, -20% 100%);
}

#default-layout:has(.section-leave-to, .section-enter-from) #default-layout__transition-bar{
  clip-path: polygon(-120% 0, 120% 0, 220% 100%, -20% 100%);
}

#default-layout:has(.section-enter-to) #default-layout__transition-bar{
  clip-path: polygon(100% 0, 120% 0, 220% 100%, 200% 100%);
}
</style>