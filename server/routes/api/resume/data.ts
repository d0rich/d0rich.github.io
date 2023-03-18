import {
  ParsedContent,
  QueryBuilderWhere
} from '@nuxt/content/dist/runtime/types'
import { TimeNote } from '~~/components/resume/TimeNote.vue'
import { serverQueryContent } from '#content/server'

interface TaggedParsedContent extends ParsedContent {
  tags?: string[]
}

export type ResumeData = {
  lead: TaggedParsedContent
  contacts: ParsedContent
  skills: TaggedParsedContent[]
  education: TimeNote[]
  work: TimeNote[]
}

export default defineEventHandler(async (event) => {
  const resumeType = getQuery(event).resumeType as string
  const lead = await serverQueryContent<TaggedParsedContent>(
    event,
    'resume',
    'leads',
    resumeType
  ).findOne()
  const filterObject: QueryBuilderWhere = lead.tags
    ? {
        tags: { $containsAny: lead.tags }
      }
    : {}
  const contacts = await serverQueryContent(event, '/resume/contacts').findOne()
  const skills = await serverQueryContent<TaggedParsedContent>(
    event,
    '/resume/skills'
  )
    .where(filterObject)
    .find()
  const education = await serverQueryContent<TimeNote>(
    event,
    '/resume/education'
  )
    .sort({ 'daterange.end': -1 })
    .find()
  const work = await serverQueryContent<TimeNote>(event, '/resume/work')
    .sort({ 'daterange.end': -1 })
    .find()
  const result: ResumeData = { lead, contacts, skills, education, work }
  return result
})
