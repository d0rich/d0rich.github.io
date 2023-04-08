import { Octokit } from 'octokit'
import { D0xigenProjectMeta } from '../types'
import { IProjectsRepository } from './IProjectsRepository'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export class ProjectsRepositorySource implements IProjectsRepository {
  async getProjects() {
    const reposWithPages = await this.getGithubReposWithPages()
    const d0xigenProjects: D0xigenProjectMeta[] = []
    for (const repo of reposWithPages) {
      const pagesInfo = await octokit.rest.repos.getPages({
        owner: repo.owner.login,
        repo: repo.name
      })
      try {
        const metaFile = await $fetch<D0xigenProjectMeta>(
          pagesInfo.data.html_url + '/_d0rich/meta.json'
        )
        d0xigenProjects.push(metaFile)
      } catch (e) {}
    }
    return d0xigenProjects
  }

  private async getGithubReposWithPages() {
    const repos = await octokit.rest.repos.listForUser({
      username: 'd0rich',
      type: 'owner',
      per_page: 100
    })
    const reposWithPages = repos.data.filter((repo) => repo.has_pages)
    return reposWithPages
  }
}
