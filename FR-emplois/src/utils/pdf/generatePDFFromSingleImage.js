import { PDFDocument } from 'pdf-lib'

const RNFS = require('react-native-fs')

/* eslint-disable no-await-in-loop */
const generatePDFFromSingleImage = async (imageToSend, index) => {
  const pdfDoc = await PDFDocument.create()
  let i = 0

  const imagePath = decodeURI(imageToSend.uri.replace('file://', ''))
  const imageData = await RNFS.readFile(imagePath, 'base64')

  const image = await pdfDoc.embedJpg(imageData)
  const { width, height } = imageToSend
  // 595 * 842
  const mediaBoxSize = {
    width: width < height ? 595 : 842,
    height: width > height ? 595 : 842,
  }

  const pageSize = { width, height }
  let factor = 0.99
  while (
    pageSize.width > mediaBoxSize.width ||
    pageSize.height > mediaBoxSize.height
  ) {
    pageSize.width = width * factor
    pageSize.height = height * factor
    factor -= 0.01
  }

  const page = pdfDoc.addPage([pageSize.width, pageSize.height])

  page.drawImage(image, {
    x: 0,
    y: 0,
    width: pageSize.width,
    height: pageSize.height,
  })

  const pdfBytes = await pdfDoc.saveAsBase64()
  const pdfPath = await `${RNFS.TemporaryDirectoryPath}tmpInterop-${index}.pdf`

  // Verify if page correctly drawed image in order to avoid white pdf pages
  const dataContents = page.node.normalizedEntries()
  if (dataContents?.Contents === undefined) return 'whitePage'

  await RNFS.writeFile(pdfPath, pdfBytes, 'base64')
  return pdfPath
}

export default generatePDFFromSingleImage
