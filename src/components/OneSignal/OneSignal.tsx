'use client'
import OneSignal from 'react-onesignal'

export default async function runOneSignal() {
  await OneSignal.init({
    appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
    safari_web_id: process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI!,
    allowLocalhostAsSecureOrigin: true,
    // notifyButton: {
    //   enable: true,
    // },
    promptOptions: {
      force: true,
      enable: true,
    },
  })
}
