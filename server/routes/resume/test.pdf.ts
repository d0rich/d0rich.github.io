import puppeteer from 'puppeteer'
import { parse } from 'node-html-parser'
import * as fs from 'fs'

export default defineEventHandler(async (event) => {
  const html = await $fetch<string>('/resume')
  const parsedHtml = parse(html)
  const head = parsedHtml.querySelector('head')
  if (!head) return
  const cssRels = head.querySelectorAll('link')
  for (let cssRel of cssRels) {
    const href = cssRel.getAttribute('href')
    if (!href?.endsWith('.css')) continue
    const style = fs.readFileSync('./dist' + href, { encoding: 'utf-8' })
    head.appendChild(parse(`<style>${style}</style>`))
  }

  const browser = await puppeteer.launch(({ headless: true }))
  const page = await browser.newPage()
  await page.setContent(parsedHtml.toString(), { waitUntil: 'domcontentloaded' })
  await page.emulateMediaType('print')
  await page.evaluate(() => {
    let html = document.querySelector('html')
    if (html) {
      html.className = 'light'
    }
 })
  const pdf = await page.pdf({
    //path: 'result.pdf',
    printBackground: true,
    format: 'A4',
  })
  await browser.close()
  return pdf
})