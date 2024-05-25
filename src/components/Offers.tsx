import CardOffers from './home/CardOffers'
import OnLiveImage from '@public/svg/OnLive.svg'
import MaterialPPT from '@public/svg/MaterialPPT.svg'
import Hardware from '@public/svg/Hardware.svg'

const cardsOffersInfo = [
  {
    imagesrc: OnLiveImage,
    altText: 'On live image',
    title: 'Clases gravadas y en vivo',
    description:
      'En cápsula electrónica tenemos inicios de cursos, donde estos son grabados y subidos a la plataforma para su posterior consulta. Esto permite obtener lo mejor de ambos métodos; interacción directa con el profesor y acceso al contenido en todo momento.'
  },
  {
    imagesrc: MaterialPPT,
    altText: "Material's ppt image",
    title: 'Todo el material expuesto para ti',
    description:
      'En cápsula electrónica tendrás acceso a todo el material preparado para la especialización; códigos, presentaciones, esquemáticos, datasheets, CADs, todo lo que veas en la pantalla del profesor, estará en la tuya.'
  },
  {
    imagesrc: Hardware,
    altText: 'Hardware image',
    title: 'El hardware que necesitas',
    description:
      'En cápsula electrónica hacemos cosas que podrás tocar, no nos quedamos solo en las pantallas, queremos que lleves tus ideas al mundo real, para esto, en cápsula te otorgamos todo el hardware necesario para seguir la especialización y hacer tus ideas realidad.'
  }
]

export default function Offers () {
  return (
    <section style={{ background: 'linear-gradient(172deg, #1a2833 0%, #172e36 100%)' }} className="md:py-18 flex flex-col items-center gap-8 py-12">
      <h2 className="text-center text-[32px] font-semibold text-white">
        En cápsula ofrecemos
      </h2>
      <div
        className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-16"
      >
        {
          cardsOffersInfo.map((cardsOfferInfo) => (
            <CardOffers
              key={cardsOfferInfo.title}
              title={cardsOfferInfo.title}
              altText={cardsOfferInfo.altText}
              description={cardsOfferInfo.description}
              ImageSrc={cardsOfferInfo.imagesrc}
            />
          ))
        }
      </div>
    </section>
  )
}
