import React from 'react'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import { Metadata } from 'next'
import ProductTable from './_component/ProductTable'
import Banner from '../../components/auth/Banner'

const page = () => {
  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4 overflow-y-auto overflow-auto">
      <Banner title="Products List" />

      <Container>
        <div className="px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xs text-slate-400">
              Dashboard / Product
            </Link>
            <Link
              href="/products/new"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-xl"
            >
              Add New
            </Link>
          </div>

          <div>
            <ProductTable />
          </div>
        </div>
      </Container>
    </div>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Product List',
  description: 'List of all products',
}

export default page
