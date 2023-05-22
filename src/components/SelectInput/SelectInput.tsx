'use client'
import { useRouter } from 'next/navigation'
const [year, month] = new Date().toISOString().split('T')[0].split('-')
const months: { [key: number]: string[] } = {
  2023: [],
}
for (let index = 0; index < Number(month); index++) {
  const date = new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(
    new Date(Number(year), index)
  )
  months[Number(year)].push(date)
}
function SelectInput({ defaultValue }: { defaultValue: string }) {
  const router = useRouter()
  return (
    <div className="my-7">
      <label htmlFor="months">Mes</label>
      <select
        name="months"
        id="months"
        className="capitalize focus:outline-none border ml-2 w-32"
        onChange={(e) => router.push(`/mes/${e.target.value}`)}
        defaultValue={defaultValue}
      >
        {months[Number(year)].map((monthName, index) => (
          <option key={monthName} value={monthName} className="capitalize">
            {monthName}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SelectInput
