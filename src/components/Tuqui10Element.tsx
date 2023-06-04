'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import localImage from '../../public/descarga.jpg'
import { TuquiImage } from '@/types'
import OneSignalReact from 'react-onesignal'
// import OneSignal from 'react-native-onesignal'
// import TesseractComponent from './Tesseract/Tesseract'

interface Props extends TuquiImage {
  isLastLotteryDay: boolean
}

function Tuqui10Element(props: Props) {
  const { imgUrl, date, isToday, isLastLotteryDay } = props
  const [isOpen, setIsOpen] = useState<boolean>(isToday || isLastLotteryDay)
  const [showError, setShowError] = useState<boolean>(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const [subscribed, setSubscribed] = useState<boolean>()
  // const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
  // null
  // )
  const hasRaffle = new Date(date.split('-').reverse().join(' ')) < new Date()

  const isTime =
    new Date().getDay() === 0 &&
    new Date().getHours() > 20 &&
    new Date().getMinutes() > 49

  // const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    ;(async () => {
      const isSubscribed = await OneSignalReact.isPushNotificationsEnabled()
      setSubscribed(isSubscribed)
    })()
  }, [])

  return (
    <div className="font-semibold relative w-64 md:w-96">
      <h2
        className="text-sm mt-2 text-white font-bold p-2 rounded-t-sm bg-green-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sorteo día {date} (click para ver los ganadores)
      </h2>
      <div
        style={{
          aspectRatio: isOpen ? '1/1.6' : '',
        }}
        className="relative overflow-hidden w-64 md:w-96"
      >
        <Image
          crossOrigin="anonymous"
          ref={imageRef}
          src={
            (!isTime && isToday) || !hasRaffle || showError
              ? localImage
              : imgUrl
          }
          alt={`Sorteo Tuqui 10 día ${date}`}
          fill
          placeholder="blur"
          blurDataURL="../../public/descarga.jpg"
          onError={() => setShowError(true)}
          onLoad={(data) => {
            // fetch(data.currentTarget.src)
            //   .then((res) => res.blob())
            //   .then((blob) => {
            //     const reader = new FileReader()
            //     reader.onloadend = () => {
            //       const ctx = canvasRef.current?.getContext('2d')
            //       canvasRef.current!.width = 500
            //       canvasRef.current!.height = 600
            //       // cartones ganadores
            //       ctx!.drawImage(
            //         data.currentTarget,
            //         565,
            //         755,
            //         540,
            //         600,
            //         0,
            //         0,
            //         500,
            //         600
            //       )
            //       // // monto 1er puesto
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // números sorteados
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // resultado
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // monto seguro sale
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // bolillas seguro sale
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // ganador seguro sale
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // sorteo especial
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // // premios
            //       // ctx!.drawImage(data.currentTarget, 400,
            //       //   200,
            //       //   390,
            //       //   80,
            //       //   0,
            //       //   0,
            //       //   504,
            //       //   200);
            //       // hasRaffle && setCanvasElement(canvasRef.current)
            //     }
            //     reader.readAsDataURL(blob)
            //   })

            if (isToday)
              imageRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
          }}
          style={{
            filter:
              (!isTime && isToday && hasRaffle) || showError || !hasRaffle
                ? 'blur(8px)'
                : '0px',
            WebkitFilter:
              (!isTime && isToday && hasRaffle) || showError || !hasRaffle
                ? 'blur(8px)'
                : '0px',
            zIndex: 1,
          }}
        />

        <div
          className="z-10 absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          {showError && (
            <p>
              Al parecer este sorteo no se realizó, consultá directamente en la
              página oficial de la{' '}
              <span>
                <a
                  className="text-green-800 z-20"
                  href="https://www.cajapopular.gov.ar/sorteos_tuqui.php"
                  referrerPolicy="no-referrer"
                >
                  caja popular
                </a>
              </span>
            </p>
          )}
          {((!isTime && isToday && hasRaffle) || !hasRaffle) && (
            <p>
              Este sorteo aún no se realizó, subscribete para ser notificado/a
              cuando el sorteo se haya realizado.
            </p>
          )}
          {((!isTime && isToday && hasRaffle) || !hasRaffle || showError) && (
            <div className="onesignal-customlink-container">
              <button
                className="outline-none bg-green-800 text-white p-2 rounded-md block mt-5"
                disabled={subscribed}
                onClick={() => {
                  OneSignalReact.registerForPushNotifications()
                  OneSignalReact.setSubscription(true)
                  setSubscribed(true)
                }}
              >
                {subscribed ? 'Ya estas Subscripto/a' : 'Subscribirse'}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <canvas ref={canvasRef} style={{ display: 'none' }} /> */}
      {/* <TesseractComponent blob={canvasElement!} /> */}
    </div>
  )
}
export default Tuqui10Element
