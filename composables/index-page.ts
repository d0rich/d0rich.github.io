import gsap from 'gsap'
import { ComponentPublicInstance } from 'vue'

const { applyLinePerPointAnimation, applyStaticPoints, createLineFromArray } =
  usePolygonAnimationUtils()

const { getAbsoluteBoundingsGetters } = useElementsUtils()

export const useIntroBlockAnimation = () => {
  const nodes = {
    section: ref<Element | null>(null),
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null)
  }

  // Transition animation
  onMounted(() => {
    const introScrollTrigger = {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight * 0.5
    }
    gsap.fromTo(
      nodes.bg.value,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)'
      },
      {
        scrollTrigger: introScrollTrigger,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)'
      }
    )
    gsap.fromTo(
      nodes.main.value,
      {},
      {
        scrollTrigger: introScrollTrigger,
        marginBottom: '-75vh'
      }
    )
    gsap.fromTo(
      nodes.text.value?.$el,
      {
        top: '33%'
      },
      {
        scrollTrigger: introScrollTrigger,
        top: '3%'
      }
    )
  })

  // Line animation
  onMounted(() => {
    if (!nodes.svg.value || !nodes.line.value) return

    applyLinePerPointAnimation(
      createLineFromArray([
        [
          [90, 0],
          [95, 0]
        ],
        [
          [50, 33],
          [63, 35]
        ],
        [
          [80, 58],
          [85, 55]
        ],
        [
          [50, 100],
          [75, 100]
        ]
      ]),
      nodes.svg.value,
      nodes.line.value,
      (point, keyframes) => {
        gsap.to(point, {
          keyframes,
          scrollTrigger: {
            scrub: 1,
            end: () => window.innerHeight * 1,
            start: () => window.innerHeight * 0.3
          }
        })
      }
    )
  })

  return {
    introNodeRefs: nodes
  }
}

export const useSectionsDescriptionAnimation = () => {
  const nodes = {
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    portfolio: ref<Element | null>(null),
    blog: ref<Element | null>(null),
    resume: ref<Element | null>(null)
  }
  let observer: IntersectionObserver
  const currentSection = ref<'portfolio' | 'blog' | 'resume' | null>(null)
  // Line animation
  onMounted(() => {
    // TODO: delete timeout when https://github.com/nuxt/nuxt/issues/13471 is fixed
    setTimeout(() => {
      const svgBoundings = getAbsoluteBoundingsGetters(nodes.svg, {
        y: () =>
          -window.innerHeight *
          (1 - 0.35 * Number(window.innerHeight < window.innerWidth))
      })
      const scrollTrigger = {
        scrub: 1,
        start: svgBoundings.top,
        end: svgBoundings.bottom
      }
      const line = createLineFromArray([
        [
          [10, 0],
          [13, 0]
        ],
        [
          [87, 4],
          [90, 1]
        ],
        [
          [83, 16],
          [87, 10]
        ],
        [
          [97, 6],
          [94, 7]
        ],
        [
          [43, 8],
          [50, 9]
        ],
        [
          [45, 67],
          [57, 49]
        ],
        [
          [90, 40],
          [85, 38]
        ],
        [
          [83, 23],
          [72, 14]
        ],
        [
          [95, 28],
          [98, 25]
        ],
        [
          [97, 93],
          [99, 99]
        ],
        [
          [40, 76],
          [30, 75]
        ],
        [
          [80, 60],
          [95, 50]
        ],
        [
          [50, 100],
          [75, 100]
        ]
      ])
      if (!nodes.svg.value || !nodes.line.value) return
      applyLinePerPointAnimation(
        line,
        nodes.svg.value,
        nodes.line.value,
        (point, keyframes) => {
          gsap.to(point, {
            keyframes,
            scrollTrigger
          })
        }
      )
    }, 1000)
  })
  // Current section
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const checkIntersection = (el: Element | null) =>
          entries.some((entry) => entry.isIntersecting && entry.target === el)
        if (checkIntersection(nodes.resume.value)) {
          currentSection.value = 'resume'
        } else if (checkIntersection(nodes.blog.value)) {
          currentSection.value = 'blog'
        } else if (checkIntersection(nodes.portfolio.value)) {
          currentSection.value = 'portfolio'
        }
      },
      {
        rootMargin: '-33% 0% -66% 0%',
        threshold: 0
      }
    )
    if (nodes.portfolio.value) observer.observe(nodes.portfolio.value)
    if (nodes.blog.value) observer.observe(nodes.blog.value)
    if (nodes.resume.value) observer.observe(nodes.resume.value)
  })
  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
  return {
    sectionsNodeRefs: nodes,
    currentSection
  }
}

export const useStoryAnimation = () => {
  const nodes = {
    storyContainer: ref<Element | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null)
  }

  onMounted(() => {
    // TODO: delete timeout when https://github.com/nuxt/nuxt/issues/13471 is fixed
    setTimeout(() => {
      const line = createLineFromArray([
        [
          [2, 0],
          [7, 0]
        ],
        [
          [3, 10],
          [9, 13]
        ],
        [
          [1, 20],
          [7, 20]
        ],
        [
          [2, 30],
          [7, 30]
        ],
        [
          [0, 36],
          [6, 40]
        ],
        [
          [3, 47],
          [8, 50]
        ],
        [
          [1, 64],
          [6, 60]
        ],
        [
          [4, 70],
          [9, 73]
        ],
        [
          [2, 80],
          [6, 85]
        ],
        [
          [3, 92],
          [8, 90]
        ],
        [
          [0, 100],
          [7, 100]
        ]
      ])
      if (!nodes.svg.value || !nodes.linePlaceholder.value || !nodes.line.value)
        return
      // Scroll background from last frame
      applyStaticPoints(line, nodes.svg.value, nodes.linePlaceholder.value)
      // Scroll thumb animation
      const storyBoundings = getAbsoluteBoundingsGetters(nodes.storyContainer, {
        y: () => -window.innerHeight
      })
      applyLinePerPointAnimation(
        line,
        nodes.svg.value,
        nodes.line.value,
        (point, keyframes) => {
          gsap.to(point, {
            keyframes,
            scrollTrigger: {
              scrub: 1,
              start: storyBoundings.top,
              end: storyBoundings.bottom
            }
          })
        }
      )
    }, 1000)
  })

  return {
    storyNodeRefs: nodes
  }
}
