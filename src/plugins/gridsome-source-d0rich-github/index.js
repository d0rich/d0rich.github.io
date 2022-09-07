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
const parse_1 = require("./parse");
module.exports = function (api) {
    return __awaiter(this, void 0, void 0, function* () {
        api.loadSource(({ getCollection, addCollection, store }) => __awaiter(this, void 0, void 0, function* () {
            console.log('Parsing GitHub info...');
            console.time('gh_parsing');
            const repositoriesCollection = addCollection('Repository');
            const releasesCollection = addCollection('Release');
            const topicsCollection = addCollection('Topic');
            const orgsCollection = addCollection('Organizations');
            function addRepoToDatabase(repository, releases) {
                for (const release of releases) {
                    if (!releasesCollection.getNodeById(release.id))
                        releasesCollection.addNode(release);
                }
                repository.releases = releases.map(r => store.createReference('Release', r.id));
                if (repository.topics) {
                    for (const topic of repository.topics) {
                        if (!topicsCollection.getNodeById(topic))
                            topicsCollection.addNode({ id: topic, title: topic });
                    }
                    repository.topics = repository.topics.map(t => store.createReference('Topic', t));
                }
                if (!repositoriesCollection.getNodeById(repository.id))
                    repositoriesCollection.addNode(repository);
            }
            const repos = yield (0, parse_1.getAllRepos)();
            for (const repository of repos) {
                const releases = yield (0, parse_1.getReleasesForRepo)(repository);
                addRepoToDatabase(repository, releases);
            }
            const orgs = yield (0, parse_1.getOrganizations)();
            for (const org of orgs) {
                orgsCollection.addNode(org);
            }
            console.timeEnd('gh_parsing');
            console.log('GitHub info parsed');
        }));
    });
};
