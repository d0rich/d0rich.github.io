import gsap from 'gsap'
import { ComponentPublicInstance } from 'vue'

export const useIntroBlockAnimation = () => {
  const { showHeader } = useLayoutState()
  const nodes = {
    section: ref<Element | null>(null),
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance | null>(null),
    svg: ref<SVGElement & SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null)
  }

  // Transition animation
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
  })

  // Line animation
  onMounted(() => {
    const lineScrollTrigger = {
      scrub: 1,
      end: () => window.innerHeight * 1,
      start: () => window.innerHeight * .3,
    }
    generatePolygonPointsKeyframes([
      { left: { x: 90, y: 0 }, right: { x: 95, y: 0 } },
      { left: { x: 50, y: 33 }, right: { x: 63, y: 35 } },
      { left: { x: 80, y: 58 }, right: { x: 85, y: 55 } },
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

  // Handle displaying of the header
  let observer: IntersectionObserver
  onMounted(() => { 
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        showHeader.value = !entry.isIntersecting
      })
    })
    if (nodes.section.value) 
      observer.observe(nodes.section.value) 
  })
  onBeforeUnmount(() => { observer.disconnect() })

  return {
    introNodeRefs: nodes
  }
}

export const useSectionsDescriptionAnimation = () => {
  const nodes = {
    svg: ref<SVGElement & SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    portfolio: ref<Element | null>(null),
    blog: ref<Element | null>(null),
    resume: ref<Element | null>(null),
  }
  let observer: IntersectionObserver
  const currentSection = ref<'portfolio' | 'blog' | 'resume' | null>(null)
  // Line animation
  onMounted(() => {
    // TODO: delete timeout when https://github.com/nuxt/nuxt/issues/13471 is fixed
    setTimeout(() => {
      const scrollTrigger = {
        scrub: 1,
        start: () => (nodes.svg?.value?.getBoundingClientRect().top ?? 0) + window.scrollY - window.innerHeight * ( 1 - 0.35 * Number( window.innerHeight < window.innerHeight )),
        end: () => (nodes.svg?.value?.getBoundingClientRect().bottom ?? 0) + window.scrollY - window.innerHeight * ( 1 - 0.35 * Number( window.innerHeight < window.innerHeight )),
      }
      generatePolygonPointsKeyframes([
        { left: { x: 10, y: 0 }, right: { x: 13, y: 0 } },
        //{ left: { x: 9, y: 3 }, right: { x: 11, y: 2 } },
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
    }, 1000)
  })
  // Current section
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting && entry.target === nodes.resume.value)) {
        currentSection.value = 'resume'
        return
      }
      if (entries.some(entry => entry.isIntersecting && entry.target === nodes.blog.value)) {
        currentSection.value = 'blog'
        return
      }
      if (entries.some(entry => entry.isIntersecting && entry.target === nodes.portfolio.value)) {
        currentSection.value = 'portfolio'
        return
      }
    }, {
      rootMargin: '-33% 0% -66% 0%',
      threshold: 0
    })
    if (nodes.portfolio.value)
      observer.observe(nodes.portfolio.value)
    if (nodes.blog.value)
      observer.observe(nodes.blog.value)
    if (nodes.resume.value)
      observer.observe(nodes.resume.value)
  })
  onBeforeUnmount(() => {
    if (observer)
      observer.disconnect()
  })
  return {
    sectionsNodeRefs: nodes,
    currentSection
  }
}

export const useStoryAnimation = () => {
  const nodes = {
    storyContainer: ref<Element | null>(null),
    svg: ref<SVGElement & SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null)
  }

  onMounted(() => {
    // TODO: delete timeout when https://github.com/nuxt/nuxt/issues/13471 is fixed
    setTimeout(() => {
      const scrollTrigger = {
        scrub: 1,
        start: () => (nodes.storyContainer?.value?.getBoundingClientRect().top ?? 0) + window.scrollY - window.innerHeight ,
        end: () => (nodes.storyContainer?.value?.getBoundingClientRect().bottom ?? 0) + window.scrollY - window.innerHeight,
      }
      const line = [
        { left: { x: 2, y: 0 }, right: { x: 7, y: 0 } },
        { left: { x: 3, y: 10 }, right: { x: 9, y: 13 } },
        { left: { x: 1, y: 20 }, right: { x: 7, y: 20 } },
        { left: { x: 2, y: 30 }, right: { x: 7, y: 30 } },
        { left: { x: 0, y: 36 }, right: { x: 6, y: 40 } },
        { left: { x: 3, y: 47 }, right: { x: 8, y: 50 } },
        { left: { x: 1, y: 64 }, right: { x: 6, y: 60 } },
        { left: { x: 4, y: 70 }, right: { x: 9, y: 73 } },
        { left: { x: 2, y: 80 }, right: { x: 6, y: 85 } },
        { left: { x: 3, y: 92 }, right: { x: 8, y: 90 } },
        { left: { x: 0, y: 100 }, right: { x: 7, y: 100 } },
      ]
      generatePolygonLineKeyframes(line)
        .at(-1)
        ?.forEach(coords => {
          const point = nodes.svg.value?.createSVGPoint() 
          if (point){
            point.x = coords.x
            point.y = coords.y
            nodes.linePlaceholder.value?.points.appendItem(point)
          }
        })
      generatePolygonPointsKeyframes(line)
        .forEach(kfs => {
          const point = nodes.svg.value?.createSVGPoint() 
          if (point) {
            nodes.line.value?.points.appendItem(point)
            gsap.to(point, {
              keyframes: kfs,
              scrollTrigger
            })
          }
        })
    }, 1000)
  })

  return {
    storyNodeRefs: nodes
  }
}