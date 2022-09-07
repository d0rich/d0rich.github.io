import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;


export interface Repositories extends GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.repos.listForUser>{}
export interface Repository extends ArrayElement<Repositories>{
    releases?: Releases;
}
export interface Releases extends GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.repos.listReleases >{}
export interface Release extends ArrayElement<Releases>{}
export interface Organizations extends GetResponseDataTypeFromEndpointMethod< typeof octokit.rest.orgs.listForUser>{}
export interface Organization extends ArrayElement<Organizations>{}