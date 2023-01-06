<template>
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup(){
    const faviconFrames = [
      '/favicon.ico', 
      '/favicon-frames/frame-1.ico', 
      '/favicon-frames/frame-2.ico', 
      '/favicon-frames/frame-1.ico']
    let currentFaviconFrame = 0
    const head = useHead({})
    setInterval(() => {
      currentFaviconFrame += 1
      if (currentFaviconFrame >= faviconFrames.length)
        currentFaviconFrame = 0
      if (head)
        head.patch({
          link: [
            { rel: 'icon', type: 'image/x-icon', href: faviconFrames[currentFaviconFrame] }
          ]
        })
    }, 100)
    
    // TODO: Remove when https://github.com/vuejs/core/issues/5513 fixed
    const key = ref(0);
    const messages = [
      `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
      `NotFoundError: The object can not be found here.`, // safari
    ];
    if (typeof window !== "undefined") {
      // @ts-expect-error using arbitrary window key
      if (!window.__vue5513) {
        window.addEventListener("error", (event) => {
          if (messages.includes(event.message)) {
            event.preventDefault();
            console.warn(
              "Rerendering layout because of https://github.com/vuejs/core/issues/5513",
            );
            key.value++;
          }
        });
      }

      // @ts-expect-error using arbitrary window key
      window.__vue5513 = true;
    }
    return {
      key
    }
  }
})
</script>