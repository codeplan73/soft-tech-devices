'use client'

import React from 'react'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Spinner from '@/app/components/Spinner'

const DeleteProductButton = ({ productId }: { productId: string }) => {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  const deleteProduct = async () => {
    try {
      setDeleting(true)
      await axios.delete('/api/products/' + productId)
      router.push('/products')
      router.refresh()
    } catch (error) {
      setError(true)
      setDeleting(false)
    }
  }

  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="outline" size="1" disabled={isDeleting}>
            <FaRegTrashAlt className="text-lg cursor-pointer text-red-700" />
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Delete Product</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This product will be deleted permanently and you
            cannot reverse it.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={deleteProduct}>
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This Product could not be deleted
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            Ok
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  )
}

export default DeleteProductButton
