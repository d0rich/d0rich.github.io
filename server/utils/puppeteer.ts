import { parse } from 'node-html-parser'
import puppeteer from 'puppeteer'
import * as fs from 'fs'

export async function fetchPageWithCss(path: string) {
  const html = await $fetch<string>(path)
  const parsedHtml = parse(html)
  const head = parsedHtml.querySelector('head')
  if (!head) throw new Error('<head> tag is not found')
  const cssRels = head.querySelectorAll('link')
  for (let cssRel of cssRels) {
    const href = cssRel.getAttribute('href')
    if (!href?.endsWith('.css')) continue
    const style = fs.readFileSync('./dist' + href, { encoding: 'utf-8' })
    head.appendChild(parse(`<style>${style}</style>`))
  }
  return parsedHtml.toString()
}

export async function savePdf(path: string) {
  const browser = await puppeteer.launch(({ headless: true }))
  const page = await browser.newPage()
  if (useRuntimeConfig().public.isDev) {
    // If in development mode
    await page.goto('http://localhost:3000' + path, { waitUntil: 'networkidle0' })
  } else {
    // If prerender
    await page.setContent(await fetchPageWithCss(path), { waitUntil: 'domcontentloaded' })
  }
  await page.emulateMediaType('print')
  await page.evaluate(() => {
    let html = document.querySelector('html')
    if (html) {
      html.className = 'light'
    }
 })
  const pdf = await page.pdf({
    printBackground: true,
    format: 'A4',
  })
  await browser.close()
  return pdf
}