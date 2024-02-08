import React from 'react'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'
import dynamic from 'next/dynamic'
import ProductFormSkeleton from '../../../_components/FormSkeleton'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'

interface Props {
  params: { id: string }
}

const ProductForm = dynamic(() => import('../../_component/ProductForm'), {
  ssr: false,
  loading: () => <ProductFormSkeleton />,
})

const EditProductPage = async ({ params }: Props) => {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  })

  if (!product) notFound()

  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      <Container>
        <div className="px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">
              <Link href="/dashboard">Dashboard</Link> /{' '}
              <Link href="/products">Products</Link> / Edit / {product?.name}
            </div>
          </div>
          <ProductForm product={product} />
        </div>
      </Container>
      <Toaster />
    </div>
  )
}

export default EditProductPage
