// @ts-ignore
import PluginAPI from "PluginAPI";
import {getAllPublicAgiles, getAllPublicProjects} from './parse'
import {ReducedProjectImpl} from "youtrack-rest-client";

module.exports = async function (api: PluginAPI) {
    const projects = await getAllPublicProjects()
    const agiles = await getAllPublicAgiles()
    api.loadSource(async ({ getCollection, addCollection, store }: any) => {
        const projectsCollection = addCollection('YoutrackProject')
        const agilesCollection = addCollection('YoutrackAgile')
        projectsCollection.addReference('agiles', 'YoutrackAgile')
        agilesCollection.addReference('projects', 'YoutrackProject')
        for (const project of projects) {
            projectsCollection.addNode({
                ...project,
                agiles: agiles
                    .filter(agile => agile.projects?.some(pr => (pr.id === project.id)))
                    .map(agile => agile.id)
            })
        }
        for (const agile of agiles) {
            agilesCollection.addNode({
                ...agile,
                projects: agile.projects?.map(pr => pr.id)
            })
        }
    })
}