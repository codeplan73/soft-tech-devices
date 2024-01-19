import React from 'react'
import prisma from '@/prisma/client'

const List = async () => {
  const categories = await prisma.category.findMany({})
  return (
    <div>
      <h2>Category List</h2>

      <div>
        {categories.map((category) => (
          <div key={category.id}></div>
        ))}
      </div>
    </div>
  )
}

export default List
