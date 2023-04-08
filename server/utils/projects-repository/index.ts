import { IProjectsRepository } from "./IProjectsRepository";
import { ProjectsRepositoryCache } from "./ProjectsRepositoryCache";
import { ProjectsRepositorySource } from "./ProjectsRepositorySource";

export const ProjectsRepository: IProjectsRepository = new ProjectsRepositoryCache(new ProjectsRepositorySource())
