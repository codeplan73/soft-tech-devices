'use client'
import Link from 'next/link'
import { Container, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { Controller, useForm } from 'react-hook-form'
import { productSchema } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type Product = z.infer<typeof productSchema>

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) })

  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const handleOnSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      <Banner title="Add new Item" />

      <Container>
        <div className="px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xs text-slate-400">
              Dashboard / New Product
            </Link>
          </div>

          <div>
            <form className="space-y-3" onSubmit={handleOnSubmit}>
              <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
                <div className="flex flex-col space-y-2 w-full md:flex-1">
                  <label htmlFor="name" className="text-sm text-slate-600">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    name=""
                    className="border border-slate-300 focus:outline-blue-400 rounded-xl p-2"
                    id=""
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full md:flex-1">
                  <label htmlFor="name" className="text-sm text-slate-600">
                    Name
                  </label>
                  <select
                    name=""
                    className="border border-slate-300 focus:outline-blue-400 rounded-xl p-2"
                    id=""
                  >
                    <option value="">Select Category</option>
                    <option value="phone">Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="speaker">Speaker</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page
