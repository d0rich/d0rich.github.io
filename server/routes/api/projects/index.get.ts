import { ProjectsRepository } from '../../../utils/repositories/projects'

export default defineEventHandler(async (event) => {
  return ProjectsRepository.getProjects()
})
