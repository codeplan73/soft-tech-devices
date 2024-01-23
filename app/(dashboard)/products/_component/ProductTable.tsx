import React from 'react'
import prisma from '@/prisma/client'
import Image from 'next/image'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import Link from 'next/link'

const ProductTable = async () => {
  const products = await prisma.product.findMany({})
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Disc.Price
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b hover:bg-gray-50 "
            >
              <td className="px-6 py-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-xl"
                />
              </td>
              <td className="px-6 py-4"> {product.name}</td>
              <td className="px-6 py-4"> {product.category}</td>
              <td className="px-6 py-4">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(product.price)}
              </td>
              <td className="px-6 py-4 line-through">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(product.discountPrice)}
              </td>
              <td className="px-6 py-4"> {product.stockQuantity}</td>
              <td className="px-6 py-4"> {product.storageSize}</td>
              <td className="px-6 py-4"> {product.colour}</td>
              <td className="px-6 py-4 pt-7 flex items-end space-x-2">
                <Link href={`/products/edit/${product.id}`}>
                  <FaRegEdit className="text-lg border cursor-pointer border-blue-700 text-blue-700" />
                </Link>

                <FaRegTrashAlt className="text-lg cursor-pointer text-red-700 border border-red-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default ProductTable
