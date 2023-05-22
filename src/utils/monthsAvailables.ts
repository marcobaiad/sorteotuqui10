const initialMonth = 2023
const [year, month] = new Date().toISOString().split('T')[0].split('-')

export const allMonths = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export const monthsAvailables: { [key: number]: string[] } = {
  [initialMonth]: [],
}

for (let index = 0; index < Number(month); index++) {
  const date = new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(
    new Date(Number(year), index)
  )
  monthsAvailables[Number(year)].push(date)
}
