import { createStorage } from 'unstorage'
import { IProjectsRepository } from "./IProjectsRepository"

const cache = createStorage()

export class ProjectsRepositoryCache implements IProjectsRepository {
  constructor(private readonly source: IProjectsRepository) {}

  async getProjects() {
    if (await cache.hasItem('projects')) {
      return await cache.getItemRaw('projects')
    }
    const projects = await this.source.getProjects()
    await cache.setItem('projects', projects)
    return projects
  }
}
