import gsap from 'gsap'
import { ComponentPublicInstance } from 'vue'

export const useIntroBlockAnimation = () => {
  const nodes = {
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance | null>(null),
    svg: ref<SVGElement & SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null)
  }

  onMounted(() => {
    const introScrollTrigger = {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight * .5,
    }
    gsap.fromTo(nodes.bg.value, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)'
    }, {
      scrollTrigger: introScrollTrigger,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)',
    })
    gsap.fromTo(nodes.main.value, {
    }, {
      scrollTrigger: introScrollTrigger,
      marginBottom: '-75vh'
    })
    gsap.fromTo(nodes.text.value?.$el, {
      top: '33%'
    }, {
      scrollTrigger: introScrollTrigger,
      top: '3%'
    })
    const lineScrollTrigger = {
      scrub: 1,
      end: () => window.innerHeight * 1,
      start: () => window.innerHeight * .3,
    }
    generatePolygonPointsKeyframes([
      { left: { x: 90, y: 0 }, right: { x: 95, y: 0 } },
      { left: { x: 50, y: 33 }, right: { x: 63, y: 35 } },
      { left: { x: 80, y: 58 }, right: { x: 85, y: 55 } },
      //{ left: { x: 60, y: 85 }, right: { x: 75, y: 80 } },
      { left: { x: 50, y: 100 }, right: { x: 75, y: 100 } }
    ]).forEach(kfs => {
      console.log(kfs)
      // @ts-ignore
      const point = nodes.line.value?.points.appendItem(nodes.svg.value?.createSVGPoint())
      if (point) {
        gsap.to(point, {
          keyframes: kfs,
          scrollTrigger: lineScrollTrigger
        })
      }
    })
  })

  return {
    introNodeRefs: nodes
  }
}