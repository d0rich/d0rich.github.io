import { Octokit } from "octokit"
import {GithubRepositorySource} from "./GithubRepositorySource"

export const GithubRepository = new GithubRepositorySource(new Octokit({
  auth: process.env.GITHUB_TOKEN
}))
