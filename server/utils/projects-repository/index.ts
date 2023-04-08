import { IProjectsRepository } from "./IProjectsRepository";
import { ProjectsRepositoryCache } from "./ProjectsRepositoryCache";
import { ProjectsRepositorySource } from "./ProjectsRepositorySource";

export class ProjectsRepository implements IProjectsRepository {
  private readonly source: IProjectsRepository

  constructor() {
    this.source = new ProjectsRepositoryCache(new ProjectsRepositorySource())
  }

  async getProjects() {
    return this.source.getProjects()
  }
}
