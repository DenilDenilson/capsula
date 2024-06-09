/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import Image from 'next/image'
import LogoFooter from '@public/svg/LogoFooter.svg'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { signInServer } from '@/server/authActions'

export default function Page () {
  const [error, setError] = useState(false)
  return (
    <div className='relative'>
      <Image src="/images/signin-bg.webp" alt="Flowbite Logo" width={2048} height={2048} className="h-screen w-screen object-cover" />
      <main className='absolute inset-0 my-auto bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col gap-8 mx-auto bg-white h-[512px] p-8 max-w-lg'>
        <a href="/">
          <Image src={LogoFooter} alt="Logo in the footer" className='h-28 w-auto' />
        </a>
        <form
          className="max-w-sm w-full mx-auto"
          action={async (formData) => {
            const credentials = Object.fromEntries(formData)
            const wasLoged = await signInServer(credentials)
            if (wasLoged.error) {
            // Error al iniciar sesión
              console.log('Error al iniciar sesión', wasLoged.error)
              setError(true)
            } else {
              // inició sesión correctamente
              // Lo mandamos a la ruta /aula
              console.log('Inició sesión correctamente', wasLoged.error)
              redirect('/aula')
            }
          }}
          >
          <div className="mb-5 w-full">
            <label htmlFor="username" className="text-primary-500 font-semibold block mb-2 text-base tracking-wider">Usuario</label>
            <input type="username" id="username" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="text-primary-500 font-semibold block mb-2 text-base tracking-wider">Contraseña</label>
            <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          {
            error && <p className="text-red-700 bg-white p-1 text-lg font-semibold mb-4">❌ Error al iniciar sesión</p>
          }
          <button type="submit" className="text-secondary w-full font-semibold bg-primary-500 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-4 py-2 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-blue-800 mx-auto">Ingresar</button>
        </form>
      </main>
    </div>
  )
}
