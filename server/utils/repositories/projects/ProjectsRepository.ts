import { D0xigenProjectMeta } from '../../types'
import { GithubRepository } from '../github'

export class ProjectsRepository {
  async getProjects() {
    const pages = await GithubRepository.getMyGithubReposPagesMeta()
    const d0xigenProjectsPromises = pages.map(async (pagesProject) => {
      try {
        return await $fetch<D0xigenProjectMeta>(
          pagesProject.html_url + '/_d0rich/meta.json'
        )
      } catch (e) {}
      return
    })
    const d0xigenProjectsWithEmpty = await Promise.all(d0xigenProjectsPromises)
    return d0xigenProjectsWithEmpty.filter((project) => !!project) as D0xigenProjectMeta[]
  }
}
