import { ProjectsRepository } from '~/server/utils/repositories/projects'

export default defineEventHandler((event) => {
  const tags = (getQuery(event).tags as string) ?? ''
  return ProjectsRepository.getProjectsByTags(...tags.split(','))
})
