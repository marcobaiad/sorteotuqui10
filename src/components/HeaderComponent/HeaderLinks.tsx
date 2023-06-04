'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { OneSignalScript } from '@/components'
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const formatMonth = (month: Date) =>
  new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(month)

function HeaderLinks() {
  const path = usePathname()
  useEffect(() => {
    OneSignalScript()
  })
  return (
    <>
      {[
        formatMonth(new Date(new Date().setMonth(Number(currentMonth - 1)))),
        formatMonth(currentDate),
      ].map((month) => {
        const href = `/mes/${month}`
        return (
          <li key={month}>
            <Link
              className={`capitalize whitespace-nowrap rounded-md py-1 px-2 block ${
                href === path
                  ? 'font-medium bg-green-800 shadow-md text-white'
                  : 'shadow'
              }`}
              href={href}
            >
              {month}
            </Link>
          </li>
        )
        // <HeaderLinks key={month} href={`/mes/${month}`} label={month} />
      })}
    </>
  )
}
export default HeaderLinks
