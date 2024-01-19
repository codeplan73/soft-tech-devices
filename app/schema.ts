import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(2, 'Product name is required').max(100),
  category: z.string().min(2).max(50, 'Category is required'),
  serialNumber: z.string().min(1, 'Serial number is required').max(50),
  price: z.string().min(2, 'Price is required').max(50),
  discountPrice: z.string().min(1, 'Discount price is required'),
  stockQuantity: z.string().min(1, 'Stock is required'),
  shortDescription: z
    .string()
    .min(3, 'Short Description is required')
    .max(65535),
  longDescription: z
    .string()
    .min(10, 'Long Description is required')
    .max(65535),
  storageSize: z.string().optional(),
  colour: z.string().optional(),
  imageUrl: z.string().optional(),
  thumbNail: z.string().optional(),
})

export const categorySchema = z.object({
  title: z.string().min(3, 'title is required').max(100),
  name: z.string().min(3, 'name is required').max(100),
})

// export type Product = z.infer<typeof productSchema>
// export type Category = z.infer<typeof categorySchema>
