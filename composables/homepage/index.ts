import { ComponentPublicInstance } from 'vue'

import * as storyAnimations from './story'
import * as skillsAnimations from './skills'

export const useHomepageAnimations = (rootRef: Ref<HTMLElement>) => {
  const sectionsNodeRefs = {
    svg: ref<SVGSVGElement | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    sections: ref<Element[]>([]),
    sectionsMasks: ref<ComponentPublicInstance[]>([]),
    sectionsContent: ref<Element[]>([])
  }

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
    skillsAnimations.applyContentRevealAnimation(skillsNodeRefs.skillsGroups)
    storyAnimations.applyProgressAnimation(
      storyNodeRefs.storyContainer,
      storyNodeRefs.svg,
      storyNodeRefs.line,
      storyNodeRefs.linePlaceholder
    )
    // storyAnimations.applyContentRevealAnimation(storyNodeRefs.cards)
  })

  return {
    sectionsNodeRefs,
    skillsNodeRefs,
    storyNodeRefs
  }
}
