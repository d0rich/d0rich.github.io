import {Agile, Project} from "youtrack-rest-client";

export type CustomAgile = Agile & {
    agileLink: string
}

export type CustomProject = Project & {
    projectLink: string
    agiles: CustomAgile[]
}