import Link from 'next/link'
import HeaderLinks from './HeaderLinks'

function HeaderComponent() {
  return (
    <nav className=" w-full flex flex-wrap justify-center md:justify-between items-center">
      <Link className="mt-5 md:my-0 text-green-800 font-extrabold" href="/">
        Sorteo Tuqui 10
      </Link>
      <div className="ml-0 md:ml-auto">
        <ul className="flex gap-x-2 py-5 w-min ml-auto">
          <HeaderLinks />
          <li className="capitalize whitespace-nowrap rounded-md py-1 px-2 shadow">
            <Link href="/mes">Ver Todos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default HeaderComponent
