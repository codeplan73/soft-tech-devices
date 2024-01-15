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

// delete single product
