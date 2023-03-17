import { savePdf } from "~~/server/utils/puppeteer"

export default defineEventHandler(async (_) => {
  const pdf = await savePdf("/resume")
  return pdf
})
