import Image from 'next/image'
import Time from '@public/svg/Time.svg'
import LevelBasic from '@public/svg/LevelBasic.svg'

const course = {
  urlName: 'iotr4',
  id: '1',
  srcImage: 'https://i.imgur.com/MIm14ZA.jpg',
  name: 'Programacion en Arduino UNO R4 y aplicaciones en IoT',
  description:
      'En este curso aprenderás a programar en la plataforma arduino de cero a experto conociendo las características del nuevo Arduino UNO R4 WiFi así como las aplicaciones IoT con esta tarjeta',
  professor: 'Denilson Trujillo Salazar',
  profeImg: 'https://i.imgur.com/5a2Nduf.jpeg',
  duration: '30',
  level: 'Básico',
  whatYourLearn: [
    'Programar de manera escalable',
    'Integrar IoT a tus proyectos',
    'Crear tus propias librerías',
    'Prototipar tus proyectos de manera rápida'
  ],
  forWhoIs: [
    'Ingenieros y técnicos',
    'Entusiastas y autodidactas',
    'Amantes del hardware'
  ]
}

export default function CourseInfo () {
  return (
    <div className="mx-auto mt-8 max-w-5xl border-primary-500 border rounded-xl md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 p-4">
    <Image
      src={course.srcImage}
      alt={course.name}
      width={640}
      height={640}
      className="mx-auto self-center rounded-md"
    />
    <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
      <div>
        <h1 className="text-base font-bold md:text-lg text-gray-100">{course.name}</h1>
        <p className="text-xs font-medium text-[#CACACA] md:text-sm">
          {course.description}
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-4">
          <div
            className="h-12 w-12 overflow-hidden rounded-full border-2 border-white"
          >
            <Image
              src={course.profeImg}
              alt="Foto del profesor"
              width={48}
              height={48}
            />
          </div>
          <div>
            <p className="text-xs font-medium text-[#939393]">Profesor:</p>
            <p className="text-base font-medium text-gray-300">{course.professor}</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div
            className="grid h-12 w-12 place-content-center overflow-hidden rounded-full border-white"
          >
            <Image src={Time} alt="Banner Arduino R4" width={32} height={32} />
          </div>
          <div>
            <p className="text-base font-medium text-gray-300">
              {course.duration} horas de contenido
            </p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div
            className="grid h-12 w-12 place-content-center overflow-hidden rounded-full border-white"
          >
            <Image
              src={LevelBasic}
              alt="Banner Arduino R4"
              width={24}
              height={24}
            />
          </div>
          <div>
            <p className="text-base font-medium text-gray-300">{course.level}</p>
          </div>
        </li>
      </ul>
      <ul className="text-base font-bold text-gray-100">
        ¿Qué aprenderás?
        {
          course.whatYourLearn.map((skill, index) => {
            return (
              <li key={index} className="text-xs font-medium text-[#CACACA] md:mt-1">
                ✔ {skill}
              </li>
            )
          })
        }
      </ul>
      <ul className="text-base font-bold text-gray-100">
        ¿Para quién está dirigido este curso?
        {
          course.forWhoIs.map((person, index) => {
            return (
              <li key={index} className="text-xs font-medium text-[#CACACA] md:mt-1">
                ✔ {person}
              </li>
            )
          })
        }
      </ul>
    </div>
  </div>

  )
}
