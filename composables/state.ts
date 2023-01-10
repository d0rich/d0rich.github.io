export const useLayoutState = () => ({
  showHeader: useState(() => true)
})

export const useBigBangButtonAnimationText = () => useState('bbb-animation-text', () => '')