import { ComponentPublicInstance } from 'vue'

import * as storyAnimations from './story'

export const useHomepageAnimations = (rootRef: Ref<HTMLElement>) => {
  const storyNodeRefs = {
    storyContainer: ref<Element | null>(null),
    svg: ref<(SVGElement & SVGSVGElement) | null>(null),
    line: ref<SVGPolygonElement | null>(null),
    linePlaceholder: ref<SVGPolygonElement | null>(null),
    cards: ref<ComponentPublicInstance[]>([])
  }

  useSafeOnMounted(rootRef, () => {
    storyAnimations.applyProgressAnimation(
      storyNodeRefs.storyContainer,
      storyNodeRefs.svg,
      storyNodeRefs.line,
      storyNodeRefs.linePlaceholder
    )
    // storyAnimations.applyContentRevealAnimation(storyNodeRefs.cards)
  })

  return {
    storyNodeRefs
  }
}
