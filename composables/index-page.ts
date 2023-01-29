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
      const point = nodes.svg.value?.createSVGPoint() 
      if (point) {
        nodes.line.value?.points.appendItem(point)
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

export const useSectionsDescriptionAnimation = () => {
  const nodes = {
    svg: ref<SVGElement & SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null)
  }
  onMounted(() => {
    const scrollTrigger = {
      scrub: 1,
      start: () => (nodes.svg?.value?.getBoundingClientRect().top ?? 0) + window.scrollY - window.innerHeight,
      end: () => (nodes.svg?.value?.getBoundingClientRect().bottom ?? 0) + window.scrollY - window.innerHeight,
    }
    generatePolygonPointsKeyframes([
      { left: { x: 0, y: 3 }, right: { x: 0, y: 2 } },
      { left: { x: 87, y: 4 }, right: { x: 90, y: 1 } },
      { left: { x: 83, y: 16 }, right: { x: 87, y: 10 } },
      { left: { x: 97, y: 6 }, right: { x: 94, y: 7 } },
      { left: { x: 43, y: 8 }, right: { x: 50, y: 9 } },
      { left: { x: 45, y: 67 }, right: { x: 57, y: 49 } },
      { left: { x: 90, y: 40 }, right: { x: 85, y: 38 } },
      { left: { x: 83, y: 23 }, right: { x: 72, y: 14 } },
      { left: { x: 95, y: 28 }, right: { x: 98, y: 25 } },
      { left: { x: 97, y: 93 }, right: { x: 99, y: 99 } },
      { left: { x: 40, y: 76 }, right: { x: 30, y: 75 } },
      { left: { x: 80, y: 60 }, right: { x: 95, y: 50 } },
      { left: { x: 50, y: 100 }, right: { x: 75, y: 100 } },
    ]).forEach(kfs => {
      const point = nodes.svg.value?.createSVGPoint() 
      if (point) {
        nodes.line.value?.points.appendItem(point)
        gsap.to(point, {
          keyframes: kfs,
          scrollTrigger
        })
      }
    })
  })
  

  return {
    sectionsNodeRefs: nodes
  }
}