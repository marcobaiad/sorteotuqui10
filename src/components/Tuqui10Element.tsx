'use client'
import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'
import localImage from '../../public/descarga.jpg'
import { TuquiImage } from '@/types'

interface Props extends TuquiImage {
  showError: boolean
  isLastLotteryDay: boolean
}

function Tuqui10Element(props: Props) {
  const { imgUrl, date, showError, isMajor, isToday, isLastLotteryDay } = props
  const [alterImage, setAlterImage] = useState<StaticImageData | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(isToday || isLastLotteryDay)
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div className="font-semibold relative w-60 md:w-96">
      <h2
        className="text-sm mt-2 text-white font-bold p-2 rounded-t-sm bg-green-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sorteo día {date} (click para ver los ganadores)
      </h2>
      <div
        style={{
          aspectRatio: isOpen ? '1/1.5' : '',
        }}
        className="relative overflow-hidden w-60 md:w-96"
      >
        {!showError || (!isMajor && !alterImage) ? (
          <Image
            ref={imageRef}
            src={alterImage || imgUrl}
            alt={`Sorteo Tuqui 10 día ${date}`}
            fill
            placeholder="blur"
            blurDataURL="../../public/descarga.jpg"
            onError={() => setAlterImage(localImage)}
            onLoad={() => {
              if (isToday)
                imageRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                })
            }}
            style={{
              filter: alterImage ? 'blur(8px)' : '0px',
              WebkitFilter: alterImage ? 'blur(8px)' : '0px',
              zIndex: 1,
            }}
          />
        ) : (
          <div
            className="z-10 absolute"
            style={{
              top: '20%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <p>
              Al parecer este sorteo no se realizó, consultá directamente en la
              página oficial de la{' '}
            </p>{' '}
            <a
              className="text-green-800 z-20"
              href="https://www.cajapopular.gov.ar/sorteos_tuqui.php"
              referrerPolicy="no-referrer"
            >
              cajapopular
            </a>
          </div>
        )}
        {/* {showError && alterImage &&} */}
        {isMajor && alterImage && (
          <p
            className="z-10 absolute text-center"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            Este sorteo aún no se realizó, subscribete para ser notificado/a
            cuando el sorteo se haya realizado.
          </p>
        )}
      </div>
    </div>
  )
}
export default Tuqui10Element
