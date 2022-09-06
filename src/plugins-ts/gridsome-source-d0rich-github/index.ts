// @ts-ignore
import PluginAPI from "PluginAPI"
import { Octokit, App } from "octokit";

module.exports = async function (api: PluginAPI) {
    const octokit = new Octokit({ auth: process.env.GH_TOKEN });

    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
}