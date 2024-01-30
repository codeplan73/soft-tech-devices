import React from 'react'
import Banner from '@/app/components/Banner'
import ProductBanner from './ProductBanner'

const page = () => {
  return (
    <div className="w-full flex gap-4 px-5 md:px-20 py-5">
      <div className="w-3/12 bg-white">
        <h2>Category Section</h2>
      </div>

      <div className="w-full md:w-9/12 flex flex-col space-y-4">
        <ProductBanner />
        <div></div>
      </div>
    </div>
  )
}

export default page
