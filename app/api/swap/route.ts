import { NextRequest, NextResponse } from 'next/server'
import { swapSchema } from '@/app/schema'
import prisma from '@/prisma/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  const validation = swapSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 404 })

  const {
    itemName,
    itemBrand,
    itemModel,
    serialNumberFrom,
    serialNumberTo,
    upgradeFrom,
    upgradeTo,
    customerName,
    customerPhone,
    customerEmail,
    address,
    idUpload,
    status,
    appraisalValue,
    differencePayable,
    paymentStatus,
  } = body

  try {
    const newSwap = await prisma.swap.create({
      data: {
        itemName,
        itemBrand,
        itemModel,
        serialNumberFrom,
        serialNumberTo,
        upgradeFrom,
        upgradeTo,
        customerName,
        customerPhone,
        customerEmail,
        address,
        idUpload,
        status,
        appraisalValue,
        differencePayable,
        paymentStatus,
      },
    })

    return NextResponse.json(newSwap, { status: 200 })
  } catch (error) {
    console.error('Error: ', error)
    return NextResponse.json({ message: 'swap error', error }, { status: 500 })
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const swaps = await prisma.swap.findMany({})

  return NextResponse.json(swaps, { status: 200 })
}
