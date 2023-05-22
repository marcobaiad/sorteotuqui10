import { allMonths } from '@/utils/monthsAvailables'
import Link from 'next/link'

const currentDate = new Date()
const month = allMonths[currentDate.getMonth()]
export default async function Home() {
  return (
    <article className="">
      <h1 className="text-center text-xl font-bold mb-5 mt-3">
        Todo sobre el Tuqui 10
      </h1>
      <p>
        El sorteo de de la Caja Popular de Ahorro. Enterate todo acá en
        <span className="text-green-800 ml-1">sorteotuqui10.com</span>
      </p>
      <h2 className="my-4 font-bold text-lg">Soteo de mes {month}</h2>
      <p>
        Podes consultar{' '}
        <span>
          <Link href={`/mes/${month}`} className="text-green-700">
            acá
          </Link>
        </span>{' '}
        quienes fueron los ganadores del último sorteo.
      </p>
      <h2 className="my-4 font-semibold text-lg">
        ¿Cómo se juega al Tuqui 10?
      </h2>
      <p className="mb-5">
        <strong>
          El tuqui 10 de la caja popular de ahorros sortea 3 premios.
        </strong>
      </p>
      <p>
        Para <strong>el primero</strong> se sortean 10 bolillas, una vez sacadas
        las 10 bolillas si no hubo ganador, se acumula el pozo.
      </p>
      <div className="md:px-16 my-8">
        <div className="rounded-md border my-3">
          <p className="bg-green-700 text-white p-2 font-bold">Importante:</p>
          <p className="p-3">
            Al transcurrir 10 juegos seguidos con pozo acumulado, el sistema
            sortea adicionales hasta que se registre algún ganador.
          </p>
        </div>
      </div>
      <p>
        <strong>"Seguro Sale"</strong> es el nombre del segundo premio y reparte
        un pozo de hasta $1.300.000. Muy similar al primer premio, bajo esta
        modalidad se sortean 10 bolillas y una adicional hasta confirmar
        ganadores. En caso de no salir ningún ganador por bolilla, el premio
        será sorteado por número de cartón.
      </p>
      <p className="mt-5">
        El <strong>tercer premio</strong> son 10 ganadores de $30.000 pesos.
        Podrás saber si ganaste o no con tu número de carton.
      </p>
    </article>
  )
}
