import { NextRequest, NextResponse } from 'next/server'
import { categorySchema } from '@/app/schema'
import prisma from '@/prisma/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  let { title, name } = body

  const validation = categorySchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 404 })

  // Check if a category with the same name already exists
  const existingCategories = await prisma.category.findMany({})

  if (existingCategories.some((category) => category.name === name)) {
    // Category with the same name already exists, return an error
    return NextResponse.json(
      { message: 'Category with this name already exists' },
      { status: 400 }
    )
  }

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

export async function GET(req: NextRequest, res: NextResponse) {
  const category = await prisma.category.findMany({})
  return NextResponse.json({ category, status: 200 })
}
