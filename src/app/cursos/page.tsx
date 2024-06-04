import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CourseInfo from '@/components/cursos/CourseInfo'

export default function Page () {
  return (
    <>
      <NavBar />
      <main style={{ background: 'linear-gradient(172deg, #1a2833 0%, #000 100%)' }} className="pt-20">
        <h1 className='text-center text-primary-500 text-[32px] font-semibold'>Cursos en cápsula electrónica</h1>
        <ul>
          <CourseInfo />
          <CourseInfo />
          <CourseInfo />
        </ul>
      </main>
      <Footer />
    </>
  )
}
