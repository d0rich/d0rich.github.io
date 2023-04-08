import { ProjectsRepository } from "../../../utils/projects-repository"

export default defineEventHandler(async (event) => {
  return ProjectsRepository.getProjects()
})
