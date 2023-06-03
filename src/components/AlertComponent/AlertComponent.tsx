import clsx from 'clsx'
import Link from 'next/link'
import { AlertColors } from '@/types'

interface AlertTypesInterface {
  warning: string
  error: string
  success: string
}

const ALERT_TYPES: AlertTypesInterface = {
  warning: 'yellow-500',
  error: '',
  success: 'green-800',
}

const ALERT_COLORS: Record<keyof typeof ALERT_TYPES, AlertColors> = {
  warning: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    border: 'border-yellow-500',
  },
  success: {
    bg: 'bg-green-800',
    text: 'text-green-800',
    border: 'border-green-800',
  },
  error: {
    bg: 'bg-red-800',
    text: 'text-red-800',
    border: 'border-red-800',
  },
}

function AlertComponent({
  lastMonth,
  type,
}: {
  lastMonth: string
  type?: keyof typeof ALERT_TYPES
}) {
  const { bg, border, text } = ALERT_COLORS[type || 'success']

  return (
    <div
      role="alertdialog"
      className={clsx(
        'border-2 shadow-lg rounded-md text-center w-fit p-8',
        border
      )}
    >
      <h3 className={clsx(`text-xl font-bold`, text)}>
        Al parecer el sorteo aún no se realizó
      </h3>
      <p className="mb-10">Podes revisar los sorteos del mes anterior</p>

      <Link
        href={`/mes/${lastMonth}`}
        className={clsx(
          `capitalize text-white px-4 py-2 rounded-md font-bold`,
          bg
        )}
      >
        Ver {lastMonth}
      </Link>
    </div>
  )
}
export default AlertComponent
