export const Router = {
    empty: './#',
    home: '/',
    blog(page = 1){return `/blog/${page > 1 ? page: ''}`},
    tag(id, page = 1){return `/blog/tags/${id}/${page > 1 ? page: ''}`},
    blogPost(title){ return `/blog/posts/${title}/` },
    portfolio: () => '/portfolio',
    projects(page = 1){ return `/portfolio/projects/${page > 1 ? page: ''}` },
    project(title){ return `/portfolio/projects/${title}/` },
    projectTag(id, page){ return `/portfolio/projects/tags/${id}/${page > 1 ? page: ''}` },
    projectTech(id, page){ return `/portfolio/projects/technologies/${id}/${page > 1 ? page: ''}` },
    allResume() {return '/resume/'},
    resume(title) { return `/resume/${title}/` },
    lifeline: () => '/lifeline'
}
