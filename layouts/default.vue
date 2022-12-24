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
.page-enter-active,
.page-leave-active {
  transition: all var(--page-transition-length);
}
.page-enter-from {
  transform: translateX(30rem);
}
.page-leave-to {
  transform: translateX(-30rem);
}

#default-layout__transition-wrapper{
  @apply fixed w-full h-full top-0 left-0 sharp-shadow ss-neutral-50 ss-bl-3 hidden;
}

#default-layout__transition-bar{
  background-image: url('~/assets/img/page-transition-pattern.svg');
  background-size: 80px;
  background-attachment: fixed;
  clip-path: polygon(-120% 0, -100% 0, 0 100%, -20% 100%);
  @apply fixed bg-green-500 w-full h-full top-0 ;
}

#default-layout:has(.page-enter-active) #default-layout__transition-wrapper,
#default-layout:has(.page-leave-active) #default-layout__transition-wrapper{
  display: block;
}

/* bar */
#default-layout:has(.page-enter-active) #default-layout__transition-bar,
#default-layout:has(.page-leave-active) #default-layout__transition-bar{
  transition: all var(--page-transition-length) ease-in-out;
}

#default-layout:has(.page-leave-from) #default-layout__transition-bar{
  clip-path: polygon(-120% 0, -100% 0, 0 100%, -20% 100%);
}

#default-layout:has(.page-leave-to) #default-layout__transition-bar,
#default-layout:has(.page-enter-from) #default-layout__transition-bar{
  clip-path: polygon(-120% 0, 120% 0, 220% 100%, -20% 100%);
}

#default-layout:has(.page-enter-to) #default-layout__transition-bar{
  clip-path: polygon(100% 0, 120% 0, 220% 100%, 200% 100%);
}

/* header */

/* #default-layout:has(.page-enter-active) .header__shape-filter, 
#default-layout:has(.page-leave-active) .header__shape-filter{
  @apply ss-emerald-600 ss-b-1 ss-l-5;
} */
</style>