import React from 'react'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import { Metadata } from 'next'
import SwapTable from './_component/SwapTable'
import Banner from '../../components/auth/Banner'
import { Toaster } from 'react-hot-toast'

const SwapPage = () => {
  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4 overflow-y-auto overflow-auto">
      <Banner title="Swap Products List" />

      <Container>
        <div className="px-4 py-4 bg-white rounded-md shadow-xl flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xs text-slate-400">
              Dashboard / Swap
            </Link>
            <Link
              href="/products/new"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-xl"
            >
              Swap Item
            </Link>
          </div>

          <div>
            <SwapTable />
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Swap product List',
  description: 'List of all swap items',
}

export default SwapPage
