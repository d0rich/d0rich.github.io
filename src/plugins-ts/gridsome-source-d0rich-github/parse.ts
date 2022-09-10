import { Octokit, App } from "octokit"

import {Repositories, Organizations, Repository, Releases} from './types'

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
})

export async function getAllRepos(): Promise<Repositories> {
    const user = await octokit.rest.users.getAuthenticated()
    console.log('all public repos: ', user.data.public_repos)
    const REPOS_PER_PAGE = 100
    const repos: Repositories = []

    for (let i = 0; i * REPOS_PER_PAGE < user.data.public_repos; i ++) {
        const reposPage = await octokit.rest.repos.listForUser({
            username: user.data.login,
            type: 'all',
            per_page: REPOS_PER_PAGE,
            page: i + 1
        })
        repos.push(...reposPage.data)
    }

    return repos
}

export async function getReleasesForRepo(repository: Repository): Promise<Releases>{
    const releases = await octokit.rest.repos.listReleases({
        repo: repository.name,
        owner: repository.owner.login,
        per_page: 100
    })
    return releases.data
}

export async function getOrganizations(): Promise<Organizations> {
    const user = await octokit.rest.users.getAuthenticated()
    const orgs = await octokit.rest.orgs.listForUser({
        username: user.data.login,
        per_page: 100
    })
    return orgs.data
}