export const Router = {
    empty: './#',
    home: '/',
    blog(page = 1){return `/blog/${page > 1 ? page: ''}`},
    tag(id, page = 1){return `/blog/tags/${id}/${page > 1 ? page: ''}`},
    blogPost(title){ return `/blog/posts/${title}/` },
    portfolio(page = 1){ return `/portfolio/${page > 1 ? page: ''}` },
    project(title){ return `/portfolio/projects/${title}/` },
    projectTag(id, page){ return `/portfolio/tags/${id}/${page > 1 ? page: ''}` },
    projectTech(id, page){ return `/portfolio/technologies/${id}/${page > 1 ? page: ''}` },
}