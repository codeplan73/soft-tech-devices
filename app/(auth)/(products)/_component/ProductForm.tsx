import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { productSchema } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../components/Spinner'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import toast, { Toaster } from 'react-hot-toast'
import ImageUpload from './ImageUpload'
import SelectCategory from './SelectCategory'

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
  const [imageUrl, setImageUrl] = useState('')
  const [thumbNail, setThumbNail] = useState('')

  const handleCreateProduct = async (data: Product) => {
    const productData = {
      ...data,
      thumbNail: thumbNail,
      imageUrl: imageUrl,
    }
    try {
      setSubmitting(true)
      await axios.post('/api/products', productData)
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
            <option>Select Category</option>

            <SelectCategory />
          </select>
          <p className="text-red-600 text-xs font-extralight">
            {errors.category?.message}
          </p>
        </div>

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
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
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
            htmlFor="shortDescription"
            id="shortDescription"
            className="text-sm text-slate-600"
          >
            Summary
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
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <div className="flex flex-col space-y-2 w-full md:flex-1">
          <Controller
            name="longDescription"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Enter Product Description" {...field} />
            )}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.longDescription?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <ImageUpload setThumbNail={setThumbNail} setImageUrl={setImageUrl} />
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
