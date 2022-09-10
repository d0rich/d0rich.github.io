"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const yaml_1 = require("yaml");
const plIconsMap = new Map();
// Details: https://devicon.dev/
function getIconLink(id) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${id}/${id}-original.svg`;
}
plIconsMap.set('TypeScript', getIconLink('typescript'));
plIconsMap.set('JavaScript', getIconLink('javascript'));
plIconsMap.set('Vue', getIconLink('vuejs'));
plIconsMap.set('Dart', getIconLink('dart'));
plIconsMap.set('HTML', getIconLink('html5'));
plIconsMap.set('CSS', getIconLink('css3'));
plIconsMap.set('Python', getIconLink('python'));
plIconsMap.set('C#', getIconLink('csharp'));
module.exports = function (api) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: languagesManifest } = yield axios_1.default.get('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml');
        const languages = (0, yaml_1.parse)(languagesManifest);
        api.loadSource(({ getCollection, addCollection, store }) => __awaiter(this, void 0, void 0, function* () {
            const plsCollection = addCollection('ProgrammingLanguage');
            for (const langName in languages) {
                const newNode = Object.assign(Object.assign({}, languages[langName]), { name: langName, id: langName, icon: plIconsMap.get(langName) });
                plsCollection.addNode(newNode);
            }
        }));
    });
};
