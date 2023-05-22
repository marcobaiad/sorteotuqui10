import { allMonths } from './monthsAvailables'

const currentDate = new Date()

export const formatedMonth = (monthName: string) => {
  return new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(
    new Date(currentDate.getFullYear(), allMonths.indexOf(monthName))
  )
}
