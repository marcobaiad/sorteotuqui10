import { HeaderComponent } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Sorteo Tuqui 10 Tucumán',
  description:
    'Resultados Tuqui 10, controlá el último sorteo. Enterate de como se juega, los días y horarios del sorteo.',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white md:bg-gray-200">
        <main className="container px-10 md:px-48 lg:px-72 h-full">
          <div
            className="px-2 md:px-48 lg:px-52 bg-white"
            style={{ minHeight: '100vh' }}
          >
            <HeaderComponent />
            {children}
            {/* <FooterComponent /> */}
            <div className="py-10" />
          </div>
        </main>
      </body>
    </html>
  )
}
