'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { swapSchema } from '@/app/schema'
import { Swap } from '@prisma/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Spinner from '../../../components/Spinner'
import toast from 'react-hot-toast'
import ImageUpload from '../../_components/ImageUpload'
import Image from 'next/image'
import { Button, Callout } from '@radix-ui/themes'

export type SwapFormData = z.infer<typeof swapSchema>

const SwapForm = ({ swap }: { swap?: Swap }) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SwapFormData>({ resolver: zodResolver(swapSchema) })

  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [idUpload, setIdUpload] = useState(swap?.idUpload || '')

  useEffect(() => {
    if (swap?.idUpload) {
      setIdUpload(swap.idUpload)
    }
  }, [swap])

  const handleCreateswap = async (data: SwapFormData) => {
    // parseInt(data.appraisalValue)
    const swapData = {
      ...data,
      idUpload: idUpload ? idUpload : swap?.idUpload,
    }
    try {
      setSubmitting(true)
      if (swap) await axios.patch(`/api/swap/${swap.id}`, swapData)
      else await axios.post('/api/swap', swapData)
      toast.success('Item created successfully.')
      router.refresh()
      reset()
      setSubmitting(false)
      router.push('/swap')
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
      <form className="space-y-3" onSubmit={handleSubmit(handleCreateswap)}>
        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <div className="flex flex-col space-y-1 w-full md:flex-1">
            <label htmlFor="name" id="name" className="text-sm text-slate-600">
              Name
            </label>
            <input
              type="text"
              id="itemName"
              {...register('itemName')}
              defaultValue={swap?.itemName}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.itemName ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.itemName?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="itemBrand"
              id="itemBrand"
              className="text-sm text-slate-600"
            >
              Brand
            </label>
            <input
              type="text"
              id="itemBrand"
              {...register('itemBrand')}
              defaultValue={swap?.itemBrand}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.itemBrand ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.itemBrand?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="itemModel"
              id="itemModel"
              className="text-sm text-slate-600"
            >
              Model
            </label>
            <input
              type="text"
              id="itemModel"
              defaultValue={swap?.itemModel}
              {...register('itemModel')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.itemModel ? 'border-red-500' : 'border-slate-300'
              }`}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.itemModel?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="serialNumberFrom"
              id="serialNumberFrom"
              className="text-sm text-slate-600"
            >
              Serial Number From
            </label>

            <input
              type="text"
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.serialNumberFrom ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.serialNumberFrom}
              {...register('serialNumberFrom', {
                required: 'Email Address is required',
              })}
              aria-invalid={errors.serialNumberFrom ? 'true' : 'false'}
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.serialNumberFrom?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="serialNumberTo"
              id="serialNumberTo"
              className="text-sm text-slate-600"
            >
              Serial Number To
            </label>
            <input
              type="number"
              id="serialNumberTo"
              {...register('serialNumberTo')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.serialNumberTo ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.serialNumberTo}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.serialNumberTo?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="upgradeFrom"
              id="upgradeFrom"
              className="text-sm text-slate-600"
            >
              Upgrade From
            </label>
            <input
              type="text"
              id="upgradeFrom"
              defaultValue={swap?.upgradeFrom}
              {...register('upgradeFrom')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.upgradeFrom ? 'border-red-500' : 'border-slate-300'
              }`}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.upgradeFrom?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="upgradeTo"
              id="upgradeTo"
              className="text-sm text-slate-600"
            >
              Upgrade To
            </label>
            <input
              type="text"
              id="upgradeTo"
              {...register('upgradeTo')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.upgradeTo ? 'border-red-500' : 'border-slate-300'
              }`}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.upgradeTo?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="customerName"
              id="customerName"
              className="text-sm text-slate-600"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              {...register('customerName')}
              defaultValue={swap?.customerName}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.customerName ? 'border-red-500' : 'border-slate-300'
              }`}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.customerPhone?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="customerPhone"
              id="customerPhone"
              className="text-sm text-slate-600"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="customerPhone"
              {...register('customerPhone')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.customerPhone ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.customerPhone}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.customerPhone?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="customerEmail"
              id="customerEmail"
              className="text-sm text-slate-600"
            >
              Email
            </label>
            <input
              type="email"
              id="customerEmail"
              {...register('customerEmail')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.customerEmail ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.customerEmail}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.customerEmail?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="address"
              id="address"
              className="text-sm text-slate-600"
            >
              Address
            </label>
            <input
              type="email"
              id="address"
              {...register('address')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.address ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.address}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.address?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="status"
              id="status"
              className="text-sm text-slate-600"
            >
              status
            </label>
            <select
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.status ? 'border-red-500' : 'border-slate-300'
              }`}
              {...register('status')}
              id="status"
              autoComplete="on"
            >
              <option>{swap ? swap.status : 'Select Status'}</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorce">Divorce</option>
              <option value="Widow">Widow</option>
              <option value="Widower">Widower</option>
            </select>

            <p className="text-red-600 text-xs font-extralight">
              {errors.status?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="appraisalValue"
              id="appraisalValue"
              className="text-sm text-slate-600"
            >
              Appraisal Value
            </label>
            <input
              type="number"
              id="appraisalValue"
              {...register('appraisalValue')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.appraisalValue ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.appraisalValue}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.appraisalValue?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="differencePayable"
              id="differencePayable"
              className="text-sm text-slate-600"
            >
              Difference Payable
            </label>
            <input
              type="number"
              id="differencePayable"
              {...register('differencePayable')}
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.differencePayable ? 'border-red-500' : 'border-slate-300'
              }`}
              defaultValue={swap?.differencePayable}
              autoComplete="on"
            />
            <p className="text-red-600 text-xs font-extralight">
              {errors.differencePayable?.message}
            </p>
          </div>

          <div className="flex flex-col space-y-2 w-full md:flex-1">
            <label
              htmlFor="paymentStatus"
              id="paymentStatus"
              className="text-sm text-slate-600"
            >
              Payment Status
            </label>
            <select
              className={`border focus:outline-blue-400 rounded-xl p-2 ${
                errors.paymentStatus ? 'border-red-500' : 'border-slate-300'
              }`}
              {...register('paymentStatus')}
              id="paymentStatus"
              autoComplete="on"
            >
              <option>
                {swap ? swap.paymentStatus : 'Select Payment Status'}
              </option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>

            <p className="text-red-600 text-xs font-extralight">
              {errors.paymentStatus?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
          <ImageUpload setThumbNail={setIdUpload} setImageUrl={setIdUpload} />
          {swap && (
            <Image
              src={swap?.idUpload}
              alt={swap.itemName}
              height={200}
              width={200}
              className=""
            />
          )}
        </div>

        <Button
          disabled={isSubmitting}
          onClick={handleSubmit(handleCreateswap)}
          className={`flex items-center space-x-4 text-white px-4 py-2 rounded-md ${
            isSubmitting ? 'bg-slate-900' : 'bg-blue-600'
          }`}
        >
          {swap ? 'Update swap' : 'Submit New swap'}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  )
}

export default SwapForm
