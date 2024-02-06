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
