import React from 'react'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { IoIosStar } from 'react-icons/io'

interface Props {
  image: string
  price: string
  discountPrice: string
  name: string
  rating: string
}

const ProductCardGrid = ({
  image,
  price,
  discountPrice,
  name,
  rating,
}: Props) => {
  return (
    <div className="flex flex-col border border-slate-200 max-w-sm bg-white gap-2 rounded-md drop-shadow-lg overflow-hidden">
      {/* <Image
        src={image}
        height={100}
        width={100}
        alt="product image"
        className="w-full h-full"
      /> */}
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt="product image"
        />
      </div>
      <div className="p-4 flex items-start">
        <div className="flex flex-col space-y-1">
          <p className="flex space-x-2">
            <span className="font-bold">{price}</span>
            <span className="text-slate-500 line-through">{discountPrice}</span>
          </p>
          <div className="flex items-start justify-start space-x-2">
            <p className="flex">
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
            </p>
            <span className="text-yellow-400 -mt-1">{rating}</span>
          </div>
          <p className="text-balance leading-tight text-slate-500 text-sm line-clamp-1">
            {name}
          </p>
        </div>
        <CiHeart className="border border-slate-400 rounded-md text-blue-700 font-extrabold text-xl cursor-pointer" />
      </div>
    </div>
  )
}

export default ProductCardGrid
