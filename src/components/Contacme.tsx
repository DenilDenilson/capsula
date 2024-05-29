import Image from 'next/image'
import ContactPerson from '@public/svg/ConctactPerson.svg'
import IconWsp from '@public/svg/IconWsp.svg'

export default function Contacme () {
  return (
    <section className="flex bg-secondary flex-col items-center gap-8 py-12">
      <h2 className="text-center text-[32px] font-semibold text-primary-500">Contáctanos</h2>
      <div className="flex w-64 flex-col items-center gap-2">
        <Image src={ContactPerson} alt="Contact person icon" />
        <p className="text-center text-xs font-medium tracking-[0.15px] text-[#CACACA]">
          Pregúntanos acerca de los nuevos inicios o cómo acceder a los cursos
          grabados.
        </p>
      </div>
      <a
        href="https://wa.me/+51957686407"
        target="_blank"
        rel='noreferrer noopener'
        className="flex h-8 w-64 place-content-center items-center gap-2 rounded border-[1px] border-white p-2 text-center text-base text-white hover:bg-primary-900"
      >
        <Image src={IconWsp} alt="Whatsapp Icon for chat" />
        ¿Qué cursos puedo tomar?
      </a>
    </section>
  )
}
