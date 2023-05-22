import { monthsAvailables } from '@/utils/monthsAvailables'
import Link from 'next/link'

function MonthPage() {
  return (
    <>
      <h1 className="text-lg md:text-2xl font-bold my-3 whitespace-nowrap text-green-800 text-center">
        Sorteos del Tuqui 10 Tucumán
      </h1>
      <p className="text-center">
        Encontrá todos los sorteos del Tuqui 10 acá en{' '}
        <span className="text-green-700">sorteotuqui10.com</span>
      </p>
      <section className="flex justify-center mt-7">
        <div className="w-60 md:w-96">
          {Object.entries(monthsAvailables).map(
            ([year, months], monthsAvailablesIndex) => {
              return (
                <div key={`${year}-${monthsAvailablesIndex}`}>
                  <h2 className="font-bold bg-green-800 text-white px-2 py-1 rounded-sm mb-3">
                    Año {year}
                  </h2>
                  <ul>
                    {months.map((month, monthIndex) => (
                      <li
                        key={`${year}-${month}-${monthIndex}`}
                        className="capitalize rounded px-2 hover:font-bold hover:bg-green-700 hover:py-1 hover:text-white"
                      >
                        <Link href={`/mes/${month}`} className="w-full block">
                          Sorteo Tuqui 10 {month}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
          )}
        </div>
      </section>
    </>
  )
}
export default MonthPage
