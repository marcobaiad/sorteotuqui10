'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function HeaderLinks({ label, href }: { label: string; href?: string }) {
  const path = usePathname()

  return (
    <li
      key={label}
      className={`capitalize whitespace-nowrap rounded-md py-1 px-2 ${
        href === path
          ? 'font-medium bg-green-800 shadow-md text-white'
          : 'shadow'
      }`}
    >
      <Link href={`${href || label}`}>{label}</Link>
    </li>
  )
}
export default HeaderLinks
