export default defineNuxtRouteMiddleware((to, from) => {
  // If first page in session
  if (to.path === from.path) return
  const sectionBefore = from.path.split('/')[1]
  const sectionAfter = to.path.split('/')[1]
  if (sectionBefore === sectionAfter) to.meta.pageTransition = false
})
