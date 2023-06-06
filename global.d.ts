/* eslint-disable no-unused-vars */
export {}
declare global {
  interface Window {
    OneSignal: (() => void)[]
    dataLayer: Record<string, any>[]
  }
}
