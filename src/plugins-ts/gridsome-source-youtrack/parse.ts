import {Youtrack} from "youtrack-rest-client";
import {CustomAgile, CustomProject} from "./types";
// @ts-ignore
import { marked } from 'marked';

const YT_BASE_URL = "https://d0rich.youtrack.cloud"

const config = {
    baseUrl: YT_BASE_URL,
    token: ''
};
const youtrack = new Youtrack(config)

export async function getAllPublicProjects(){
    const projectsReduced = await youtrack.projects.all({ $top: 100 })
    const projectsPromises = projectsReduced.map(async (pr): Promise<Partial<CustomProject>> => {
        const fullProject = await youtrack.projects.byId(pr.id || '')
        return {
            ...fullProject,
            iconUrl: YT_BASE_URL + fullProject.iconUrl,
            description: marked.parse(fullProject.description || ''),
            projectLink: `${YT_BASE_URL}/projects/${fullProject.id}`
        }
    })
    const projects = await Promise.all(projectsPromises)
    return projects
}

export async function getAllPublicAgiles(): Promise<CustomAgile[]>{
    const reducedAgiles = await youtrack.agiles.all({ $top: 100 })
    const agilesPromises = reducedAgiles.map(async (agile): Promise<CustomAgile> => {
        const fullAgile = await youtrack.agiles.byId(agile.id || '')
        return {
            ...fullAgile,
            agileLink: `${YT_BASE_URL}/agiles/${fullAgile.id}`
        }
    })
    const agiles = await Promise.all(agilesPromises)
    return agiles
}