export default function Hero () {
  return (
    <section className="relative after:inset-0 after:bg-black z-10 after:content-[''] after:opacity-20 after:absolute">
      {/* <video style={{ width: '100vw', aspectRatio: '3840:2160', objectFit: 'cover' }} muted autoPlay loop preload="auto"> */}
      <video className="min-h-96 max-h-screen w-screen aspect-auto object-cover" muted autoPlay loop preload="auto">
        <source src="/videos/HeroMain-Optimized.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <hgroup className="absolute inset-0 gap-4 grid z-50 place-content-center">
        <h1 className="px-2 leading-9 text-pretty text-center xl:text-6xl text-3xl md:leading-[48px] xl:leading-[64px] text-[#F7F7F7]">
          Descubre y domina la tecnología con <br />
          <span className="font-extrabold text-primary-500"> Cápsula electrónica</span>
        </h1>
        <p
          className="max-w-xl px-2 text-pretty text-center text-base font-light leading-[21px] tracking-[0.15px] text-white md:text-base md:leading-[24px] sm:max-w-2xl lg:max-w-4xl lg:text-lg xl:max-w-6xl md:tracking-[0.18px] xl:text-2xl"
        >
          Te proporcionamos las herramientas y el conocimiento para que entiendas la tecnología y construyas lo que desees. Descubre, crea y dale vida a tus ideas. En cápsula electrónica, te ayudamos a entender y construir el futuro.
        </p>
      </hgroup>
    </section>
  )
}
