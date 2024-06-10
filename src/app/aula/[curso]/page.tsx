export default function Page ({ params }: { params: { curso: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-2 md:grid md:grid-cols-[256px_minmax(400px,_1fr)] md:gap-4 pt-4">
      <aside>
        <h2 className="text-xl font-bold text-white mb-2">Contenido</h2>
        <ul>
          <li className="text-white font-semibold">Clase 1</li>
          <li className="text-white font-semibold">Clase 2</li>
          <li className="text-white font-semibold">Clase 3</li>
          <li className="text-white font-semibold">Clase 4</li>
          <li className="text-white font-semibold">Clase 5</li>
        </ul>
      </aside>
      <main>
        <h1 className="text-xl font-bold text-primary-500 mb-2">Curso de {params.curso}</h1>
        <iframe width="1006" height="566" className="w-full h-auto aspect-[1006/566]" src="https://www.youtube.com/embed/Qr4FPQxPx54?list=RDecf89739CEc" title="canción que escuchas al entrar a los backrooms" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p className="text-xl font-bold text-white my-2">Contenido adicional</p>
        <ul>
          <a className="text-white font-semibold" href="">Contenido extra</a>
        </ul>
      </main>
    </div>
  )
}
