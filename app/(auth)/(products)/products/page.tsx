import React from 'react'
import Banner from '../../components/Banner'
import Link from 'next/link'
import { Container } from '@radix-ui/themes'
import prisma from '@/prisma/client'
import Image from 'next/image'

const page = async () => {
  const products = await prisma.product.findMany({})

  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-4">
      <Banner title="Products Page" />

      <Container>
        <div className="px-4 py-4 overflow-y-scroll bg-white rounded-md shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xs text-slate-400">
              Dashboard / Product
            </Link>
            <Link
              href="/new"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-xl"
            >
              Add New
            </Link>
          </div>

          <div>
            {products.map((product) => (
              <div key={product.id}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={1000}
                  width={500}
                  className="max-w-xs"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page
