// @ts-ignore
import PluginAPI from "PluginAPI"
import { Octokit, App } from "octokit";
import {Releases, Repository} from "./types";
import {getAllRepos, getOrganizations, getReleasesForRepo} from "./parse";

module.exports = async function (api: PluginAPI) {
    api.loadSource(async ({ getCollection, addCollection, store }: any) => {
        console.log('Parsing GitHub info...')
        console.time('gh_parsing')
        const repositoriesCollection = addCollection('Repository')
        const releasesCollection = addCollection('Release')
        const topicsCollection = addCollection('Topic')
        const orgsCollection = addCollection('Organizations')

        function addRepoToDatabase(repository: Repository, releases: Releases) {
            for (const release of releases){
                if (!releasesCollection.getNodeById(release.id))
                    releasesCollection.addNode(release)
            }
            repository.releases = releases.map(r => store.createReference('Release', r.id))
            repository.topics = repository.topics || []
            for (const topic of repository.topics) {
                if (topicsCollection.getNodeById(topic))
                    topicsCollection.addNode({ id: topic, title: topic })
            }
            repository.topics = repository.topics.map(t => store.createReference('Topic', t))
            if (!repositoriesCollection.getNodeById(repository.id))
                repositoriesCollection.addNode(repository)
        }

        const repos = await getAllRepos()
        for (const repository of repos) {
            const releases = await getReleasesForRepo(repository)
            addRepoToDatabase(repository,releases)
        }
        const orgs = await getOrganizations()
        for (const org of orgs){
            orgsCollection.addNode(org)
        }
        console.timeEnd('gh_parsing')
        console.log('GitHub info parsed')
    })
}