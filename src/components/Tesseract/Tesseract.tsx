import { useEffect, useState } from 'react'
import Tesseract from 'tesseract.js'
const TesseractComponent = ({ blob }: { blob: HTMLCanvasElement }) => {
  const [recognizedText, setRecognizedText] = useState<string[]>([])

  useEffect(() => {
    if (blob) {
      Tesseract.recognize(blob, 'spa', {
        logger: ({ progress, status }) => console.log({ progress, status }),
      }).then(({ data: { text } }) => {
        setRecognizedText(
          text
            .split(/\s+(?=\d)/)
            .map((textGroup) => textGroup.replaceAll(/\s.$/gi, ''))
        )
      })
    }
  }, [blob])

  return (
    <>
      {/* <canvas ref={canvasRef} /> */}
      <p>{recognizedText.join('\n\r')}</p>
    </>
  )
}
export default TesseractComponent
