'use client'
import React, { useState } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../components/Spinner'

const DeleteCategoryButton = ({ id }: { id: string }) => {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  const deleteCategory = async () => {
    try {
      setDeleting(true)
      await axios.delete('/api/category/' + id)
      router.push('/category')
      router.refresh()
    } catch (error) {
      setError(true)
      setDeleting(false)
    }
  }
  return (
    <button
      onClick={deleteCategory}
      className="text-center font-medium text-slate-800 hover:underline flex items-center space-x-2"
      disabled={isDeleting}
    >
      <BsFillTrash3Fill />

      {isDeleting && <Spinner />}
    </button>
  )
}

export default DeleteCategoryButton
