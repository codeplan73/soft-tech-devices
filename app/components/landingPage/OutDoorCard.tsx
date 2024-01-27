import Image from 'next/image'

interface Props {
  title: string
  price: string
  image: string
}

const OutDoorCard = ({ title, price, image }: Props) => {
  return (
    <div className="flex flex-col max-w-xs bg-white gap-2 rounded-sm drop-shadow-sm px-2 py-2 border">
      <h4 className="font-semibold text-md">{title}</h4>
      <div className="flex items-start justify-between">
        <h4 className="font-semibold text-sm text-slate-600">{price}</h4>
        <Image
          className="h-20 w-16"
          src={image}
          height={100}
          width={100}
          alt="Product Image"
        />
      </div>
    </div>
  )
}

export default OutDoorCard
