'use client'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Banner from '@/app/components/auth/Banner'
import dynamic from 'next/dynamic'
import ProductFormSkeleton from '../../_components/FormSkeleton'

const ProductForm = dynamic(() => import('../_component/ProductForm'), {
  ssr: false,
  loading: () => <ProductFormSkeleton />,
})

const NewProductPage = () => {
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
          <ProductForm />
        </div>
      </Container>
      <Toaster />
    </div>
  )
}

export default NewProductPage
