import NavBar from '@/components/NavBar'

export default function Home () {
  return (
    <>
      <NavBar />
      <main className="mt-16">
        <h1 className="">Welcome to my site public!</h1>
        <a href="/aula" className="">Ingresa al aula virtual</a>
      </main>
    </>
  )
}
