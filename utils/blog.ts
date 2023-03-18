import { QueryBuilderWhere } from "@nuxt/content/dist/runtime/types"

export function getBlogPostsFilterObject(): QueryBuilderWhere{
  const config = useRuntimeConfig()
  return config.public.isProd
    ? { _draft: { $not: true } }
    : {}
}

export function getBlogPostsNavConfig() {
  return {
    itemsOnPage: 5
  }
}
