import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'

const ProductCardFlex = () => {
  return (
    <div className="w-full bg-white rounded drop-shadow flex items-start p-2">
      <div className="w-2/6 md:w-1/5">
        <Image
          src="/img/iphone-14-pro-max.jpeg"
          width={100}
          height={100}
          alt="product image"
          className="rounded h-full w-full"
        />
      </div>
      <div className="w-4/6 md:w-3/5 pl-4 flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">Product Title</p>
          <p className="text-gray-500">
            <span className="line-through mr-2">Original Price</span>
            <span className="font-bold">Discount Price</span>
          </p>
          <div className="text-sm text-gray-600">
            <p>
              Reviews: <span className="font-semibold">Rating</span>
            </p>
            <p>
              Shipping: <span className="font-semibold">Details</span>
            </p>
          </div>
          <p className="hidden md:block text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            inventore in facere necessitatibus laudantium hic dolorem quo
            explicabo! Tenetur, modi!
          </p>
        </div>
        <Link
          href="/items/productDetails"
          className="text-blue-700 hover:underline"
        >
          View Details
        </Link>
      </div>

      <CiHeart className="ml-auto border border-slate-400 rounded-md text-blue-700 font-extrabold text-2xl cursor-pointer" />
    </div>
  )
}

export default ProductCardFlex
