import Image from 'next/image'

interface Props {
  image: string
  text: string
  discount: string
}
const CategoryCard = ({ image, text, discount }: Props) => {
  return (
    <div className="max-w-md flex flex-col items-center gap-2 rounded-sm drop-shadow-sm bg-white px-2 py-2 border">
      <Image className="h-28" src={image} alt="" height={100} width={100} />
      <h4 className="text-sm font-semibold">{text}</h4>
      <p className="bg-red-100 px-2 py-1 text-xs text-red-500 rounded-2xl">
        {discount}
      </p>
    </div>
  )
}

export default CategoryCard
