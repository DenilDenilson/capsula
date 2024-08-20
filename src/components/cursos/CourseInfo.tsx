import Image from 'next/image'
import Time from '@public/svg/Time.svg'
import LevelBasic from '@public/svg/LevelBasic.svg'
import { type ICourse } from '@/utils/coursesInfo'

export default function CourseInfo ({ course }: { course: ICourse }) {
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
