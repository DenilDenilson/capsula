import Image from 'next/image'

interface cardOfferInterface {
  title: string
  altText: string
  description: string
  ImageSrc: string
}

export default function CardOffers ({ title, altText, description, ImageSrc }: cardOfferInterface) {
  return (
    <div className="flex w-64 flex-col items-center gap-2">
      <Image src={ImageSrc} alt={altText} width={128} height={128} />
      <h6 className="text-[#F7F7F7]">{title}</h6>
      <p className="text-center text-xs font-medium tracking-[0.15px] text-[#CACACA]">
        {description}
      </p>
    </div>
  )
}
