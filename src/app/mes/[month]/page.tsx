import { Tuqui10Element, SelectInput } from '@/components'
import { formatedMonth } from '@/utils/nameMonthToDateFormat'
import { getSundays } from '@/utils/getSundaysByMonth'
import { capitalizeWord } from '@/utils/capitalizeLetter'
import AlertComponent from '@/components/AlertComponent/AlertComponent'
import { allMonths } from '@/utils/monthsAvailables'

interface Props {
  params: { month: string }
}

export async function generateMetadata({ params }: Props) {
  const { month } = params
  return {
    title: `Sorteo del Tuqui 10 Tucumán resultados - ${month} 2023`,
    description: `Resultados Tuqui 10, controlá el último sorteo de ${month} 2023. Mirá de cuanto fué el premio mayor y quien ganó. Entrá ahora`,
  }
}

const SingleMonthPage = ({ params }: Props) => {
  const { month } = params
  const lotteryDays = getSundays(month)
  const isLastLotteryDay = lotteryDays
    .map(({ isMajor }) => isMajor.toString())
    .lastIndexOf('false')

  const { date, isToday } = lotteryDays[0]
  const hasRaffle = new Date(date.split('-').reverse().join(' ')) > new Date()
  const isTime = new Date().getHours() > 20 && new Date().getMinutes() > 35

  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="text-lg md:text-2xl font-bold my-3 whitespace-nowrap text-green-800 text-center">
            Sorteo Tuqui 10 mes
            <span className="capitalize ml-1">
              {capitalizeWord(formatedMonth(month))}
            </span>
          </h1>
          <p>
            Enterate quienes fueron los ganadores del{' '}
            <b>
              sorteo del Tuqui 10 de {capitalizeWord(formatedMonth(month))} 2023
            </b>
            . Controlá los resultados con tu cartón y enterate si fuiste ganador
            de algún premio.
          </p>
          <section>
            <h3 className="my-4 font-bold text-lg">Usá nuestro buscador</h3>
            <p>
              Con nuestro buscador podrás controlar los resultados de los meses
              anteriores.
            </p>
            <SelectInput defaultValue={month} />
            {(hasRaffle || (isToday && !isTime)) && (
              <div className="flex justify-center my-10">
                <AlertComponent
                  lastMonth={allMonths[allMonths.indexOf(month) - 1]}
                  type="warning"
                />
              </div>
            )}
          </section>
          <section className="flex flex-wrap justify-center">
            {lotteryDays.map((tuqui, index) => {
              const { date } = tuqui
              return (
                <Tuqui10Element
                  key={`${date}-${index}`}
                  {...tuqui}
                  isLastLotteryDay={isLastLotteryDay === index}
                />
              )
            })}
          </section>
          <section className="mt-16">
            <p>
              Recordá que la info proporcionada es solo a de caracter
              informativo. La misma no releva de la obligación de consultar el
              extracto oficial a fines del pago de los premios.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
export default SingleMonthPage
