export const Router = {
    empty: './#',
    home: '/',
    blog(page = 1){return `/blog/${page > 1 ? page: ''}`},
    tag(name, page = 1){return `/tag/${name}/${page > 1 ? page: ''}`},
    blogPost(title){ return `/blog/${title}/` }
}