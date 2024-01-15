import { NextRequest, NextResponse } from 'next/server'
import { productSchema } from '@/app/schema'
import prisma from '@/prisma/client'

// get single product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productDetails = await prisma.product.findUnique({
      where: { id: params.id },
    })
    return NextResponse.json(productDetails, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid Product Id' }, { status: 404 })
  }
}

// update single product
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  const {
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
  } = body

  const validation = productSchema.safeParse(body)

  const product = await prisma.product.findUnique({
    where: { id: params.id },
  })

  if (!product)
    return NextResponse.json({ error: 'Invalid product ' }, { status: 404 })

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
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
    },
  })

  return NextResponse.json(updatedProduct, { status: 200 })
}

// delete single product
