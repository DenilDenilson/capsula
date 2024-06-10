interface CardCourseProps {
  title: string
  description: string
  imageSrc: string
  nextTo: string
}

export default function OwnCourses ({ title, description, imageSrc, nextTo }: CardCourseProps) {
  return (
    <div className="block w-64 pb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={imageSrc} alt="" />
        </a>
        <div className="p-1">
            <a href="#">
                <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <a href={nextTo} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-900 bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Aprender
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  )
}
