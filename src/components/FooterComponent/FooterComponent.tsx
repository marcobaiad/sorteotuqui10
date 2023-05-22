import Link from 'next/link'

function FooterComponent() {
  return (
    <footer className="bottom-0">
      <ul>
        <li>
          <Link className="block" href="/mes">
            Todos los sorteos
          </Link>
        </li>
        <li>
          <Link className="block" href="/mes">
            Sorteos Mes Actual
          </Link>
        </li>
        <li>
          <Link className="block" href="/mes">
            Sorteos Mes Pasado
          </Link>
        </li>
      </ul>
    </footer>
  )
}
export default FooterComponent
