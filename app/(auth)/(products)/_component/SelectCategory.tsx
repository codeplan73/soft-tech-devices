import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Category } from '@prisma/client'

const SelectCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category')
        if (response.data) {
          setCategories(response.data)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <>
      {Array.isArray(categories) &&
        categories.length !== 0 &&
        categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.title}
          </option>
        ))}
    </>
  )
}

export default SelectCategory
