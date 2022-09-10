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
exports.getOrganizations = exports.getReleasesForRepo = exports.getAllRepos = void 0;
const octokit_1 = require("octokit");
const octokit = new octokit_1.Octokit({
    auth: process.env.GH_TOKEN
});
function getAllRepos() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield octokit.rest.users.getAuthenticated();
        console.log('all public repos: ', user.data.public_repos);
        const REPOS_PER_PAGE = 100;
        const repos = [];
        for (let i = 0; i * REPOS_PER_PAGE < user.data.public_repos; i++) {
            const reposPage = yield octokit.rest.repos.listForUser({
                username: user.data.login,
                type: 'all',
                per_page: REPOS_PER_PAGE,
                page: i + 1
            });
            repos.push(...reposPage.data);
        }
        return repos;
    });
}
exports.getAllRepos = getAllRepos;
function getReleasesForRepo(repository) {
    return __awaiter(this, void 0, void 0, function* () {
        const releases = yield octokit.rest.repos.listReleases({
            repo: repository.name,
            owner: repository.owner.login,
            per_page: 100
        });
        return releases.data;
    });
}
exports.getReleasesForRepo = getReleasesForRepo;
function getOrganizations() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield octokit.rest.users.getAuthenticated();
        const orgs = yield octokit.rest.orgs.listForUser({
            username: user.data.login,
            per_page: 100
        });
        return orgs.data;
    });
}
exports.getOrganizations = getOrganizations;
