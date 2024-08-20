import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CourseDetails from '@/components/cursos/CourseDetails'
import CourseInfo from '@/components/cursos/CourseInfo'
import ContactPerson from '@public/svg/ConctactPerson.svg'
import IconWsp from '@public/svg/IconWsp.svg'
import Image from 'next/image'
import { courses } from '@/utils/coursesInfo'
import { chatLink } from '@/utils/links'

export default function Page ({ params }: { params: { curso: string } }) {
  const course = courses.find((course) => course.urlName === params.curso)
  return (
    <>
      <NavBar />
      <main style={{ background: 'linear-gradient(172deg, #1a2833 0%, #000 100%)' }} className="pt-20">
        {
          (course !== undefined && course !== null)
            ? <>
            <CourseInfo course={course} />
            <CourseDetails course={course} />)
            </>
            : <h1 className='text-center text-primary-500 text-[32px] font-semibold'>Curso no encontrado</h1>
        }
        <section className="flex flex-col items-center gap-8 py-12">
          <h2 className="text-center text-base font-bold text-white">Chatea con nosotros</h2>
          <div className="flex w-64 flex-col items-center gap-2">
            <Image src={ContactPerson} alt="Contact person icon" />
          </div>
          <a
            href={chatLink}
            target="_blank"
            rel='noreferrer noopener'
            className="flex h-12 w-80 bg-[#25D366] place-content-center items-center gap-2 rounded-xl border-[1px] border-white text-center text-xl text-white hover:bg-[#075e54]"
          >
            <Image src={IconWsp} alt="Whatsapp Icon for chat" />
            Quiero tomar este curso
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
