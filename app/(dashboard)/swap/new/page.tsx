import React from 'react'
import SwapForm from '../_component/SwapForm'
import Banner from '@/app/components/Banner'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import { Toaster } from 'react-hot-toast'

const NewSwapPage = () => {
  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      {/* <Banner title="Add new Item" /> */}

      <Container>
        <div className=" px-10 py-4 overflow-y-scroll bg-white rounded-md shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xs text-slate-400">
              Dashboard / New Swap
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-8/12">
              <SwapForm />
            </div>
            <div className="w-full md:w-4/12 bg-white drop-shadow-lg rounded-lg">
              <h4>Print Receipt Section</h4>
            </div>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  )
}

export default NewSwapPage
