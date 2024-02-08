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

const SwapForm = dynamic(() => import('../../_component/SwapForm'), {
  ssr: false,
  loading: () => <ProductFormSkeleton />,
})

const EditSwapPage = async ({ params }: Props) => {
  const swap = await prisma.swap.findUnique({
    where: { id: params.id },
  })

  if (!swap) notFound()

  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      <Container>
        <div className="px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">
              <Link href="/dashboard">Dashboard</Link> /{' '}
              <Link href="/swaps">swaps</Link> / Edit / {swap?.itemName}
            </div>
          </div>
          <SwapForm swap={swap} />
        </div>
      </Container>
      <Toaster />
    </div>
  )
}

export default EditSwapPage
