import {Agile} from "youtrack-rest-client";

export type CustomAgile = Agile & {
    agileLink: string
}