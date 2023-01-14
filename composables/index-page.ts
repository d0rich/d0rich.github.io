import gsap from 'gsap'
import { ComponentPublicInstance } from 'vue'

export const useIntroBlockAnimation = () => {
  const introNodeRefs = {
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance  | null>(null)
  }

  onMounted(() => {
    const introScrollTrigger = {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight * .5,
    }
    gsap.fromTo(introNodeRefs.bg.value, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)'
    }, {
      scrollTrigger: introScrollTrigger,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)',
    })
    gsap.fromTo(introNodeRefs.main.value, {
    }, {
      scrollTrigger: introScrollTrigger,
      marginBottom: '-75vh'
    })
    gsap.fromTo(introNodeRefs.text.value?.$el, {
      top: '33%'
    }, {
      scrollTrigger: introScrollTrigger,
      top: '3%'
    })
  })

  return {
    introNodeRefs
  }
}