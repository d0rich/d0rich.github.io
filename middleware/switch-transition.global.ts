export default defineNuxtRouteMiddleware((to, from) => {
  const sectionBefore = from.path.split('/')[1]
  const sectionAfter = to.path.split('/')[1]
  if (sectionBefore === sectionAfter)
    to.meta.pageTransition = false
})
