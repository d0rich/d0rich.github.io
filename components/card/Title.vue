<template>
  <div class="card__title -mt-5 mb-3">
    <WrapperShape class="inline-block -ml-10" 
        shape-class="bg-black"
        shape-style="clip-path: polygon(9% 9%, 100% 0%, 92% 91%, 0% 100%);">
      <h3 class="p-5 text-white">
        <slot/>
      </h3>
    </WrapperShape>
    <span class="ml-2">
      <slot name="extra" />
    </span>
  </div>
</template>

<style>
.card__title {
  @apply text-2xl sm:text-3xl font-semibold;
}
</style>