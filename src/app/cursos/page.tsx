import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CourseInfo from '@/components/cursos/CourseInfo'

import { courses } from '@/utils/coursesInfo'

export default function Page () {
  return (
    <>
      <NavBar />
      <main style={{ background: 'linear-gradient(172deg, #1a2833 0%, #000 100%)' }} className="pt-20">
        <h1 className='text-center text-primary-500 text-[32px] font-semibold'>Cursos en cápsula electrónica</h1>
        <ul>
          {
            courses.map((course) => (
            <a key={course.id} href={`./cursos/${course.urlName}`}>
              <CourseInfo course={course}/>
            </a>
            ))
          }
        </ul>
      </main>
      <Footer />
    </>
  )
}
