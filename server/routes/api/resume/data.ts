import { TimeNote } from "~~/components/resume/TimeNote.vue"
import { serverQueryContent } from "#content/server"

export default defineEventHandler(async (event) => {
  const resumeType = getQuery(event).resumeType as string
  const result =  {
    lead: await serverQueryContent(event, 'resume', 'leads', resumeType).findOne(),
    contacts: await serverQueryContent(event, '/resume/contacts').findOne(),
    skills: await serverQueryContent(event, '/resume/skills').find(),
    education: await serverQueryContent<TimeNote>(event, '/resume/education')
      .sort({ 'daterange.end': -1 })
      .find(),
    work: await serverQueryContent<TimeNote>(event, '/resume/work')
      .sort({ 'daterange.end': -1 })
      .find()
  }
  return result
})