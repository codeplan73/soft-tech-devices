import { Table } from '@radix-ui/themes'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'

const LoadingProductsPage = () => {
  const products = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
              <th scope="col" className="px-6 py-3">
                <Skeleton />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product} className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4 line-through">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LoadingProductsPage
