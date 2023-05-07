export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  const lines: string[] = []
  lines.push('User-agent: *')
  lines.push('Disallow: ')
  lines.push('')
  lines.push('Sitemap: https://d0rich.me/sitemap.xml')
  return lines.join('\n')
})
