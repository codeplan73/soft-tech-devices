import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3, 'title is required').max(100),
  category: z.string().min(3).max(50, 'Category is required'),
  serialNumber: z.string().optional(),
  price: z.number().min(1, 'price is required'),
  discountPrice: z.number().min(1, 'discount price is required'),
  stockQuantity: z.number().int().min(0, 'stock is required'),
  shortDescription: z.string().min(3, 'description is required').max(65535),
  longDescription: z.string().min(10, 'description is required').max(65535),
  storageSize: z.number().optional(),
  colour: z.string().optional(),
  imageUrl: z.string().url().optional(),
})

export const categorySchema = z.object({
  title: z.string().min(3, 'title is required').max(100),
  name: z.string().min(3, 'name is required').max(100),
})

export type Product = z.infer<typeof productSchema>
export type Category = z.infer<typeof categorySchema>
