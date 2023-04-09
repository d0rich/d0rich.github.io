import type { Octokit } from 'octokit'
import { createStorage } from 'unstorage'

const cache = createStorage()

export class GithubRepositorySource {
  constructor(public readonly octokit: Octokit) {
    octokit.hook.after('request', async (response, options) => {
      await cache.setItem(options.url, response)
    })
    octokit.hook.wrap('request', async (request, options) => {
      if (await cache.hasItem(options.url)) {
        console.log('Cache hit')
        const storageValue = await cache.getItem(options.url)
        if (!storageValue) {
          throw new Error('Storage value does not exist')
        }
        if (typeof storageValue !== 'object') {
          throw new TypeError('Storage value is not an object')
        }
        return storageValue as ReturnType<typeof request>
      }
      return request(options)
    })
  }

  async getMyGithubRepos() {
    return await this.octokit.rest.repos.listForUser({
      username: 'd0rich',
      type: 'owner',
      per_page: 100
    })
  }

  async getMyGithubReposWithPages() {
    const repos = await this.getMyGithubRepos()
    return repos.data.filter((repo) => repo.has_pages)
  }

  async getMyGithubReposPagesMeta() {
    const reposWithPages = await this.getMyGithubReposWithPages()
    const pagesPromises = reposWithPages.map(async (repo) => {
      const response = await this.octokit.rest.repos.getPages({
        owner: repo.owner.login,
        repo: repo.name
      })
      return response.data
    })
    return Promise.all(pagesPromises)
  }
}
