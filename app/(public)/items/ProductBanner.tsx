import React from 'react'
import { IoGrid } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import { CiFilter } from 'react-icons/ci'

const ProductBanner = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-md border border-slate-500 py-2 px-2">
      <h4>
        123 items in <span className="font-bold">category</span>
      </h4>
      <div className="flex items-start">
        <form className="">
          <select
            name=""
            id=""
            className="outline-none border border-slate-300 rounded-md p-1"
          >
            <option value="">
              <span>Filter By</span>
            </option>
            <option value="">Accessories</option>
            <option value="">Laptop</option>
            <option value="">Phones</option>
            <option value="">Speakers</option>
          </select>
        </form>

        <IoGrid className="text-2xl cursor-pointer p-1 hover:bg-slate-200" />
        <TiThMenu className="text-2xl font-bold cursor-pointer bg-slate-200 p-1" />
      </div>
    </div>
  )
}

export default ProductBanner
