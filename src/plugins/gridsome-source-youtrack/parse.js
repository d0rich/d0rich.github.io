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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPublicAgiles = exports.getAllPublicProjects = void 0;
const youtrack_rest_client_1 = require("youtrack-rest-client");
const YT_BASE_URL = "https://d0rich.youtrack.cloud";
const config = {
    baseUrl: YT_BASE_URL,
    token: ''
};
const youtrack = new youtrack_rest_client_1.Youtrack(config);
function getAllPublicProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const projectsReduced = yield youtrack.projects.all({ $top: 100 });
        const projectsPromises = projectsReduced.map(pr => youtrack.projects.byId(pr.id || ''));
        const projects = yield Promise.all(projectsPromises);
        projects.forEach(pr => {
            pr.iconUrl = YT_BASE_URL + pr.iconUrl;
        });
        return projects;
    });
}
exports.getAllPublicProjects = getAllPublicProjects;
function getAllPublicAgiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const reducedAgiles = yield youtrack.agiles.all({ $top: 100 });
        const agilesPromises = reducedAgiles.map((agile) => __awaiter(this, void 0, void 0, function* () {
            const fullAgile = yield youtrack.agiles.byId(agile.id || '');
            return Object.assign(Object.assign({}, fullAgile), { agileLink: `${YT_BASE_URL}/agiles/${fullAgile.id}` });
        }));
        const agiles = yield Promise.all(agilesPromises);
        console.log(agiles);
        return agiles;
    });
}
exports.getAllPublicAgiles = getAllPublicAgiles;
