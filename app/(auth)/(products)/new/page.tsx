'use client'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import React from 'react'
import Banner from '../../components/Banner'
import toast, { Toaster } from 'react-hot-toast'
import ProductForm from '../_component/ProductForm'

const page = () => {
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

export default page
