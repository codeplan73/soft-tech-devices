import prisma from '@/prisma/client'

import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const category = await prisma.category.findUnique({
    where: { id: params.id },
  })

  if (!category)
    return NextResponse.json({ error: 'Invalid Category' }, { status: 404 })

  await prisma.category.delete({
    where: { id: category.id },
  })

  return NextResponse.json({})
}
