// import puppeteer from 'puppeteer'

export default defineEventHandler(async (event) => {
  // TODO: Try to implement when https://github.com/unjs/nitro/issues/1044 is resolved
//   const headers = event.node.req.headers
//   const host = headers.host
//   console.log(headers)
//   console.log(host)

//   const browser = await puppeteer.launch(({ headless: true }))
//   const page = await browser.newPage()
//   const resumeUrl = `http://${host}/resume`
//   await page.goto(resumeUrl, { waitUntil: 'networkidle0' })
//   await page.emulateMediaType('print')
//   await page.evaluate(() => {
//     let html = document.querySelector('html')
//     if (html) {
//       html.className = 'light'
//     }
//  })
//   const pdf = await page.pdf({
//     //path: 'result.pdf',
//     printBackground: true,
//     format: 'A4',
//   })
//   await browser.close()
//   return pdf
})