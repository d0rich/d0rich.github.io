import { D0xigenProjectMeta } from "../types";

export interface IProjectsRepository {
  getProjects(): Promise<D0xigenProjectMeta[]>
}
