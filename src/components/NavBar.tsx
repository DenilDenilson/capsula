'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function NavBar () {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  // Con true al recargar la página no aparece el menú desplegable, coas rara

  return (
    <nav className="backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={64} height={64} src="/svg/nav-logo.svg" className="h-8" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href='/aula' type="button" className="text-secondary font-semibold bg-primary-500 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-blue-800">Aula virtual</a>
          <button onClick={() => { setIsMenuOpen(!isMenuOpen) }} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            <div className={`absolute h-screen top-[72px] overflow-hidden backdrop-blur-3xl right-0 bg-black bg-opacity-95 transition-all duration-300 ${isMenuOpen ? 'w-0' : 'w-1/2'}`} id="navbar-hamburger">
              <ul className="flex py-8 flex-col font-medium dark:border-gray-700">
                <li>
                  <a href="/cursos" className="block py-2 px-3 rounded hover:bg-primary-500 text-gray-400 dark:hover:bg-gray-700 " aria-current="page">Cursos</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded hover:bg-primary-500 text-gray-400 dark:hover:bg-gray-700 ">Próximos inicios</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded hover:bg-primary-500 text-gray-400 dark:hover:bg-gray-700 ">Contáctanos</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a href="/cursos" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Cursos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Próximos inicios</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
