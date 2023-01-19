export const useFaviconState = () => ({
  animation: useState(() => false)
})

export const useFaviconAnimation = () => {
  const { animation } = useFaviconState()
  const faviconFrames = [
    '/favicon.ico', 
    '/favicon-frames/frame-1.ico', 
    '/favicon-frames/frame-2.ico', 
    '/favicon-frames/frame-1.ico'
  ]
  const head = useHead({})
  let currentFaviconFrame = 0
  let process: NodeJS.Timer | undefined = undefined
  function initAnimation() {
    process = setInterval(() => {
      currentFaviconFrame += 1
      if (currentFaviconFrame >= faviconFrames.length)
        currentFaviconFrame = 0
      if (head)
        head.patch({
          link: [
            { rel: 'icon', type: 'image/x-icon', href: faviconFrames[currentFaviconFrame] }
          ]
        })
    }, 300)
  }
  watch(animation, (newValue) => {
    if (newValue) {
      initAnimation()
    }
    else {
      clearInterval(process)
    }
  })
  animation.value = true
  initAnimation()
}