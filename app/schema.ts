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
  title: z.string().min(3, 'Category title is required').max(100),
  name: z.string().min(3, 'Category name is required').max(100),
})

export const swapSchema = z.object({
  itemName: z.string().min(3, 'Item name is required').max(100),
  itemBrand: z.string().min(3, 'Item brand is required').max(100),
  itemModel: z.string().min(3, 'Item model is required').max(100),
  serialNumberFrom: z.string().min(3, 'Item serial number is required'),
  serialNumberTo: z.string().min(2, 'Item serial number is required'),
  upgradeFrom: z.string().min(2, 'Item upgrade from is required').max(100),
  upgradeTo: z.string().min(2, 'Item upgrade to is required').max(100),
  customerName: z.string().min(2, 'Customer name is required').max(100),
  customerPhone: z.string().min(2, 'phone number is required').max(100),
  customerEmail: z.string().min(2, 'email is required').max(100),
  address: z.string().min(3, 'Address is required').max(100),
  idUpload: z.string().optional(),
  status: z.string().min(3, 'Status is required'),
  appraisalValue: z.string().min(3, 'Item value is required'),
  differencePayable: z.string().min(3, 'Amount payable is required'),
  paymentStatus: z.string().min(1, 'Payment status is required'),
})
