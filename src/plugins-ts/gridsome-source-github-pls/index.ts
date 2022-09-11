import axios from "axios";
import { parse, stringify } from 'yaml'
// @ts-ignore
import PluginAPI from "PluginAPI";

const plIconsMap = new Map<string, string>()
// Details: https://devicon.dev/
function getIconLink(id: string){
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${id}/${id}-original.svg`
}
plIconsMap.set('TypeScript', getIconLink('typescript'))
plIconsMap.set('JavaScript', getIconLink('javascript'))
plIconsMap.set('Vue', getIconLink('vuejs'))
plIconsMap.set('Dart', getIconLink('dart'))
plIconsMap.set('HTML', getIconLink('html5'))
plIconsMap.set('CSS',  getIconLink('css3'))
plIconsMap.set('Python', getIconLink('python'))
plIconsMap.set('C#', getIconLink('csharp'))

module.exports = async function (api: PluginAPI) {
    const { data: languagesManifest} = await axios.get('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
    const languages = parse(languagesManifest)
    api.loadSource(async ({ getCollection, addCollection, store }: any) => {
        const plsCollection = addCollection('ProgrammingLanguage')
        for (const langName in languages) {
            const newNode = {
                ...languages[langName],
                name: langName,
                id: langName,
                icon: plIconsMap.get(langName)
            }
            plsCollection.addNode(newNode)
        }
    })
}