import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'
import { getBlogPostsFilterObject } from '~~/utils/blog'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const blogDocs = await serverQueryContent(event, '/blog')
    .where(getBlogPostsFilterObject())
    .find()
  const resumeDocs = await serverQueryContent(event, '/resume/leads')
    .where(getBlogPostsFilterObject())
    .find()
  const sitemap = new SitemapStream({
    hostname: 'https://d0rich.me'
  })
  sitemap.write({
    url: '/',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projects',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/blog',
    changefreq: 'monthly'
  })
  for (const doc of blogDocs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  for (const doc of resumeDocs) {
    sitemap.write({
      url: doc._path?.replace('/resume/leads', '/resume'),
      changefreq: 'monthly'
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
