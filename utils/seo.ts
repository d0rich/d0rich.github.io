import { MaybeComputedRefOrPromise, UseSeoMetaInput } from '@unhead/vue'

export const getSeoTagsWithOG = (input: {
  title?: MaybeComputedRefOrPromise<string | null>
  ogTitle?: MaybeComputedRefOrPromise<string | null>
  description?: MaybeComputedRefOrPromise<string | null | undefined>
  image?: MaybeComputedRefOrPromise<string | null | undefined>
}) => {
  const options: UseSeoMetaInput = {}
  if (input.title) {
    options.title = input.title
    options.ogTitle = input.title
  }
  if (input.ogTitle) {
    options.ogTitle = input.title
  }
  if (input.description) {
    options.description = input.description
    options.ogDescription = input.description
  }
  if (input.image) {
    options.ogImage = input.image
  }
  return options
}
