'use client'

import Image from 'next/image'
import LogoFooter from '@public/svg/LogoFooter.svg'

export default function Page () {
  return (
    <div className='relative'>
      <Image src="/images/signin-bg.webp" alt="Flowbite Logo" width={2048} height={2048} className="h-screen w-screen object-cover" />
      <main className='absolute inset-0 my-auto bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-col gap-8 mx-auto bg-white h-[512px] p-8 max-w-lg'>
        <Image src={LogoFooter} alt="Logo in the footer" className='h-28 w-auto' />
        <form className="max-w-sm w-full mx-auto">
          <div className="mb-5 w-full">
            <label htmlFor="username" className="text-primary-500 font-semibold block mb-2 text-base tracking-wider">Usuario</label>
            <input type="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="text-primary-500 font-semibold block mb-2 text-base tracking-wider">Contraseña</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-secondary font-semibold bg-primary-500 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-blue-800 mx-auto">Ingresar</button>
        </form>
      </main>
    </div>
  )
}
