import { capitalizeWord } from '@/utils/capitalizeLetter'
import { allMonths } from '@/utils/monthsAvailables'
import Link from 'next/link'

const currentDate = new Date()
const month = allMonths[currentDate.getMonth()]

export const metadata = {
  title: `Sorteo del Tuqui 10 Tucumán resultados - ${month} 2023`,
  description: `Resultados Tuqui 10, controlá el último sorteo del més de ${month} 2023. Mirá de cuanto fué el premio mayor y quien ganó. Entrá ahora`,
}

export default async function Home() {
  return (
    <article className="">
      <h1 className="text-center text-xl font-bold mb-5 mt-3">
        Todo sobre el Tuqui 10
      </h1>
      <p>
        El sorteo de la Caja Popular de Ahorro. Enterate todo acá en
        <span className="text-green-800 ml-1">sorteotuqui10.com</span>.
      </p>
      <p>
        Que el premios se queden en tucumán, esa es la premisa de la caja de
        ahorros de la provincia con la creación de esta modalidad.
      </p>
      <h2 className="my-4 font-bold text-lg">
        Sorteo {capitalizeWord(month)} 2023
      </h2>
      <p>
        Podes consultar{' '}
        <span>
          <Link href={`/mes/${month}`} className="text-green-700 font-bold">
            acá
          </Link>
        </span>{' '}
        quienes fueron los ganadores del último sorteo. Conocé los montos
        sorteados, quienes fueron los ganadores y de que lugar de la provincia
        fueron los afortunados.
      </p>
      <h2 className="my-4 font-bold text-lg">¿Cómo se juega al Tuqui 10?</h2>
      <p>
        El tuqui 10 de la caja popular de ahorros sortea
        <strong>3 premios.</strong>
      </p>
      <p>
        Para <strong>el primero</strong> se sortean 10 bolillas, una vez sacadas
        las 10 bolillas si no hubo ganador, se acumula el pozo. Esta es una
        caracteristica extremadamente buena, ya que el pozo se incrementa cada
        vez que queda vacante.
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
        <strong>"Seguro Sale"</strong> es el nombre del{' '}
        <strong>segundo premio</strong> y reparte un pozo de hasta $1.300.000.
        Muy similar al primer premio, bajo esta modalidad se sortean 10 bolillas
        y una adicional hasta confirmar ganadores. En caso de no salir ningún
        ganador por bolilla, el premio será sorteado por número de cartón.
      </p>
      <p className="mt-5">
        Por último, el <strong>tercer premio</strong> contempla{' '}
        <b>10 ganadores de $30.000 pesos</b>, para saber si ganaste consultá tu
        número de carton.
      </p>
      <h2 className="my-4 font-bold text-lg">
        ¿Cúándo y a qué hora es el sorteo?
      </h2>
      <p className="mt-5">
        La hora del sorteo es a las 20, y se repite cada día domingo.
      </p>
    </article>
  )
}
