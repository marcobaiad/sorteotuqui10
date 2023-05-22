import { TuquiImage } from '@/types'
import { allMonths } from './monthsAvailables'

const currentDate = new Date()
export const getSundays = (selectedMonth: string) => {
  const [year] = currentDate.toISOString().split('T')[0].split('-')
  const lastDayOfCurrentMonth = new Date(
    Number(year),
    allMonths.indexOf(selectedMonth),
    0
  )
  const sundays = [] as TuquiImage[]
  for (let i = 1; i <= lastDayOfCurrentMonth.getDate(); i++) {
    const date = new Date(Number(year), allMonths.indexOf(selectedMonth), i)
    const formatedDate = new Intl.DateTimeFormat('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
      .format(date)
      .replaceAll('/', '-')
    const isMajor = new Date(date).getTime() > new Date().getTime()
    const isToday =
      currentDate.toISOString().split('T')[0] ===
      date.toISOString().split('T')[0]

    if (date.getDay() === 0)
      sundays.push({
        imgUrl: `https://www.cajapopular.gov.ar/uploads/tuqui/extractos/${formatedDate}.jpeg`,
        isMajor,
        isToday,
        date: formatedDate,
        time: currentDate.getHours(),
      })
  }
  return sundays
}
