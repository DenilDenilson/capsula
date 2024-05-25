import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Offers from '@/components/Offers'

export default function Home () {
  return (
    <>
      <NavBar />
      <main className="">
        <Hero />
        <Offers />
      </main>
      <Footer />
    </>
  )
}
