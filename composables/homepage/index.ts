import { ComponentPublicInstance } from 'vue'

import * as introAnimations from './intro'
import * as sectionsAnimations from './sections'
import * as storyAnimations from './story'

export const useIntroBlockAnimation = (rootRef: Ref<HTMLElement>) => {
  const nodes = {
    section: ref<Element | null>(null),
    main: ref<Element | null>(null),
    bg: ref<Element | null>(null),
    text: ref<ComponentPublicInstance | null>(null),
    svg: ref<SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    socials: ref<ComponentPublicInstance[]>([])
  }

  // Transition animation
  useSafeOnMounted(rootRef, () => {
    introAnimations.applyBgTransitionAnimation(nodes.main, nodes.bg, nodes.text)
  })

  // Social links animation

  useSafeOnMounted(rootRef, () => {
    introAnimations.applySocialLinksAnimation(nodes.socials)
  })

  // Line animation
  useSafeOnMounted(rootRef, () => {
    introAnimations.applyLineAnimation(nodes.svg, nodes.line)
  })

  return {
    introNodeRefs: nodes
  }
}

export const useSectionsDescriptionAnimation = (rootRef: Ref<HTMLElement>) => {
  const nodes = {
    svg: ref<SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    portfolio: ref<Element | null>(null),
    blog: ref<Element | null>(null),
    resume: ref<Element | null>(null)
  }
  const disconnectObserver = ref(() => {})
  const currentSection = ref<'portfolio' | 'blog' | 'resume' | null>(null)
  // Line animation
  useSafeOnMounted(rootRef, () => {
    sectionsAnimations.applyLineAnimation(nodes.svg, nodes.line)
  })
  // Current section
  useSafeOnMounted(rootRef, () => {
    disconnectObserver.value = sectionsAnimations.setupCurrentSectionObserver(
      nodes.portfolio,
      nodes.blog,
      nodes.resume,
      currentSection
    )
  })
  onBeforeUnmount(() => disconnectObserver.value())
  return {
    sectionsNodeRefs: nodes,
    currentSection
  }
}

export const useStoryAnimation = (rootRef: Ref<HTMLElement>) => {
  const nodes = {
    storyContainer: ref<Element | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null)
  }

  useSafeOnMounted(rootRef, () => {
    storyAnimations.applyProgressAnimation(
      nodes.storyContainer,
      nodes.svg,
      nodes.line,
      nodes.linePlaceholder
    )
  })

  return {
    storyNodeRefs: nodes
  }
}
