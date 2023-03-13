import { savePdf } from "~~/server/utils/puppeteer"

export default defineEventHandler(async (event) => {
  const pdf = await savePdf('/resume')
  return pdf
})