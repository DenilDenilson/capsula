import Image from 'next/image'
import ContactPerson from '@public/svg/ConctactPerson.svg'
import IconWsp from '@public/svg/IconWsp.svg'
import { chatLink } from '@/utils/links'

export default function Contacme () {
  return (
    <section className="flex bg-[url('/images/contac-bg.webp')] bg-no-repeat bg-center bg-cover flex-col items-center gap-8 py-12">
      <h2 className="text-center text-[32px] font-semibold text-primary-500">Contáctanos</h2>
      <div className="flex w-64 flex-col items-center gap-2">
        <Image src={ContactPerson} alt="Contact person icon" />
        <p style={{ textShadow: '2px 0px 16px rgb(0, 0, 0)' }} className="text-center text-xs font-medium tracking-[0.15px] text-[#CACACA]">
          Pregúntanos acerca de los nuevos inicios o cómo acceder a los cursos
          grabados.
        </p>
      </div>
      <a
        href={chatLink}
        target="_blank"
        rel='noreferrer noopener'
        className="flex h-12 w-80 bg-[#25D366] place-content-center items-center gap-2 rounded-xl border-[1px] border-white text-center text-xl text-white hover:bg-[#075e54]"
      >
        <Image src={IconWsp} alt="Whatsapp Icon for chat" />
        ¿Qué cursos puedo tomar?
      </a>
    </section>
  )
}
