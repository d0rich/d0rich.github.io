import { createStorage } from 'unstorage'
import { IProjectsRepository } from "./IProjectsRepository"
import { D0xigenProjectMeta } from '../types'

const cache = createStorage()

export class ProjectsRepositoryCache implements IProjectsRepository {
  constructor(private readonly source: IProjectsRepository) {}

  async getProjects() {
    if (await cache.hasItem('projects')) {
      const storageValue = await cache.getItem('projects')
      if (!Array.isArray(storageValue)) {
        throw new Error('Storage value is not an array')
      }
      const projects = storageValue satisfies D0xigenProjectMeta[]
      return projects
    }
    const projects = await this.source.getProjects()
    await cache.setItem('projects', projects)
    return projects
  }
}
