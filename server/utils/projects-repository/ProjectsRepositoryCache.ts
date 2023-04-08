import { createStorage } from 'unstorage'
import { D0xigenProjectMeta } from '../types'
import { IProjectsRepository } from './IProjectsRepository'

const cache = createStorage()

export class ProjectsRepositoryCache implements IProjectsRepository {
  constructor(private readonly source: IProjectsRepository) {}

  async getProjects() {
    if (await cache.hasItem('projects')) {
      const storageValue = await cache.getItem('projects')
      if (!Array.isArray(storageValue)) {
        throw new TypeError('Storage value is not an array')
      }
      const projects = storageValue satisfies D0xigenProjectMeta[]
      return projects
    }
    const projects = await this.source.getProjects()
    await cache.setItem('projects', projects)
    return projects
  }
}
