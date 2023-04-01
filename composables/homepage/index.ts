import { ComponentPublicInstance } from 'vue'

import * as introAnimations from './intro'
import * as sectionsAnimations from './sections'
import * as storyAnimations from './story'
import * as skillsAnimations from './skills'

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
    sections: ref<Element[]>([]),
    sectionsMasks: ref<ComponentPublicInstance[]>([]),
    sectionsContent: ref<Element[]>([])
  }

  const disconnectObserver = ref(() => {})
  const currentSection = ref<'portfolio' | 'blog' | 'resume' | null>(null)

  const skillsNodeRefs = {
    block: ref<ComponentPublicInstance | null>(null),
    skillsGroups: ref<ComponentPublicInstance[]>([]),
    bgSpinner: ref<ComponentPublicInstance | null>(null)
  }

  const storyNodeRefs = {
    storyContainer: ref<Element | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null),
    cards: ref<ComponentPublicInstance[]>([])
  }

  useSafeOnMounted(rootRef, () => {
    introAnimations.applyBgTransitionAnimation(
      introNodeRefs.main,
      introNodeRefs.bg,
      introNodeRefs.text
    )
    introAnimations.applySocialLinksAnimation(introNodeRefs.socials)
    introAnimations.applyLineAnimation(introNodeRefs.svg, introNodeRefs.line)
    sectionsAnimations.applyLineAnimation(
      sectionsNodeRefs.svg,
      sectionsNodeRefs.line
    )
    disconnectObserver.value = sectionsAnimations.setupCurrentSectionObserver(
      sectionsNodeRefs.sections,
      currentSection
    )
    sectionsAnimations.applyContentRevealAnimation(
      sectionsNodeRefs.sectionsMasks,
      sectionsNodeRefs.sectionsContent
    )
    skillsAnimations.applyContentRevealAnimation(skillsNodeRefs.skillsGroups)
    // skillsAnimations.applyBgSpinnerParallaxAnimation(
    //   skillsNodeRefs.block,
    //   skillsNodeRefs.bgSpinner
    // )
    storyAnimations.applyProgressAnimation(
      storyNodeRefs.storyContainer,
      storyNodeRefs.svg,
      storyNodeRefs.line,
      storyNodeRefs.linePlaceholder
    )
    // storyAnimations.applyContentRevealAnimation(storyNodeRefs.cards)
  })

  onBeforeUnmount(() => disconnectObserver.value())

  return {
    introNodeRefs,
    sectionsNodeRefs,
    currentSection,
    skillsNodeRefs,
    storyNodeRefs
  }
}
