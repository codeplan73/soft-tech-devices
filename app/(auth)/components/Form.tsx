import { register } from 'module'
import React from 'react'
import SelectText from './SelectText'
import TextBox from './TextBox'
import { useForm } from 'react-hook-form'
import { productSchema } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type Product = z.infer<typeof productSchema>

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) })

  return (
    <form className="space-y-3">
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox type="text" id="name" label="Name" {...register('name')} />

        <SelectText name="category" id="category" label="Category" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox
          type="text"
          id="serialNumber"
          label="serial Number"
          {...register('serialNumber')}
        />
        <TextBox type="text" id="price" label="Price" {...register('price')} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox
          type="text"
          id="discountPrice"
          label="Discount Price"
          {...register('discountPrice')}
        />
        <TextBox
          type="text"
          id="stockQuantity"
          label="Stock Quantity"
          {...register('stockQuantity')}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox
          type="text"
          id="shortDescription"
          label="Short Description"
          {...register('shortDescription')}
        />
        <TextBox
          type="text"
          id="longDescription"
          label="Long Description"
          {...register('longDescription')}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox
          type="text"
          id="storageSize"
          label="storage Size"
          {...register('storageSize')}
        />
        <TextBox
          type="text"
          id="colour"
          label="Colour"
          {...register('colour')}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:space-x-4 w-full">
        <TextBox
          type="file"
          id="imageUrl"
          label="Upload Image"
          {...register('imageUrl')}
        />
      </div>

      {/* <Button disabled={isSubmitting}>
            
                Submit
                {isSubmitting && <Spinner />}{' '}
              </Button> */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
