// @ts-ignore
import PluginAPI from "PluginAPI";
import {getAllPublicAgiles, getAllPublicProjects} from './parse'

module.exports = async function (api: PluginAPI) {
    const projects = await getAllPublicProjects()
    const agiles = await getAllPublicAgiles()
}