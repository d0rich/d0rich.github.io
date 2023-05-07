<template>
  <section class="flex justify-evenly items-center flex-wrap gap-4">
    <AsyncSafeSeoWithOg title="Error 404" />
    <DCharacter
      class="w-[clamp(300px,_50%,_430px)]"
      pose="idle"
      outline
      color
    />
    <div>
      <h1 class="text-4xl mb-4">Oops! Error 404</h1>
      <p class="mb-4">Soory, but it seems this page does not exist :(</p>
      <DBigBangButton class="underline" text="To Homepage" to="/" />
    </div>
  </section>
</template>
