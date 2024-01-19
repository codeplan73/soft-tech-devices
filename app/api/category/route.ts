import { NextRequest, NextResponse } from 'next/server'
import { categorySchema } from '@/app/schema'
import prisma from '@/prisma/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  let { title, name } = body

  const validation = categorySchema.safeParse(body)

  console.log(title, name)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 404 })

  try {
    const newCategory = await prisma.category.create({
      data: {
        title,
        name,
      },
    })
    return NextResponse.json(newCategory, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'post error', error }, { status: 500 })
  }
}
