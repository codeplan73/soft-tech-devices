'use client'

import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { productSchema } from '@/app/schema'
import { Product } from '@prisma/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../../components/Spinner'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import toast from 'react-hot-toast'
import ImageUpload from '../../_components/ImageUpload'
import SelectCategory from '../../_components/SelectCategory'
import Image from 'next/image'
import { Button, Callout } from '@radix-ui/themes'

export type ProductFormData = z.infer<typeof productSchema>

const ProductForm = ({ product }: { product?: Product }) => {
  const router = useRouter()

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({ resolver: zodResolver(productSchema) })

  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || '')
  const [thumbNail, setThumbNail] = useState('')

  useEffect(() => {
    if (product?.imageUrl) {
      setImageUrl(product.imageUrl)
    }
  }, [product])

  const handleCreateProduct = async (data: ProductFormData) => {
    const productData = {
      ...data,

      thumbNail: thumbNail || product?.thumbNail,
      imageUrl: imageUrl ? imageUrl : product?.imageUrl,
    }
    try {
      setSubmitting(true)
      if (product) await axios.patch(`/api/products/${product.id}`, productData)
      else await axios.post('/api/products', productData)
      toast.success('Item created successfully.')
      router.refresh()
      reset()
      setSubmitting(false)
      router.push('/products')
    } catch (error) {
      console.error(error)
      setError('An unexpected error occurred.')
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
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
              defaultValue={product?.name}
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
              <option>{product ? product.category : 'Select Category'}</option>

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
              defaultValue={product?.serialNumber}
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
            <label
              htmlFor="price"
              id="price"
              className="text-sm text-slate-600"
            >
              Price
            </label>

            <input
              type="number"
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.price ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={product?.price}
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
              defaultValue={product?.discountPrice}
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
              defaultValue={product?.stockQuantity}
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
              defaultValue={product?.storageSize}
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
              defaultValue={product?.colour}
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
              defaultValue={product?.shortDescription}
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
              defaultValue={product?.longDescription}
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
          {product && (
            <Image
              src={product?.imageUrl}
              alt={product.name}
              height={200}
              width={200}
              className=""
            />
          )}
        </div>

        <Button
          disabled={isSubmitting}
          onClick={handleSubmit(handleCreateProduct)}
          className={`flex items-center space-x-4 text-white px-4 py-2 rounded-md ${
            isSubmitting ? 'bg-slate-900' : 'bg-blue-600'
          }`}
        >
          {product ? 'Update Product' : 'Submit New Product'}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  )
}

export default ProductForm
