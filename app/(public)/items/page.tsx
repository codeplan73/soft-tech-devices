import React from 'react'
import Banner from '@/app/components/Banner'
import ProductBanner from './ProductBanner'
import ProductCardFlex from './ProductCardFlex'

const page = () => {
  return (
    <div className="w-full flex gap-4 px-5 md:px-20 py-5 bg-slate-100">
      <div className="hidden md:flex w-3/12 bg-white">
        <h2>Category Section</h2>
      </div>

      <div className="w-full md:w-9/12 flex flex-col space-y-4">
        <ProductBanner />
        <div className="flex flex-col items-start space-y-4">
          <ProductCardFlex />
          <ProductCardFlex />
          <ProductCardFlex />
          <ProductCardFlex />
        </div>
      </div>
    </div>
  )
}

export default page
