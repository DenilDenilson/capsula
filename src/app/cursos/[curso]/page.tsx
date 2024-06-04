import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CourseDetails from '@/components/cursos/CourseDetails'
import CourseInfo from '@/components/cursos/CourseInfo'
import ContactPerson from '@public/svg/ConctactPerson.svg'
import IconWsp from '@public/svg/IconWsp.svg'
import Image from 'next/image'

export default function Page ({ params }: { params: { curso: string } }) {
  return (
    <>
      <NavBar />
      <main style={{ background: 'linear-gradient(172deg, #1a2833 0%, #000 100%)' }} className="pt-20">
        <CourseInfo />
        <CourseDetails />
        <section className="flex flex-col items-center gap-8 py-12">
          <h2 className="text-center text-base font-bold text-white">Chatea con nosotros</h2>
          <div className="flex w-64 flex-col items-center gap-2">
            <Image src={ContactPerson} alt="Contact person icon" />
          </div>
          <a
            href="https://wa.me/+51957686407"
            target="_blank"
            rel='noreferrer noopener'
            className="flex h-8 w-64 place-content-center items-center gap-2 rounded border-[1px] border-white p-2 text-center text-base font-light text-white"
          >
            <Image src={IconWsp} alt="Whatsapp Icon for chat" />
            Quiero inscribirme
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
