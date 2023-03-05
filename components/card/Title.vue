<template>
  <div class="card__title">
    <WrapperShape class="card__title__content" 
        shape-class="card__title__content__shape">
      <h3 class="card__title__content__text">
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
  @apply text-2xl md:text-3xl font-semibold -mt-5 mb-3;
}

.card__title__content {
  @apply inline-block -ml-10;
}

.card__title__content__text {
  @apply p-5 text-white dark:text-black;
}

.card__title__content__shape {
  clip-path: polygon(.4em .4em, 100% 0%, calc(100% - .4em) calc(100% - .4em), 0% 100%);
  @apply bg-black dark:bg-white;
}

.force-light .card__title__content__text {
  @apply dark:text-white;
}
.force-light .card__title__content__shape {
  @apply dark:bg-black;
}

</style>