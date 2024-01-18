import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { productSchema } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import TextBox from '../../components/TextBox'
import SelectText from '../../components/SelectText'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../components/Spinner'

import toast, { Toaster } from 'react-hot-toast'

export type Product = z.infer<typeof productSchema>

const ProductForm = () => {
  const router = useRouter()

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) })

  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const handleCreateProduct = async (data: Product) => {
    // console.log(data)
    try {
      setSubmitting(true)
      await axios.post('/api/products', data)
      toast.success('Item created successfully.')
      router.refresh()
      router.push('/products')
    } catch (error) {}
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handleCreateProduct)}>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-1 w-full md:flex-1">
          <label htmlFor="name" id="name" className="text-sm text-slate-600">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.name?.message}
          </p>
        </div>

        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="category"
            id="category"
            className="text-sm text-slate-600"
          >
            Category
          </label>
          <select
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.category ? 'border-red-500' : 'border-slate-300'
            }`}
            {...register('category')}
            id="category"
            autoComplete="on"
          >
            <option value="">Select Category</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="speaker">Speaker</option>
          </select>
          <p className="text-red-600 text-xs font-extralight">
            {errors.category?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="serialNumber"
            id="serialNumber"
            className="text-sm text-slate-600"
          >
            Serial Number
          </label>
          <input
            type="text"
            id="serialNumber"
            {...register('serialNumber')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.serialNumber ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.serialNumber?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label htmlFor="price" id="price" className="text-sm text-slate-600">
            Price
          </label>

          <input
            type="number"
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.price ? 'border-red-500' : 'border-slate-300'
            }`}
            {...register('price', {
              required: 'Email Address is required',
            })}
            aria-invalid={errors.price ? 'true' : 'false'}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.price?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="discountPrice"
            id="discountPrice"
            className="text-sm text-slate-600"
          >
            Discount Price
          </label>
          <input
            type="number"
            id="discountPrice"
            {...register('discountPrice')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.discountPrice ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.discountPrice?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="stockQuantity"
            id="stockQuantity"
            className="text-sm text-slate-600"
          >
            Stock Quantity
          </label>
          <input
            type="number"
            id="stockQuantity"
            {...register('stockQuantity')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.stockQuantity ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.stockQuantity?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="shortDescription"
            id="shortDescription"
            className="text-sm text-slate-600"
          >
            Short Description
          </label>
          <input
            type="text"
            id="shortDescription"
            {...register('shortDescription')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.shortDescription ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.shortDescription?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="longDescription"
            id="longDescription"
            className="text-sm text-slate-600"
          >
            Long Description
          </label>
          <input
            type="text"
            id="longDescription"
            {...register('longDescription')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.longDescription ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.longDescription?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="storageSize"
            id="storageSize"
            className="text-sm text-slate-600"
          >
            Storage Size
          </label>
          <input
            type="text"
            id="storageSize"
            {...register('storageSize')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.storageSize ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.storageSize?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="colour"
            id="colour"
            className="text-sm text-slate-600"
          >
            Colour
          </label>
          <input
            type="text"
            id="colour"
            {...register('colour')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.colour ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.colour?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <label
            htmlFor="imageUrl"
            id="imageUrl"
            className="text-sm text-slate-600"
          >
            Image Upload
          </label>
          <input
            type="text"
            id="imageUrl"
            {...register('imageUrl')}
            className={`border focus:outline-blue-400 rounded-xl p-2 ${
              errors.imageUrl ? 'border-red-500' : 'border-slate-300'
            }`}
            autoComplete="on"
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.imageUrl?.message}
          </p>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        className={`flex items-center space-x-4  text-white px-4 py-2 rounded-md ${
          isSubmitting ? 'bg-slate-900' : 'bg-blue-600'
        }`}
        type="submit"
      >
        <span> Submit</span>
        {isSubmitting && <Spinner />}
      </button>
    </form>
  )
}

export default ProductForm
