import type { Metadata } from 'next'
import LogoFooter from '@public/svg/LogoFooter.svg'
import { Inter } from 'next/font/google'
import './aula.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cápsula electrónica',
  description: 'Plataforma de educación en electrónica, IoT y sistemas embebidos.'
}

export default function AulaLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      <link rel="prefetch" href="https://i.imgur.com" />
      <body className={`${inter.className} bg-no-repeat bg-cover bg-center md:bg-bottom min-h-screen`}>
        <nav className='flex items-center backdrop-blur-sm border-b border-gray-200 dark:border-gray-600 justify-between px-6 py-4 w-full'>
          <a href="/">
            <Image src={LogoFooter} alt="Logo in the footer" className='h-12 w-auto' />
          </a>
          <a href='/api/signout' type="submit" className="text-secondary font-semibold bg-primary-500 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-4 py-2 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-blue-800">Cerrar sesión</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
