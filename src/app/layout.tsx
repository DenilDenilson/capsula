import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cápsula electrónica',
  description: 'Plataforma de educación en electrónica, IoT y sistemas embebidos.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      <link rel="prefetch" href="https://i.imgur.com" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
