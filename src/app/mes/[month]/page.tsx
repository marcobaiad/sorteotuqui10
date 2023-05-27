import { Tuqui10Element, SelectInput } from '@/components'
import { formatedMonth } from '@/utils/nameMonthToDateFormat'
import { getSundays } from '@/utils/getSundaysByMonth'
import { capitalizeWord } from '@/utils/capitalizeLetter'

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
  const lotteryDays = getSundays(params.month)
  const isLastLotteryDay = lotteryDays
    .map(({ isMajor }) => isMajor.toString())
    .lastIndexOf('false')

  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="text-lg md:text-2xl font-bold my-3 whitespace-nowrap text-green-800 text-center">
            Sorteo Tuqui 10 mes
            <span className="capitalize ml-1">
              {capitalizeWord(formatedMonth(params.month))}
            </span>
          </h1>
          <p>
            Enterate quienes fueron los ganadores del{' '}
            <b>
              sorteo del Tuqui 10 de{' '}
              {capitalizeWord(formatedMonth(params.month))} 2023
            </b>
            . Controlá los resultados con tu cartón y enterate si fuiste ganador
            de algún premio.
          </p>
          <section>
            <h3 className="my-4 font-bold text-lg">Usá nuestro buscador</h3>
            <p>
              Con nustro buscador podrás controlar los resultados de los meses
              anteriores.
            </p>
            <SelectInput defaultValue={params.month} />
          </section>
          <section className="flex flex-wrap justify-center">
            {lotteryDays.map((tuqui, index) => {
              const { isMajor, isToday, date } = tuqui

              return (
                <Tuqui10Element
                  key={`${date}-${index}`}
                  {...tuqui}
                  showError={!isMajor && !isToday}
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
