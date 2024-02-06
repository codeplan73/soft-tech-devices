import { NextRequest, NextResponse } from 'next/server'
import { swapSchema } from '@/app/schema'
import prisma from '@/prisma/client'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
  response: NextResponse
) {
  try {
    const swapDetails = await prisma.swap.findUnique({
      where: { id: params.id },
    })
    return NextResponse.json(swapDetails, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid swap id' }, { status: 404 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json()

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

  const swap = await prisma.swap.findUnique({
    where: { id: params.id },
  })

  if (!swap) return NextResponse.json({ error: 'No swap found' })

  const updatedSwap = await prisma.swap.update({
    where: { id: swap.id },
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

  return NextResponse.json(updatedSwap, { status: 200 })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const swap = await prisma.swap.findUnique({
    where: { id: params.id },
  })

  if (!swap)
    return NextResponse.json({ error: 'Invalid swap' }, { status: 404 })

  await prisma.swap.delete({
    where: { id: swap.id },
  })

  return NextResponse.json({ message: 'Swap Item deleted successfully' })
}
