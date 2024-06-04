export default async function Coursing () {
  const currentClass: number = 1
  const totalClass: number = 15
  return (
    <section className="bg-primary-500 bg-opacity-80 bg-[length:38px_38px] bg-[repeating-linear-gradient(0deg,_#FFBC42,_#FFBC42_1.9000000000000001px,_#1E2328_1.9000000000000001px,_#1E2328)] py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-12 pt-4">
        <h2 className="text-center text-primary-500 bg-secondary text-[32px] font-semibold">Cursos en proceso...</h2>
        <ul className="py-16 bg-secondary">
          <li className="grid grid-cols-[1fr,_64px] gap-4 px-4">
            <div className="outline relative outline-2 outline-primary-700 grid place-content-center rounded text-primary-900 text-lg font-semibold">Introducción a FPGA
            {/* Se coloca un texto en el div para que el width haga efecto y se pone del mismo color del fondo para que desaaprezca */}
              <p style={{ width: `${currentClass / totalClass * 100}%` }} className={'absolute h-full bg-primary-500 left-0 top-0 text-primary-500'}>.</p>
              <span style={{ textShadow: '2px 0px 16px rgb(255, 188, 66)' }} className="absolute inset-0 grid place-content-center">Introducción a FPGA</span>
            </div>
            <span className="text-gray-100 font-semibold text-sm self-center">{`clase ${currentClass}/${totalClass}`}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
