import React from 'react'
import prisma from '@/prisma/client'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import Link from 'next/link'
import DeleteSwapItemButton from './DeleteSwapItemButton'
import { Swap } from '@prisma/client'

const ProductTable = async () => {
  const swaps: Swap[] = await prisma.swap.findMany({})
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item
            </th>
            <th scope="col" className="px-6 py-3">
              From
            </th>
            <th scope="col" className="px-6 py-3">
              To
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
            <th scope="col" className="px-6 py-3">
              Difference
            </th>
            <th scope="col" className="px-6 py-3">
              P.Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {swaps.map((swap) => (
            <tr key={swap.id} className="bg-white border-b hover:bg-gray-50 ">
              <td className="px-6 py-4"> {swap.itemName}</td>
              <td className="px-6 py-4"> {swap.upgradeFrom}</td>
              <td className="px-6 py-4">{swap.upgradeTo}</td>
              <td className="px-6 py-4">{swap.customerName}</td>
              <td className="px-6 py-4"> {swap.customerPhone}</td>
              <td className="px-6 py-4">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(parseFloat(swap.appraisalValue))}
              </td>

              <td className="px-6 py-4">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(swap.differencePayable)}
              </td>

              <td className="px-6 py-4"> {swap.paymentStatus}</td>

              <td className="px-6 py-4 pt-7 flex items-start space-x-2">
                <Link href={`/swap/edit/${swap.id}`}>
                  <FaRegEdit className="text-xl cursor-pointer text-blue-700" />
                </Link>

                <DeleteSwapItemButton swapId={swap.id} />
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
