import { Tuqui10Element, SelectInput } from '@/components'
import { formatedMonth } from '@/utils/nameMonthToDateFormat'
import { getSundays } from '@/utils/getSundaysByMonth'

interface Props {
  params: { month: string }
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
              {formatedMonth(params.month)}
            </span>
          </h1>
          <SelectInput defaultValue={params.month} />
          <div>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleMonthPage
