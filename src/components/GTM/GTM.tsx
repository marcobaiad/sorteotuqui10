'use client'
import Script from 'next/script'

export default function GTM() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6NRRYQBKRB"
      />
      <Script id="google-tag-manager">
        {`
      window.dataLayer = window.dataLayer || []
      function gtag(){
        window.dataLayer.push(arguments)
      }
      gtag('js', new Date());

      gtag('config', 'G-6NRRYQBKRB')
    `}
      </Script>
    </>
  )
}
