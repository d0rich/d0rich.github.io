import PDFGenerator from 'pdfkit'

export default defineEventHandler((event) => {
  const doc = new PDFGenerator()
  doc.pipe(event.node.res)
  doc.text('Some awesome example text')
  doc.end()
  setResponseStatus(200)
})