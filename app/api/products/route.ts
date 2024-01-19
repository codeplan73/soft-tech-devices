import { NextRequest, NextResponse } from 'next/server'
import { productSchema } from '@/app/schema'
// import prisma from '@/prisma/client'

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  let {
    name,
    category,
    serialNumber,
    price,
    discountPrice,
    stockQuantity,
    shortDescription,
    longDescription,
    storageSize,
    colour,
    imageUrl,
    thumbNail,
  } = body

  price = parseInt(price)
  discountPrice = parseInt(discountPrice)
  stockQuantity = parseInt(stockQuantity)
  // storageSize = parseInt(storageSize)

  const validation = productSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 404 })

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        category,
        serialNumber,
        price,
        discountPrice,
        stockQuantity,
        shortDescription,
        longDescription,
        storageSize,
        colour,
        imageUrl,
        thumbNail,
      },
    })
    return NextResponse.json(newProduct, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'post error', error }, { status: 500 })
  }
}

export async function GET(response: NextResponse) {
  const products = await prisma.product.findMany({})
  const totalProducts = products.length
  return NextResponse.json(
    {
      products: products,
      totalProducts: totalProducts,
    },
    { status: 200 }
  )
}
