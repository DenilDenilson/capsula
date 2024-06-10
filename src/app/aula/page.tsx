import OwnCourses from '@/components/aula/OwnCourses'

const courses = [
  {
    title: 'Curso de FPGA',
    description: 'Aprende a programar una FPGA desde cero',
    imageSrc: '/images/fpga-thumb.webp',
    nextTo: '/aula/fpga'
  },
  {
    title: 'Curso de FPGA',
    description: 'Aprende a programar una FPGA desde cero',
    imageSrc: '/images/fpga-thumb.webp',
    nextTo: '/aula/fpga'
  },
  {
    title: 'Curso de FPGA',
    description: 'Aprende a programar una FPGA desde cero',
    imageSrc: '/images/fpga-thumb.webp',
    nextTo: '/aula/fpga'
  }
]

export default function Page () {
  return (
    <div className="px-2 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold my-4 text-white">Bienvenido username</h1>
      <section className=''>
        <h2 className='text-xl font-bold text-primary-500 mb-2'>Tus cursos</h2>
        <ul className='flex flex-wrap gap-4 mb-12'>
          {
            courses.map((course, index) => (
              <li key={index} className=''>
                <OwnCourses
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  nextTo={course.nextTo}
                  />
              </li>
            ))
            }
        </ul>
      </section>
      <section className=''>
        <h2 className='text-xl font-bold text-primary-500 mb-2'>Cursos que te pueden interesar</h2>
        <ul className='flex flex-wrap gap-4'>
          {
            courses.map((course, index) => (
              <li key={index} className=''>
                <OwnCourses
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  nextTo={course.nextTo}
                  />
              </li>
            ))
            }
        </ul>
      </section>
    </div>
  )
}
