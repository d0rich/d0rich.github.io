<template>
  <span class="d-chip">
    <slot />
  </span>
</template>

<style>
.d-chip {
  display: inline-block;
  clip-path: polygon(0 0, 100% .2em, calc(100% - .3em) 100%, .2em calc(100% - .3em));
  padding: .4em;
}

</style>