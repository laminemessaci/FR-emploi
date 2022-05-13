import { PDFDocument } from 'pdf-lib'

const RNFS = require('react-native-fs')

/* eslint-disable no-await-in-loop */
const generatePDFFromImages = async images => {
  try {
    const pdfDoc = await PDFDocument.create()
    let i = 0
    let pdfWhitePages = []

    for (i = 0; i < images.length; i += 1) {
      const v = images[i]
      const imagePath = decodeURI(v.uri.replace('file://', ''))
      const imageData = await RNFS.readFile(imagePath, 'base64')

      const image = await pdfDoc.embedJpg(`data:image/jpeg;base64,${imageData}`)
      const { width, height } = v
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

      //if (i !== 2) // test white pages
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: pageSize.width,
        height: pageSize.height,
      })

      // Verify if page correctly drawed image in order to avoid white pdf pages
      const dataContents = page.node.normalizedEntries()

      if (dataContents?.Contents === undefined) {
        pdfWhitePages.push(true)
      } else {
        pdfWhitePages.push(false)
      }
    }

    const pdfBytes = await pdfDoc.saveAsBase64()
    const pdfPath = `${RNFS.TemporaryDirectoryPath}tmpInterop.pdf`

    await RNFS.writeFile(pdfPath, pdfBytes, 'base64')

    // const fileSize = await RNFetchBlob.fs.stat(pdfPath).then(data => {
    //   return data.size
    // })
    // if (fileSize === 0) return 'emptyFile'

    if (!!pdfWhitePages?.find(pageWhite => pageWhite === true))
      return 'whitePage'
    return pdfPath
  } catch (e) {
    if (__DEV__) {
      console.log('error', e)
    }
  }
}

export default generatePDFFromImages
