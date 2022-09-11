// @ts-ignore
import PluginAPI from "PluginAPI";
import {getAllPublicAgiles, getAllPublicProjects} from './parse'

module.exports = async function (api: PluginAPI) {
    const projects = await getAllPublicProjects()
    const agiles = await getAllPublicAgiles()
    api.loadSource(async ({ getCollection, addCollection, store }: any) => {
        const projectsCollection = addCollection('YoutrackProject')
        const agilesCollection = addCollection('YoutrackAgile')
        for (const project of projects) {
            projectsCollection.addNode(project)
        }
        for (const agile of agiles) {
            agilesCollection.addNode({
                ...agile,
                projects: agile.projects?.map(pr => store.createReference('YoutrackProject', pr.id))
            })
        }
    })
}