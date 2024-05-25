import Image from 'next/image'
import IconFb from '@public/svg/IconFb.svg'
import IconTt from '@public/svg/IconTt.svg'
import LogoFooter from '@public/svg/LogoFooter.svg'

const navOptions = [
  {
    name: 'Nuestros cursos',
    url: '/cursos'
  },
  {
    name: 'Próximos inicios',
    url: '/proximos-inicios'
  },
  {
    name: 'Chatea con nosotros',
    url: 'https://wa.me/+51957686407'
  }
]

export default function Footer () {
  return (
    <footer
      className="bg-black"
    >
      <div className='flex max-w-7xl mx-auto flex-col items-center justify-between gap-4 bg-black py-12 md:flex-row md:gap-8 md:px-16 md:py-16 lg:px-32 xl:px-48'>
        <Image src={LogoFooter} alt="Logo in the footer" />
        <div className="flex items-center gap-4">
          <Image src={IconFb} alt="Facebook icon" />
          <Image src={IconTt} alt="Tik tok icon" />
        </div>
        <ul className="start flex flex-col gap-4">
          {
            navOptions.map((link, index) => (
              <a key={index} className="text-center text-sm hover:underline text-[#EFEFEF]" href={link.url}>
                {link.name}
              </a>
            ))
          }
        </ul>
      </div>
    </footer>
  )
}
