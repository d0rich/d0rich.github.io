export const usePageTransitionState = () => ({
  blockLinks: useState<boolean>(() => false)
})