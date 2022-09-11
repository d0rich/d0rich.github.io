import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";
import {ProgrammingLanguage} from "../gridsome-source-github-pls/types";

const octokit = new Octokit();

type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;


type RawRepositories = GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.repos.listForUser>
type RawRepository = ArrayElement<RawRepositories>

export type Repository = Omit<RawRepository, 'language'> & {
    releases?: Release[],
    language?: string | null | Partial<ProgrammingLanguage>
}
export type Repositories = Repository[]

export type Releases = GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.repos.listReleases >
export type Release = ArrayElement<Releases>

export type Organizations = GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.orgs.listForUser>
export type Organization = ArrayElement<Organizations>