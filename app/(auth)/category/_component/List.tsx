import React from 'react'
import prisma from '@/prisma/client'
import DeleteCategoryButton from './DeleteCategoryButton'

const List = async () => {
  const categories = await prisma.category.findMany({})

  return (
    <div className="overflow-y-scroll">
      <h2 className="text-center text-lg font-bold mb-4">Category List</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="bg-white border-b hover:bg-gray-50 "
              >
                <td className="px-6 py-4"> {category.title}</td>
                <td className="px-6 py-4"> {category.name}</td>
                <td className="px-6 py-4">
                  <DeleteCategoryButton id={category.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List
