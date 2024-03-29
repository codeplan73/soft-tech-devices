'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { categorySchema } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../../components/Spinner'

import toast, { Toaster } from 'react-hot-toast'

export type Category = z.infer<typeof categorySchema>

const AddCategory = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Category>({ resolver: zodResolver(categorySchema) })

  const handleCreateCategory = async (data: Category) => {
    try {
      setSubmitting(true)

      // Check if the category with the same name already exists
      const existingCategories = await axios.get('/api/category')
      if (
        existingCategories.data.some(
          (category: Category) => category.name === data.name
        )
      ) {
        // Category with the same name already exists, handle accordingly
        toast.error('Category with this name already exists.')
        setSubmitting(false)
        reset()
        return
      }

      // If no existing category with the same name, proceed with creating a new one
      await axios.post('/api/category', data)

      toast.success('Item created successfully.')
      router.refresh()
      router.push('/category')
      setSubmitting(false)
      reset()
    } catch (error) {
      console.error('Error creating category:', error)
      toast.error('Error creating category. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(handleCreateCategory)}
    >
      <h2 className="text-center md:text-start text-lg font-semibold">
        Add New Category
      </h2>
      <hr />

      <div className="flex flex-col gap-4  w-full">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="title" id="title" className="text-sm text-slate-600">
            Category Title
          </label>
          <input
            type="text"
            id="Title"
            {...register('title')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.title ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.title?.message}
          </p>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="name" id="name" className="text-sm text-slate-600">
            Category Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.name?.message}
          </p>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        className={`flex text-center items-center justify-center space-x-4  text-white px-4 py-2 rounded-md ${
          isSubmitting ? 'bg-slate-900' : 'bg-blue-600'
        }`}
        type="submit"
      >
        <span className="text-center"> Submit</span>
        {isSubmitting && <Spinner />}
      </button>

      <Toaster position="top-right" />
    </form>
  )
}

export default AddCategory
