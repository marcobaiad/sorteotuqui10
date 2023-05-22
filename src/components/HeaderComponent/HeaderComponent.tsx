import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const formatMonth = (month: Date) =>
  new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(month)

function HeaderComponent() {
  return (
    <nav className=" w-full flex flex-wrap justify-center md:justify-between items-center">
      <Link className="mt-5 md:my-0 text-green-800 font-extrabold" href="/">
        Sorteo Tuqui 10
      </Link>
      <div className="ml-auto">
        <ul className="flex gap-x-2 py-5 w-min ml-auto">
          {[
            formatMonth(
              new Date(new Date().setMonth(Number(currentMonth - 1)))
            ),
            formatMonth(currentDate),
          ].map((month) => (
            <HeaderLinks key={month} href={`/mes/${month}`} label={month} />
          ))}
          <HeaderLinks href="/mes" label="Ver todos" />
        </ul>
      </div>
    </nav>
  )
}
export default HeaderComponent
