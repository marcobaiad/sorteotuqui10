import { NextResponse } from 'next/server'
// import { createWorker } from 'tesseract.js'

export async function GET() {
  // const worker = await createWorker({
  //   logger: (m) => console.log(m),
  // })
  // const imgReq = await fetch(
  //   'https://www.cajapopular.gov.ar/uploads/tuqui/extractos/28-05-2023.jpeg'
  // )
  // if (!imgReq.ok) return NextResponse.json({ message: 'Error' })
  // const blob = await imgReq.blob()
  // await worker.loadLanguage('eng')
  // await worker.initialize('eng')
  // const {
  //   data: { text },
  // } = await worker.recognize(blob)
  // console.log(text)
  // await worker.terminate()
  // Tesseract.recognize(blob, 'spa', {
  //   logger: ({ progress, status }) => console.log({ progress, status }),
  // }).then(({ data: { text } }) => {
  //   console.log({ text })

  //   // setRecognizedText(
  //   //   text
  //   //     .split(/\s+(?=\d)/)
  //   //     .map((textGroup) => textGroup.replaceAll(/\s.$/gi, ''))
  //   // )
  // })
  return NextResponse.json({ message: 'Success' })
}
