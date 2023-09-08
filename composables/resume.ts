import type {
  ParsedContent,
  QueryBuilderWhere
} from '@nuxt/content/dist/runtime/types'
import type { TimeNote } from '~~/components/resume/TimeNote.vue'
import type { D0xigenProjectMeta } from '~~/server/utils/types'

interface TaggedParsedContent extends ParsedContent {
  tags?: string[]
  projects?: {
    tags?: string[]
  }
}

export type ResumeData = {
  lead: TaggedParsedContent
  contacts: ParsedContent
  languages: ParsedContent
  skills: TaggedParsedContent[]
  work: TimeNote[]
  projects: D0xigenProjectMeta[]
  certificates: TimeNote[]
  education: TimeNote[]
}

export function useResumeData() {
  const resumeType = computed(() => useRoute().params.type as string)
  return useAsyncData(() => {
    return new Promise<ResumeData>((resolve, reject) => {
      queryContent<TaggedParsedContent>('resume', 'leads', resumeType.value)
        .findOne()
        .then((lead) => {
          const filterObject: QueryBuilderWhere = lead.tags
            ? {
                tags: { $containsAny: lead.tags }
              }
            : {}
          // https://nuxt.com/docs/guide/concepts/auto-imports#using-vue-and-nuxt-composables
          // It seems utils won't work here because context disappears on next tick after the first await.
          // And it doesn't matter if you use async/await or Promise.then().
          Promise.all([
            queryContent('/resume/contacts').findOne(),
            queryContent('/resume/languages').findOne(),
            queryContent<TaggedParsedContent>('/resume/skills')
              .where(filterObject)
              .find(),
            queryContent<TimeNote>('/resume/work')
              .sort({ 'daterange.end': -1 })
              .find(),
            $fetch('/api/projects/by-tags', {
              query: { tags: (lead.projects?.tags ?? []).join(',') }
            }),
            queryContent<TimeNote>('/resume/certificates')
              .sort({ 'daterange.end': -1 })
              .find(),
            queryContent<TimeNote>('/resume/education')
              .sort({ 'daterange.end': -1 })
              .find()
          ])
            .then(
              ([
                contacts,
                languages,
                skills,
                work,
                projects,
                certificates,
                education
              ]) => {
                resolve({
                  lead,
                  contacts,
                  languages,
                  skills,
                  work,
                  projects,
                  certificates,
                  education
                })
              }
            )
            .catch(reject)
        })
        .catch(reject)
    })
  })
}
