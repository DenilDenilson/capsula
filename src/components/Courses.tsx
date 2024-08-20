// import Image from 'next/image'
import CardCourse from './home/CardCourse'

const courses = [
  {
    title: 'Programación en Arduino UNO R4 WiFi desde cero hasta aplicaciones IoT',
    description: 'Aprende a programar un Arduino UNO R4 WiFi desde cero hasta aplicaciones IoT con sensores y actuadores',
    imageSrc: '/images/Course-UNOR4-banner.webp',
    nextTo: '/cursos/iotr4'
  },
  {
    title: 'Diseño de hardware con FPGA usando VHDL y HDL coder de Simulink Mod 1',
    description: 'Aprende a programar una FPGA desde cero usando el lenguaje de descripción de hardware VHDL y matlab con HDL coder de Simulink',
    imageSrc: '/images/Course-FPGA1-banner.webp',
    nextTo: '/cursos/fpga1'
  },
  {
    title: 'Diseño de hardware con FPGA usando VHDL y HDL coder de Simulink Mod 2',
    description: 'En este módulo 2 aprenderás el desarrollo de periféricos enfocados en la comunicación serial y paralela con otros dispositivos',
    imageSrc: '/images/Course-FPGA1-banner.webp',
    nextTo: '/cursos/fpga2'
  },
  {
    title: 'Integración Avanzada y Aplicaciones de Sistemas FPGA y Procesadores Nios II',
    description: 'Aprende a integrar sistemas complejos con FPGA y procesadores Nios II, aplicaciones de sistemas embebidos y sistemas de tiempo real',
    imageSrc: '/images/Course-FPGA1-banner.webp',
    nextTo: '/cursos/fpga3'
  }
]

export default function Courses () {
  return (
    <section className="relative py-8 bg-[url('/images/courses-bg-mobile.webp')] bg-no-repeat bg-center bg-cover after:content-[''] z-10 after:absolute after:inset-0 after:bg-black after:opacity-50">
      <div className='relative max-w-7xl mx-auto'>
        {/* <Image src='/images/cursos-bg.webp' width={1280} height={530} alt='Imagen de una FPGA de fondo' /> */}
        {/* <div className='absolute top-0 left-0 right-0 z-40 px-2 py-2'> */}
        <div className='px-2 pt-4 pb-12 relative z-40'>
          <h2 className='text-center text-primary-500 text-[32px] font-semibold'>Nuestros cursos</h2>
          {/* <p style={{ 'text-shadow': '1px 0px 13px rgba(0,0,0,0.5)' }} className="text-xs text-center font-light leading-3 mb-4 text-gray-200 max-w-72 mx-auto xl:text-gray-100"> */}
          <p className="text-xs text-center font-light leading-3 mb-4 text-gray-200 max-w-72 mx-auto xl:text-gray-100">
            Psss, todos nuestros cursos son síncronos, <br />
            <span>pregunta por los próximos inicios <a className="underline" href="">aquí</a></span>
          </p>
          <ul className='flex flex-wrap gap-4'>
            {
              courses.map((course, index) => (
                <li key={index} className='mx-auto flex-auto'>
                  <CardCourse
                    title={course.title}
                    description={course.description}
                    imageSrc={course.imageSrc}
                    nextTo={course.nextTo}
                    />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
