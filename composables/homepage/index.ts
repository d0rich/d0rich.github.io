import { ComponentPublicInstance } from 'vue'

import * as introAnimations from './intro'
import * as sectionsAnimations from './sections'
import * as storyAnimations from './story'

export const useHomepageAnimations = (rootRef: Ref<HTMLElement>) => {
  const introNodeRefs = {
    section: ref<Element | null>(null),
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance | null>(null),
    svg: ref<SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    socials: ref<ComponentPublicInstance[]>([])
  }

  const sectionsNodeRefs = {
    svg: ref<SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    portfolio: ref<Element | null>(null),
    blog: ref<Element | null>(null),
    resume: ref<Element | null>(null)
  }

  const disconnectObserver = ref(() => {})
  const currentSection = ref<'portfolio' | 'blog' | 'resume' | null>(null)

  const storyNodeRefs = {
    storyContainer: ref<Element | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null)
  }


  useSafeOnMounted(rootRef, () => {
    introAnimations.applyBgTransitionAnimation(introNodeRefs.main, introNodeRefs.bg, introNodeRefs.text)
    introAnimations.applySocialLinksAnimation(introNodeRefs.socials)
    introAnimations.applyLineAnimation(introNodeRefs.svg, introNodeRefs.line)
    sectionsAnimations.applyLineAnimation(sectionsNodeRefs.svg, sectionsNodeRefs.line)
    disconnectObserver.value = sectionsAnimations.setupCurrentSectionObserver(
      sectionsNodeRefs.portfolio,
      sectionsNodeRefs.blog,
      sectionsNodeRefs.resume,
      currentSection
    )
    storyAnimations.applyProgressAnimation(
      storyNodeRefs.storyContainer,
      storyNodeRefs.svg,
      storyNodeRefs.line,
      storyNodeRefs.linePlaceholder
    )
  })

  onBeforeUnmount(() => disconnectObserver.value())

  return {
    introNodeRefs,
    sectionsNodeRefs,
    currentSection,
    storyNodeRefs
  }
}
